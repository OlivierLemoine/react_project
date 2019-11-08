import express, { NextFunction } from 'express';
import { json } from "body-parser";

import low from "lowdb";
import FileSync from "lowdb/adapters/FileSync";

import * as Errors from "./errors";


const db = low(new FileSync('db.json'));
db.defaults({ words: [] }).write();

const router = express.Router();

function verifyWordName(req: any, res: any, next: NextFunction) {
    let word = req.params.wordName;
    if (typeof word !== 'string')
        res.status(400).end(Errors.InvalidType("name"));
    else
        next();
}

router
    .get('/words/:wordName', verifyWordName, (req, res) => {
        res.status(404).end();
    })
    .post('/words/', json(), (req, res) => {
        let word = req.body.name;
        let article = req.body.article;

        if (typeof word !== 'string')
            res.status(400).end(Errors.InvalidType("name"));
        else if (typeof article !== 'string')
            res.status(400).end(Errors.InvalidType("article"));
        else if (article !== 'der' && article !== 'die' && article !== 'das')
            res.status(400).end(Errors.OutOfBound("article"));
        else {
            //@ts-ignore
            if (db.get('words').find({ name: word })) {
                res.status(400).end(Errors.AlreadyExist(word));
            } else {
                //@ts-ignore
                db.get('words').push({ name: word, article: article }).write();
                res.end();
            }
        }
    })
    .delete('/words/:wordName', verifyWordName, (req, res) => {
        //@ts-ignore
        db.get('words').remove({ word: word }).write();
        res.end();
    })
    .get('/words', (req, res) => {
        res.end(JSON.stringify(db.get('words')));
    });

export default router;