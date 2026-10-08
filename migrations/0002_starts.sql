create table if not exists starts (
  id serial primary key,
  program text not null,
  membership text not null,
  created_at timestamptz not null default now()
);
