CREATE TABLE IF NOT EXISTS sample (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL
);

INSERT INTO sample (name) VALUES ('Hello from PostgreSQL Lets get started');
