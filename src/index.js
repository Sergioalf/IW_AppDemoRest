import express from 'express';
import bodyparser from 'body-parser';
import mongoose from 'mongoose';
import { ENVIROMENT, SEND_INFO} from './ENV';
import status from 'http-status';
import { toASCII } from 'punycode';
import routesEvents from './routes/events.route'
import routerActividadesAprendizaje from './routes/actividades_aprendizaje.route'

var allowCrossDomain = (req,res,next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Comtrol-Allow-Methods', 'POST,GET,PUT,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
};

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));
app.use(allowCrossDomain);

app.listen(ENVIROMENT.SERVER_PORT, async () => {
    try {
        app.use(allowCrossDomain);
        console.log('¡Successful connection ExpressJS!\n');
        mongoose.connect(ENVIROMENT.BD_URL_CONNECTION.LOCAL, {useNewUrlParser: true})
        .then(() => {
            console.log('¡Successful connection MongoDb!\n');
            app.get(ENVIROMENT.ROUTER_MAIN_MODULES.INDEX, (req,res) => {
                SEND_INFO(res, "It's working!", "Server working successfully", status.OK);
                res.send('¡Hola Mundo!<br/>¡Successful connection MongoDB<br/>¡Server Web API - DEMO REST - ONLINE!');
                res.end();
            });
            app.use(ENVIROMENT.ROUTER_MAIN_MODULES.EVENTS.NAME_ROUTE, routesEvents);
            app.use(ENVIROMENT.ROUTER_MAIN_MODULES.ACTIVIDADES_APRENDIZAJE.NAME_ROUTE, routerActividadesAprendizaje);
        })
        .catch(err => {
            app.get(ENVIROMENT.ROUTER_MAIN_MODULES.INDEX, (req,res) => {
                SEND_INFO(res, "It's not working!", "Server could not work", status.INTERNAL_SERVER_ERROR);
                res.end();
            });
        });
    } catch (err) {
        app.get(ENVIROMENT.ROUTER_MAIN_MODULES.INDEX, (req,res) => {
            SEND_INFO(res, "It's not working!", "Server could not work", status.INTERNAL_SERVER_ERROR);
            res.end();
        });
    }
});