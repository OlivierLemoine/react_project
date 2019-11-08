import express from 'express';

let router = express.Router();

router.get('/word/:wordName', (req, res) => {
    res.status(404).end();
}).get('/words', (req, res) => {
    res.end(JSON.stringify([]));
});

export default router;