import express from 'express';
import api from "./api";
import fs from 'fs';

const app = express();

app.use(express.static("../../front/build"))
    .use(express.static("../../front/statics"))
    .use('/api', api)
    .get('/', (req, res) => {
        fs.readFile("../../front/statics/index.html", (err, data) => {
            if (err) {
                console.error(err);
                res.status(500).end();
            } else {
                res.end(data);
            }
        });
    });

app.listen(8000, () => console.log('Started on localhost:8000'));