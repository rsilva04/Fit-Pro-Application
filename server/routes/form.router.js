const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    console.log("GET resquest");
    const queryText = `SELECT * FROM comments ORDER BY id, id ASC;`;
    pool.query(queryText)
    .then((result) => {
        console.log(`GET working`, result);
        res.send(result.rows);
    })
    .catch((error) => {
        console.log(`Error making database query ${queryText}`, error);
        res.sendStatus(500);
    })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
    const comments = req.body.comments;
    const user_id = req.body.user
  console.log('hello', comments, user_id, req.body);
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
