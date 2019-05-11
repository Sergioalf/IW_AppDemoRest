import express from 'express';
import {ENVIROMENT} from '../ENV';
import { Post, GetList, Get, Put, Delete } from '../controllers/actividades_rubricas_criterios_dominios.controller';

const router = express.Router();

router.post(
    ENVIROMENT.ROUTER_MAIN_MODULES.ACTIVIDADES_RUBRICAS_CRITERIOS_DOMINIOS.ACTIONS.POST, 
    Post
);

router.get(
    ENVIROMENT.ROUTER_MAIN_MODULES.ACTIVIDADES_RUBRICAS_CRITERIOS_DOMINIOS.ACTIONS.GET_LIST, 
    GetList
);

router.get(
    ENVIROMENT.ROUTER_MAIN_MODULES.ACTIVIDADES_RUBRICAS_CRITERIOS_DOMINIOS.ACTIONS.GET, 
    Get
);

router.put(
    ENVIROMENT.ROUTER_MAIN_MODULES.ACTIVIDADES_RUBRICAS_CRITERIOS_DOMINIOS.ACTIONS.PUT, 
    Put
);

router.delete(
    ENVIROMENT.ROUTER_MAIN_MODULES.ACTIVIDADES_RUBRICAS_CRITERIOS_DOMINIOS.ACTIONS.DELETE,
    Delete
);

module.exports = router;