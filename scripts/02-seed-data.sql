-- Seed users (100 users)
INSERT INTO users (email, name, created_at, last_active, status)
SELECT 
  'user' || generate_series || '@fooddelivery.com',
  'User ' || generate_series,
  CURRENT_TIMESTAMP - (random() * INTERVAL '90 days'),
  CURRENT_TIMESTAMP - (random() * INTERVAL '7 days'),
  CASE WHEN random() < 0.85 THEN 'active' ELSE 'churned' END
FROM generate_series(1, 100);

-- Seed orders (500 orders)
INSERT INTO orders (user_id, order_total, status, created_at, completed_at)
SELECT 
  (random() * 99 + 1)::INTEGER,
  (random() * 80 + 15)::DECIMAL(10, 2),
  CASE 
    WHEN random() < 0.85 THEN 'completed'
    WHEN random() < 0.95 THEN 'cancelled'
    ELSE 'pending'
  END,
  CURRENT_TIMESTAMP - (random() * INTERVAL '60 days'),
  CASE WHEN random() < 0.85 THEN CURRENT_TIMESTAMP - (random() * INTERVAL '60 days') ELSE NULL END
FROM generate_series(1, 500);

-- Seed sessions (1000 sessions)
INSERT INTO sessions (user_id, session_duration, pages_viewed, created_at)
SELECT 
  (random() * 99 + 1)::INTEGER,
  (random() * 1800 + 60)::INTEGER,
  (random() * 10 + 1)::INTEGER,
  CURRENT_TIMESTAMP - (random() * INTERVAL '30 days')
FROM generate_series(1, 1000);

-- Seed NPS responses (80 responses)
INSERT INTO nps_responses (user_id, score, feedback, created_at)
SELECT 
  (random() * 99 + 1)::INTEGER,
  (random() * 10)::INTEGER,
  CASE 
    WHEN random() < 0.3 THEN 'Great service!'
    WHEN random() < 0.6 THEN 'Good but could be better'
    ELSE 'Needs improvement'
  END,
  CURRENT_TIMESTAMP - (random() * INTERVAL '30 days')
FROM generate_series(1, 80);

-- Seed conversion events
INSERT INTO conversion_events (user_id, event_type, created_at)
SELECT 
  id,
  'signup',
  created_at
FROM users;

INSERT INTO conversion_events (user_id, event_type, created_at)
SELECT DISTINCT
  user_id,
  'first_order',
  MIN(created_at)
FROM orders
GROUP BY user_id;
