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
    const queryText = `INSERT INTO "comments" ("comments", "user_id", "workout_type") VALUES ($1, $2, $3) RETURNING id;`;
    pool
      .query(queryText, [comments, user_id, req.body.workout_type])
      .then(() => res.sendStatus(201))
      .catch((err) => {
        console.log(`Error adding comment ${queryText}`, err);
        res.sendStatus(500);
      });
});


router.delete('/:id', (req, res) => {
    let { id } = req.params;
    const queryText = 'DELETE FROM "comments" WHERE "id" = $1;';
    pool.query(queryText, [id])
    .then((response) => {
        console.log('Successfully Deleted Comment', response);
        res.sendStatus(201);
    })
    .catch((error) => {
        console.log('Could not delete', error);
        res.sendStatus(500);
    })
});

router.put('/complete/:id', (req, res) => {
    let { id } = req.params;
    let { complete } = req.body; // Assuming you want to update the 'complete' field

    // The SQL query should update the 'complete' field of a comment with a specific 'id'
    const sqlText = `UPDATE "comments" SET "complete" = $1 WHERE "id" = $2;`;

    pool.query(sqlText, [complete, id])
        .then((result) => {
            console.log(`Updated comments in the database`, result);
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making query ${sqlText}`, error);
            res.sendStatus(500);
        });
});

module.exports = router;


module.exports = router;
