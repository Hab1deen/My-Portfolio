create table if not exists profile (
  id bigint generated always as identity primary key,
  full_name text not null,
  title text,
  bio text,
  avatar_url text,
  updated_at timestamptz default now()
);

create table if not exists projects (
  id bigint generated always as identity primary key,
  title text not null,
  description text,
  role text,
  tech_stack text[] default '{}',
  image_url text,
  live_url text,
  github_url text,
  sort_order int default 0,
  is_published boolean default true,
  created_at timestamptz default now()
);

create table if not exists skills (
  id bigint generated always as identity primary key,
  category text not null check (category in ('technical', 'tools', 'soft')),
  name text not null,
  level int,
  sort_order int default 0
);

create table if not exists contact_messages (
  id bigint generated always as identity primary key,
  full_name text not null,
  email text not null,
  subject text not null,
  message text not null,
  created_at timestamptz default now()
);

alter table projects enable row level security;
alter table skills enable row level security;
alter table contact_messages enable row level security;

create policy "Public read projects" on projects for select using (true);
create policy "Public read skills" on skills for select using (true);
create policy "Public insert contact" on contact_messages for insert with check (true);
