import express from 'express';
import { json } from "body-parser";

import low from "lowdb";
import FileSync from "lowdb/adapters/FileSync";


const db = low(new FileSync('db.json'));
db.defaults({ words: [] }).write();

const router = express.Router();

router
    .get('/words/:wordName', (req, res) => {
        res.status(404).end();
    })
    .post('/words/', json(), (req, res) => {
        let word = req.body.name;
        let article = req.body.article;

        if (typeof word !== 'string')
            res.status(400).end();
        else if (article !== 'der' || article !== 'die' || article !== 'das')
            res.status(400).end();
        else {
            //@ts-ignore
            db.get('words').push({ name: word, article: article }).write();
        }
    })
    .get('/words', (req, res) => {
        res.end(JSON.stringify(db.get('words')));
    });

export default router;