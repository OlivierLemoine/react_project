import express from 'express';
import api from "./api";

const app = express();

// app.use((req, res, next) => {
//     console.log(req.url);
//     next();
// })
app.use('/api', api)

app.listen(8000, () => console.log('API ready on localhost:8000'));