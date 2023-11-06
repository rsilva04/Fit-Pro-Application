const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//GET route
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

//POST route 
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

// DELETE route to delete comments
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



// PUT route to edit comments
router.put('/:id', (req, res) => {
    const id = req.params.id; // Comment ID to be updated
    const newComment = req.body.comments; // New comment text

    const queryText = `UPDATE "comments" SET "comments" = $1 WHERE "id" = $2 AND "user_id" = $3;`;
    // Ensure that the update only occurs if the comment belongs to the user

    pool.query(queryText, [newComment, id, req.user.id])
        .then(() => {
            console.log(`Updated comment with ID ${id}`);
            res.sendStatus(200);
        })
        .catch((error) => {
            console.error(`Error updating comment: ${error}`);
            res.sendStatus(500);
        });
});

module.exports = router;


