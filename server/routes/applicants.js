import express from "express";
import db from "../db.js";
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, phone, note } = req.body;
    if(!name || !email) return res.status(400).json({ error: "name and email are required" });
    const result = await db.query(
      `INSERT INTO applicants (name, email, phone, note) VALUES ($1,$2,$3,$4) RETURNING *`,
      [name, email, phone || null, note || null]
    );
    res.json({ ok: true, applicant: result.rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "internal" });
  }
});

router.get("/", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM applicants ORDER BY created_at DESC");
    res.json(result.rows);
  } catch(err) {
    res.status(500).json({ error: "internal" });
  }
});

export default router;
