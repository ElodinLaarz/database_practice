import express, {Request, Response} from 'express';
import mysql from 'mysql';

const app = express();

const port = process.env.PORT || 3000;

app.get('/api/high_scores', (req: Request, res: Response) => {
    res.send('It works!');
});

app.get('/api/high_scores/:id', (req: Request, res: Response) => {
    const id = req.params.id;
    res.send('It works for id ' + id);
});