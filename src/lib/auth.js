// Authentication Service (Supabase with Local-First Fallback)
import { supabase } from './supabase';

const USER_SESSION_KEY = 'devlab-current-session';
const REGISTERED_USERS_KEY = 'devlab-registered-users';

const isClient = typeof window !== 'undefined';

export function getRegisteredUsers() {
  if (!isClient) return [];
  try {
    const data = localStorage.getItem(REGISTERED_USERS_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.error('Error reading registered users', e);
    return [];
  }
}

export function saveRegisteredUsers(users) {
  if (!isClient) return;
  try {
    localStorage.setItem(REGISTERED_USERS_KEY, JSON.stringify(users));
  } catch (e) {
    console.error('Error saving registered users', e);
  }
}

export async function registerUser(name, email, password) {
  if (!isClient) return { success: false, error: 'Browser environment required' };
  
  const trimmedEmail = email.trim().toLowerCase();
  if (!name || !trimmedEmail || !password) {
    return { success: false, error: 'All fields are required' };
  }

  // --- SUPABASE MODE ---
  if (supabase) {
    try {
      const avatarUrl = `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(trimmedEmail)}`;
      const { data, error } = await supabase.auth.signUp({
        email: trimmedEmail,
        password,
        options: {
          data: {
            name: name.trim(),
            avatarUrl
          }
        }
      });

      if (error) {
        return { success: false, error: error.message };
      }

      // Check if user is auto-confirmed (or requires email confirmation)
      if (data?.user) {
        const userSession = {
          id: data.user.id,
          name: name.trim(),
          email: trimmedEmail,
          avatarUrl,
          createdAt: data.user.created_at
        };

        localStorage.setItem(USER_SESSION_KEY, JSON.stringify(userSession));
        window.dispatchEvent(new Event('auth-change'));
        return { success: true, user: userSession };
      } else {
        return { success: true, message: 'Check your email to confirm registration!' };
      }
    } catch (err) {
      return { success: false, error: err.message || 'Database error occurred' };
    }
  }

  // --- LOCAL FALLBACK MODE ---
  const users = getRegisteredUsers();
  const exists = users.some(u => u.email === trimmedEmail);
  if (exists) {
    return { success: false, error: 'An account with this email already exists' };
  }

  const newUser = {
    id: crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).substring(2, 15),
    name: name.trim(),
    email: trimmedEmail,
    password, 
    avatarUrl: `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(trimmedEmail)}`,
    createdAt: new Date().toISOString()
  };

  users.push(newUser);
  saveRegisteredUsers(users);

  return loginUser(trimmedEmail, password);
}

export async function loginUser(email, password) {
  if (!isClient) return { success: false, error: 'Browser environment required' };

  const trimmedEmail = email.trim().toLowerCase();
  if (!trimmedEmail || !password) {
    return { success: false, error: 'Email and password are required' };
  }

  // --- SUPABASE MODE ---
  if (supabase) {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: trimmedEmail,
        password
      });

      if (error) {
        return { success: false, error: error.message };
      }

      if (data?.user) {
        const userSession = {
          id: data.user.id,
          name: data.user.user_metadata?.name || trimmedEmail.split('@')[0],
          email: trimmedEmail,
          avatarUrl: data.user.user_metadata?.avatarUrl || `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(trimmedEmail)}`,
          createdAt: data.user.created_at
        };

        localStorage.setItem(USER_SESSION_KEY, JSON.stringify(userSession));
        window.dispatchEvent(new Event('auth-change'));
        return { success: true, user: userSession };
      }
    } catch (err) {
      return { success: false, error: err.message || 'Database connection error' };
    }
  }

  // --- LOCAL FALLBACK MODE ---
  const users = getRegisteredUsers();
  const user = users.find(u => u.email === trimmedEmail);
  
  if (!user || user.password !== password) {
    return { success: false, error: 'Invalid email or password' };
  }

  const { password: _, ...sessionUser } = user;
  
  try {
    localStorage.setItem(USER_SESSION_KEY, JSON.stringify(sessionUser));
    window.dispatchEvent(new Event('auth-change'));
    return { success: true, user: sessionUser };
  } catch (e) {
    console.error('Error establishing session', e);
    return { success: false, error: 'Failed to log in' };
  }
}

export async function logoutUser() {
  if (!isClient) return;
  
  // --- SUPABASE SIGN OUT ---
  if (supabase) {
    try {
      await supabase.auth.signOut();
    } catch (e) {
      console.error('Supabase signout warning', e);
    }
  }

  try {
    localStorage.removeItem(USER_SESSION_KEY);
    window.dispatchEvent(new Event('auth-change'));
  } catch (e) {
    console.error('Error logging out', e);
  }
}

export function getCurrentUser() {
  if (!isClient) return null;
  try {
    const session = localStorage.getItem(USER_SESSION_KEY);
    return session ? JSON.parse(session) : null;
  } catch (e) {
    console.error('Error parsing session user', e);
    return null;
  }
}

export async function updateCurrentUser(updates) {
  if (!isClient) return { success: false, error: 'Browser environment required' };
  
  const currentUser = getCurrentUser();
  if (!currentUser) return { success: false, error: 'Not authenticated' };

  // --- SUPABASE UPDATE ---
  if (supabase) {
    try {
      const { data, error } = await supabase.auth.updateUser({
        data: updates
      });

      if (error) {
        return { success: false, error: error.message };
      }

      if (data?.user) {
        const updatedUser = {
          ...currentUser,
          name: data.user.user_metadata?.name || currentUser.name,
          avatarUrl: data.user.user_metadata?.avatarUrl || currentUser.avatarUrl,
        };
        localStorage.setItem(USER_SESSION_KEY, JSON.stringify(updatedUser));
        window.dispatchEvent(new Event('auth-change'));
        return { success: true, user: updatedUser };
      }
    } catch (err) {
      return { success: false, error: err.message };
    }
  }

  // --- LOCAL FALLBACK UPDATE ---
  const updatedUser = { ...currentUser, ...updates };
  
  try {
    localStorage.setItem(USER_SESSION_KEY, JSON.stringify(updatedUser));
    const users = getRegisteredUsers();
    const updatedUsers = users.map(u => {
      if (u.id === currentUser.id) {
        return { ...u, ...updates };
      }
      return u;
    });
    saveRegisteredUsers(updatedUsers);
    
    window.dispatchEvent(new Event('auth-change'));
    return { success: true, user: updatedUser };
  } catch (e) {
    console.error('Error updating user info', e);
    return { success: false, error: 'Failed to update user profile' };
  }
}
