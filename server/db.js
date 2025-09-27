import pkg from 'pg';
import dotenv from 'dotenv';
dotenv.config();
const { Pool } = pkg;

const pool = new Pool({
  host: process.env.PGHOST || 'localhost',
  user: process.env.PGUSER || 'fpuser',
  password: process.env.PGPASSWORD || 'fppassword',
  database: process.env.PGDATABASE || 'fpdb',
  port: process.env.PGPORT || 5432
});

// initialize table
const init = async () => {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS applicants (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT,
      note TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `);
};

init().catch(err => console.error("DB init error:", err));

export default pool;
