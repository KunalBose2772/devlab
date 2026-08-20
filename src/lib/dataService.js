// Data & Journey Tracking Service (Supabase & Local-First Fallback)
import { supabase } from './supabase';

const PROGRESS_KEY = 'devlab-concept-progress';
const LAB_ATTEMPTS_KEY = 'devlab-lab-attempts';
const CHALLENGE_ATTEMPTS_KEY = 'devlab-challenge-attempts';
const STREAK_KEY = 'devlab-user-streaks';

const isClient = typeof window !== 'undefined';

// --- STREAK MANAGEMENT ---
export async function getUserStreak(userId) {
  if (!isClient) return 1;

  // --- SUPABASE MODE ---
  if (supabase) {
    try {
      const { data: streakData, error } = await supabase
        .from('user_streaks')
        .select('*')
        .eq('user_id', userId)
        .maybeSingle();

      const today = new Date().toDateString();
      const yesterday = new Date(Date.now() - 86400000).toDateString();

      if (error) throw error;

      if (!streakData) {
        const initial = { user_id: userId, count: 1, last_active_date: today, updated_at: new Date().toISOString() };
        await supabase.from('user_streaks').upsert(initial);
        return 1;
      }

      if (streakData.last_active_date === today) {
        return streakData.count;
      } else if (streakData.last_active_date === yesterday) {
        const newCount = streakData.count + 1;
        await supabase
          .from('user_streaks')
          .upsert({ user_id: userId, count: newCount, last_active_date: today, updated_at: new Date().toISOString() });
        return newCount;
      } else {
        await supabase
          .from('user_streaks')
          .upsert({ user_id: userId, count: 1, last_active_date: today, updated_at: new Date().toISOString() });
        return 1;
      }
    } catch (err) {
      console.warn('Supabase streak error, falling back to local:', err);
    }
  }

  // --- LOCAL FALLBACK MODE ---
  try {
    const streaks = JSON.parse(localStorage.getItem(STREAK_KEY) || '{}');
    const userStreak = streaks[userId];
    
    if (!userStreak) {
      const initial = { count: 1, lastActiveDate: new Date().toDateString() };
      streaks[userId] = initial;
      localStorage.setItem(STREAK_KEY, JSON.stringify(streaks));
      return 1;
    }

    const today = new Date().toDateString();
    const yesterday = new Date(Date.now() - 86400000).toDateString();

    if (userStreak.lastActiveDate === today) {
      return userStreak.count;
    } else if (userStreak.lastActiveDate === yesterday) {
      userStreak.count += 1;
      userStreak.lastActiveDate = today;
      streaks[userId] = userStreak;
      localStorage.setItem(STREAK_KEY, JSON.stringify(streaks));
      return userStreak.count;
    } else {
      userStreak.count = 1;
      userStreak.lastActiveDate = today;
      streaks[userId] = userStreak;
      localStorage.setItem(STREAK_KEY, JSON.stringify(streaks));
      return 1;
    }
  } catch (e) {
    console.error('Error fetching local streak', e);
    return 1;
  }
}

// --- CONCEPT PROGRESS ---
export async function getConceptProgress(userId, conceptSlug) {
  if (!isClient) return { status: 'not_started', stepsCompleted: 0 };

  // --- SUPABASE MODE ---
  if (supabase) {
    try {
      const { data, error } = await supabase
        .from('concept_progress')
        .select('*')
        .eq('user_id', userId)
        .eq('concept_slug', conceptSlug)
        .maybeSingle();

      if (error) throw error;
      if (data) {
        return { status: data.status, stepsCompleted: data.steps_completed };
      }
    } catch (err) {
      console.warn('Supabase progress get failed, falling back:', err);
    }
  }

  // --- LOCAL FALLBACK MODE ---
  try {
    const progress = JSON.parse(localStorage.getItem(PROGRESS_KEY) || '{}');
    const userProg = progress[userId] || {};
    return userProg[conceptSlug] || { status: 'not_started', stepsCompleted: 0 };
  } catch (e) {
    console.error('Error fetching progress', e);
    return { status: 'not_started', stepsCompleted: 0 };
  }
}

export async function saveConceptProgress(userId, conceptSlug, stepsCompleted, totalSteps) {
  if (!isClient) return;

  const status = stepsCompleted >= totalSteps ? 'complete' : 'in_progress';

  // --- SUPABASE MODE ---
  if (supabase) {
    try {
      const { error } = await supabase
        .from('concept_progress')
        .upsert({
          user_id: userId,
          concept_slug: conceptSlug,
          status,
          steps_completed: stepsCompleted,
          total_steps: totalSteps,
          updated_at: new Date().toISOString()
        });

      if (error) throw error;
      await getUserStreak(userId);
      return;
    } catch (err) {
      console.warn('Supabase progress save failed, falling back:', err);
    }
  }

  // --- LOCAL FALLBACK MODE ---
  try {
    const progress = JSON.parse(localStorage.getItem(PROGRESS_KEY) || '{}');
    if (!progress[userId]) progress[userId] = {};
    
    progress[userId][conceptSlug] = {
      status,
      stepsCompleted,
      totalSteps,
      updatedAt: new Date().toISOString()
    };
    
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
    await getUserStreak(userId);
  } catch (e) {
    console.error('Error saving progress', e);
  }
}

