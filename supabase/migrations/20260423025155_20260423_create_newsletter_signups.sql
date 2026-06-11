/*
  # Create newsletter_signups table

  1. New Tables
    - `newsletter_signups`
      - `id` (uuid, primary key)
      - `email` (text, unique, indexed)
      - `created_at` (timestamptz, default now)
      - `unsubscribed` (boolean, default false)

  2. Security
    - Enable RLS on `newsletter_signups` table
    - Add public policy for inserting signups (no auth required)
    - Add policy to read own signup by email
*/

CREATE TABLE IF NOT EXISTS newsletter_signups (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now(),
  unsubscribed boolean DEFAULT false
);

CREATE INDEX IF NOT EXISTS idx_newsletter_email ON newsletter_signups(email);

ALTER TABLE newsletter_signups ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can sign up for newsletter"
  ON newsletter_signups FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Users can view their own signup"
  ON newsletter_signups FOR SELECT
  USING (true);
