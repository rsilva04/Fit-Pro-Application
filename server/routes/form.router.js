const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    
  // GET route code here
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
    const comments = req.body.comments;
    const user_id = req.body.user_id
  console.log('hello', comments, user_id);
    const queryText = `INSERT INTO "comments" ("comments", "user_id") VALUES ($1, $2) RETURNING id;`;
    pool
      .query(queryText, [comments, user_id])
      .then(() => res.sendStatus(201))
      .catch((err) => {
        console.log(`Error adding comment ${queryText}`, err);
        res.sendStatus(500);
      });
});

module.exports = router;