// --- LAB ATTEMPTS ---
export async function getLabAttempt(userId, labId) {
  if (!isClient) return null;

  // --- SUPABASE MODE ---
  if (supabase) {
    try {
      const { data, error } = await supabase
        .from('lab_attempts')
        .select('*')
        .eq('user_id', userId)
        .eq('lab_id', labId)
        .maybeSingle();

      if (error) throw error;
      if (data) {
        return {
          code: data.code,
          testsPassed: data.tests_passed,
          testsTotal: data.tests_total,
          completed: data.completed
        };
      }
    } catch (err) {
      console.warn('Supabase lab get failed, falling back:', err);
    }
  }

  // --- LOCAL FALLBACK MODE ---
  try {
    const attempts = JSON.parse(localStorage.getItem(LAB_ATTEMPTS_KEY) || '{}');
    const userAttempts = attempts[userId] || {};
    return userAttempts[labId] || null;
  } catch (e) {
    console.error('Error fetching lab attempt', e);
    return null;
  }
}

export async function saveLabAttempt(userId, labId, code, testsPassed, testsTotal) {
  if (!isClient) return;

  const completed = testsPassed === testsTotal;

  // --- SUPABASE MODE ---
  if (supabase) {
    try {
      const { error } = await supabase
        .from('lab_attempts')
        .upsert({
          user_id: userId,
          lab_id: labId,
          code,
          tests_passed: testsPassed,
          tests_total: testsTotal,
          completed,
          updated_at: new Date().toISOString()
        });

      if (error) throw error;
      await getUserStreak(userId);
      return;
    } catch (err) {
      console.warn('Supabase lab save failed, falling back:', err);
    }
  }

  // --- LOCAL FALLBACK MODE ---
  try {
    const attempts = JSON.parse(localStorage.getItem(LAB_ATTEMPTS_KEY) || '{}');
    if (!attempts[userId]) attempts[userId] = {};
    
    attempts[userId][labId] = {
      code,
      testsPassed,
      testsTotal,
      completed,
      updatedAt: new Date().toISOString()
    };
    
    localStorage.setItem(LAB_ATTEMPTS_KEY, JSON.stringify(attempts));
    await getUserStreak(userId);
  } catch (e) {
    console.error('Error saving lab attempt', e);
  }
}

// --- CHALLENGE ATTEMPTS ---
export async function getChallengeAttempt(userId, challengeId) {
  if (!isClient) return null;

  // --- SUPABASE MODE ---
  if (supabase) {
    try {
      const { data, error } = await supabase
        .from('challenge_attempts')
        .select('*')
        .eq('user_id', userId)
        .eq('challenge_id', challengeId)
        .maybeSingle();

      if (error) throw error;
      if (data) {
        return {
          code: data.code,
          score: data.score,
          completed: data.completed
        };
      }
    } catch (err) {
      console.warn('Supabase challenge get failed, falling back:', err);
    }
  }

  // --- LOCAL FALLBACK MODE ---
  try {
    const attempts = JSON.parse(localStorage.getItem(CHALLENGE_ATTEMPTS_KEY) || '{}');
    const userAttempts = attempts[userId] || {};
    return userAttempts[challengeId] || null;
  } catch (e) {
    console.error('Error fetching challenge attempt', e);
    return null;
  }
}

export async function saveChallengeAttempt(userId, challengeId, code, score) {
  if (!isClient) return;

  const completed = score >= 100;

  // --- SUPABASE MODE ---
  if (supabase) {
    try {
      const { error } = await supabase
        .from('challenge_attempts')
        .upsert({
          user_id: userId,
          challenge_id: challengeId,
          code,
          score,
          completed,
          updated_at: new Date().toISOString()
        });

      if (error) throw error;
      await getUserStreak(userId);
      return;
    } catch (err) {
      console.warn('Supabase challenge save failed, falling back:', err);
    }
  }

  // --- LOCAL FALLBACK MODE ---
  try {
    const attempts = JSON.parse(localStorage.getItem(CHALLENGE_ATTEMPTS_KEY) || '{}');
    if (!attempts[userId]) attempts[userId] = {};
    
    attempts[userId][challengeId] = {
      code,
      score,
      completed,
      updatedAt: new Date().toISOString()
    };
    
    localStorage.setItem(CHALLENGE_ATTEMPTS_KEY, JSON.stringify(attempts));
    await getUserStreak(userId);
  } catch (e) {
    console.error('Error saving challenge attempt', e);
  }
}

