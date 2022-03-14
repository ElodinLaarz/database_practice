import express, {Request, Response} from 'express';
import mysql, { createPool } from 'mysql';

const app = express();

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log("We are listening!")
})

app.get('/:name', async (req: Request, res: Response) => {
    const query = "SELECT * FROM scores WHERE name = ?";
    pool.query(query, [req.params.name], (error, results) =>{
        if (!results[0]){
            res.json({status : "Not found!"});
        }else{
            res.json(results[0]);
        }
    });
});

const pool = mysql.createPool({
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    socketPath: '/cloudsql/${process.env.INSTANCE_CONNETION_NAME}',
});