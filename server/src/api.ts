import express, { NextFunction } from 'express';
import { json } from "body-parser";

import low from "lowdb";
import FileSync from "lowdb/adapters/FileSync";

import * as Responses from "./responses";


const db = low(new FileSync('build/db.json'));
db.defaults({ words: [] }).write();

const router = express.Router();

function verifyWordName(req: any, res: any, next: NextFunction) {
    let word = req.params.wordName;
    if (typeof word !== 'string')
        res.status(400).end(Responses.InvalidType("name"));
    else
        next();
}

router
    .get('/words/:wordName', verifyWordName, (req, res) => {
        //@ts-ignore
        res.end(Responses.Ok(db.get('words').find({ name: req.params.wordName }).value()));
    })
    .post('/words/', json(), (req, res) => {
        let word = req.body.name;
        let article = req.body.article;

        if (typeof word !== 'string')
            res.status(400).end(Responses.InvalidType("name"));
        else if (typeof article !== 'string')
            res.status(400).end(Responses.InvalidType("article"));
        else if (article !== 'der' && article !== 'die' && article !== 'das')
            res.status(400).end(Responses.OutOfBound("article"));
        else {
            //@ts-ignore
            if (db.get('words').find({ name: word }).value()) {
                res.status(400).end(Responses.AlreadyExist(word));
            } else {
                //@ts-ignore
                db.get('words').push({ name: word, article: article }).write();
                res.end(Responses.Ok());
            }
        }
    })
    .delete('/words/:wordName', verifyWordName, (req, res) => {
        let word = req.params.wordName;
        //@ts-ignore
        db.get('words').remove({ name: word }).write();
        res.end(Responses.Ok());
    })
    .get('/words', (req, res) => {
        res.end(JSON.stringify(db.get('words')));
    }).delete('/flush-all', (req, res) => {
        //@ts-ignore
        db.get('words').remove().write();
        res.end(Responses.Ok());
    });

export default router;