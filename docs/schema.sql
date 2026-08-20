-- DevLab Database Provisioning Schema
-- Run this in the Supabase SQL Editor to configure your database tables.

-- 1. Create User Streaks Table
create table if not exists public.user_streaks (
  user_id uuid references auth.users on delete cascade not null primary key,
  count integer default 1 not null,
  last_active_date text not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS (Row Level Security)
alter table public.user_streaks enable row level security;

-- Set up policies
create policy "Users can update and view their own streak"
  on public.user_streaks
  for all
  using (auth.uid() = user_id);


-- 2. Create Concept Progress Table
create table if not exists public.concept_progress (
  user_id uuid references auth.users on delete cascade not null,
  concept_slug text not null,
  status text not null default 'in_progress',
  steps_completed integer not null default 0,
  total_steps integer not null default 0,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
  primary key (user_id, concept_slug)
);

alter table public.concept_progress enable row level security;

create policy "Users can manage their own concept progress"
  on public.concept_progress
  for all
  using (auth.uid() = user_id);


-- 3. Create Lab Attempts Table
create table if not exists public.lab_attempts (
  user_id uuid references auth.users on delete cascade not null,
  lab_id text not null,
  code text not null,
  tests_passed integer not null default 0,
  tests_total integer not null default 0,
  completed boolean not null default false,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
  primary key (user_id, lab_id)
);

alter table public.lab_attempts enable row level security;

create policy "Users can manage their own lab attempts"
  on public.lab_attempts
  for all
  using (auth.uid() = user_id);


-- 4. Create Challenge Attempts Table
create table if not exists public.challenge_attempts (
  user_id uuid references auth.users on delete cascade not null,
  challenge_id text not null,
  code text not null,
  score integer not null default 0,
  completed boolean not null default false,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
  primary key (user_id, challenge_id)
);

alter table public.challenge_attempts enable row level security;

create policy "Users can manage their own challenge attempts"
  on public.challenge_attempts
  for all
  using (auth.uid() = user_id);