// --- DASHBOARD STATISTICS ---
export async function getDashboardStats(userId) {
  if (!isClient) {
    return {
      streak: 1,
      conceptsCompleted: 0,
      conceptsTotal: 38,
      labsCompletedCount: 0,
      challengesSolvedCount: 0,
      recentActivity: []
    };
  }

  // --- SUPABASE MODE ---
  if (supabase) {
    try {
      const streak = await getUserStreak(userId);

      const [progRes, labRes, challengeRes] = await Promise.all([
        supabase.from('concept_progress').select('*').eq('user_id', userId),
        supabase.from('lab_attempts').select('*').eq('user_id', userId),
        supabase.from('challenge_attempts').select('*').eq('user_id', userId)
      ]);

      const progressList = progRes.data || [];
      const labList = labRes.data || [];
      const challengeList = challengeRes.data || [];

      const conceptsCompleted = progressList.filter(p => p.status === 'complete').length;
      const labsCompletedCount = labList.filter(l => l.completed).length;
      const challengesSolvedCount = challengeList.filter(c => c.completed).length;

      const recentActivity = [];

      progressList.forEach(p => {
        recentActivity.push({
          type: 'concept',
          name: p.concept_slug.charAt(0).toUpperCase() + p.concept_slug.slice(1).replace('-', ' '),
          time: new Date(p.updated_at).toLocaleDateString(undefined, { month: 'short', day: 'numeric' }),
          status: p.status,
          timestamp: new Date(p.updated_at).getTime()
        });
      });

      labList.forEach(l => {
        recentActivity.push({
          type: 'lab',
          name: l.lab_id.replace('lab-', '').split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
          time: new Date(l.updated_at).toLocaleDateString(undefined, { month: 'short', day: 'numeric' }),
          status: l.completed ? 'complete' : 'in-progress',
          timestamp: new Date(l.updated_at).getTime()
        });
      });

      challengeList.forEach(c => {
        recentActivity.push({
          type: 'challenge',
          name: c.challenge_id.replace('challenge-', '').split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
          time: new Date(c.updated_at).toLocaleDateString(undefined, { month: 'short', day: 'numeric' }),
          status: c.completed ? 'complete' : 'in-progress',
          timestamp: new Date(c.updated_at).getTime()
        });
      });

      recentActivity.sort((a, b) => b.timestamp - a.timestamp);

      return {
        streak,
        conceptsCompleted,
        conceptsTotal: 38,
        labsCompletedCount,
        challengesSolvedCount,
        recentActivity: recentActivity.slice(0, 5)
      };
    } catch (err) {
      console.warn('Supabase dashboard stats failed, falling back:', err);
    }
  }

  // --- LOCAL FALLBACK MODE ---
  try {
    const streak = await getUserStreak(userId);
    const progress = JSON.parse(localStorage.getItem(PROGRESS_KEY) || '{}');
    const userProg = progress[userId] || {};
    const conceptsCompleted = Object.values(userProg).filter(p => p.status === 'complete').length;
    
    const labs = JSON.parse(localStorage.getItem(LAB_ATTEMPTS_KEY) || '{}');
    const userLabs = labs[userId] || {};
    const labsCompletedCount = Object.values(userLabs).filter(l => l.completed).length;

    const challenges = JSON.parse(localStorage.getItem(CHALLENGE_ATTEMPTS_KEY) || '{}');
    const userChallenges = challenges[userId] || {};
    const challengesSolvedCount = Object.values(userChallenges).filter(c => c.completed).length;

    const recentActivity = [];
    
    Object.entries(userProg).forEach(([slug, p]) => {
      recentActivity.push({
        type: 'concept',
        name: slug.charAt(0).toUpperCase() + slug.slice(1).replace('-', ' '),
        time: new Date(p.updatedAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric' }),
        status: p.status,
        timestamp: new Date(p.updatedAt).getTime()
      });
    });

    Object.entries(userLabs).forEach(([id, l]) => {
      recentActivity.push({
        type: 'lab',
        name: id.replace('lab-', '').split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
        time: new Date(l.updatedAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric' }),
        status: l.completed ? 'complete' : 'in-progress',
        timestamp: new Date(l.updatedAt).getTime()
      });
    });

    Object.entries(userChallenges).forEach(([id, c]) => {
      recentActivity.push({
        type: 'challenge',
        name: id.replace('challenge-', '').split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
        time: new Date(c.updatedAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric' }),
        status: c.completed ? 'complete' : 'in-progress',
        timestamp: new Date(c.updatedAt).getTime()
      });
    });

    recentActivity.sort((a, b) => b.timestamp - a.timestamp);

    return {
      streak,
      conceptsCompleted,
      conceptsTotal: 38,
      labsCompletedCount,
      challengesSolvedCount,
      recentActivity: recentActivity.slice(0, 5)
    };
  } catch (e) {
    console.error('Error generating dashboard stats', e);
    return {
      streak: 1,
      conceptsCompleted: 0,
      conceptsTotal: 38,
      labsCompletedCount: 0,
      challengesSolvedCount: 0,
      recentActivity: []
    };
  }
}
