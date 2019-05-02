import express from 'express';
import bodyparser from 'body-parser';
import mongoose from 'mongoose';
import {ENVIROMENT} from './ENV';

const app = express();

app.listen(ENVIROMENT.SERVER_PORT, async () => {
    try {
        console.log('¡Successful connection ExpressJS!');
        mongoose.connect(ENVIROMENT.BD_URL_CONNECTION.DEVELOPING, {useNewUrlParser: true})
        .then(() => {
            console.log('¡Successful connection MongoDb!');
            app.get(ENVIROMENT.ROUTER_MAIN_MODULES.INDEX, (req,res) => {
                res.status(200);
                res.send('¡Hola Mundo! ¡Successful connection MongoDB');
                res.end();
            });
        })
        .catch(err => {
            app.get(ENVIROMENT.ROUTER_MAIN_MODULES.INDEX, (req,res) => {
                res.status(500);
                res.send('error', {error: err});
                res.end();
            });
        });
    } catch (err) {
        app.get(ENVIROMENT.ROUTER_MAIN_MODULES.INDEX, (req,res) => {
            res.status(500);
            res.send('error', {error: err});
            res.end();
        });
    }
});