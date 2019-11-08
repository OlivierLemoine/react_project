import express from 'express';
import api from "./api";

const app = express();

app.use('/api', api)

app.listen(8010, () => console.log('API ready on localhost:8010'));