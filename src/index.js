import express from 'express';
import bodyparser from 'body-parser';
import mongoose from 'mongoose';
import { ENVIROMENT, SEND_INFO} from './ENV';
import status from 'http-status';
import { toASCII } from 'punycode';

// Routers
import routesEvents from './routes/events.route';
import routerActividadesAprendizaje from './routes/actividades_aprendizaje.route';
import routerActividadesEnsenanza from './routes/actividades_ensenanza.route';
import routerActividadesRubricasCriterios from './routes/actividades_rubricas_criterios.route';
import routerActividadesRubricasCriteriosDominios from './routes/actividades_rubricas_criterios_dominios.route';
import routerFuentesbibliograficas from './routes/fuentes_bibliograficas.route';
import routerApoyosDidacticos from './routes/apoyos_didacticos.route';
import routerIndcadores from './routes/indicadores.route';
import routerNivelesGradosCompetencias from './routes/niveles_grados_competencias.route';
import routerAlumnos from './routes/alumnos.route';
import routerEspecialidades from './routes/especialidades.route'
import routerReticulas from './routes/reticulas.route'


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
            app.use(ENVIROMENT.ROUTER_MAIN_MODULES.ACTIVIDADES_ENSENANZA.NAME_ROUTE, routerActividadesEnsenanza);
            app.use(ENVIROMENT.ROUTER_MAIN_MODULES.ACTIVIDADES_RUBRICAS_CRITERIOS.NAME_ROUTE, routerActividadesRubricasCriterios);
            app.use(ENVIROMENT.ROUTER_MAIN_MODULES.ACTIVIDADES_RUBRICAS_CRITERIOS_DOMINIOS.NAME_ROUTE, routerActividadesRubricasCriteriosDominios);
            app.use(ENVIROMENT.ROUTER_MAIN_MODULES.FUENTES_BIBLIOGRAFICAS.NAME_ROUTE,routerFuentesbibliograficas);
            app.use(ENVIROMENT.ROUTER_MAIN_MODULES.APOYOS_DIDACTICOS.NAME_ROUTE, routerApoyosDidacticos);
            app.use(ENVIROMENT.ROUTER_MAIN_MODULES.INDICADORES.NAME_ROUTE, routerIndcadores);
            app.use(ENVIROMENT.ROUTER_MAIN_MODULES.NIVELES_GRADOS_COMPETENCIAS.NAME_ROUTE, routerNivelesGradosCompetencias);
            app.use(ENVIROMENT.ROUTER_MAIN_MODULES.ALUMNOS.NAME_ROUTE, routerAlumnos);
            app.use(ENVIROMENT.ROUTER_MAIN_MODULES.ESPECIALIDADES.NAME_ROUTE, routerEspecialidades);
            app.use(ENVIROMENT.ROUTER_MAIN_MODULES.RETICULAS.NAME_ROUTE, routerReticulas);
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