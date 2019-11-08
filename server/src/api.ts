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
            res.status(400).end("This is not a valid word");
        else if (article !== 'der' && article !== 'die' && article !== 'das')
            res.status(400).end("This is not a valid article");
        else {
            //@ts-ignore
            if (db.get('words').find({ name: word })) {
                res.status(400).end("This name already exists");
            } else {
                //@ts-ignore
                db.get('words').push({ name: word, article: article }).write();
                res.end();
            }
        }
    })
    .delete('/words/:wordName', (req, res) => {
        let word = req.params.wordName;

        if (typeof word !== 'string') {
            res.status(400).end('This is not a valid word');
        }
        //@ts-ignore
        db.get('words').remove({ word: word });
        res.end();
    })
    .get('/words', (req, res) => {
        res.end(JSON.stringify(db.get('words')));
    });

export default router;