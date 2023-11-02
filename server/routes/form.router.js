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
router.post('/comments', (req, res,) => {
    const comments = req.body.comments;
  
    const queryText = `INSERT INTO "comments"
      VALUES ($1, $2) RETURNING id`;
    pool
      .query(queryText, [comments])
      .then(() => res.sendStatus(201))
      .catch((err) => {
        console.log('Comments not able to send', err);
        res.sendStatus(500);
      });
});

module.exports = router;
