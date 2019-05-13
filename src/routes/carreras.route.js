import express from 'express';
import {ENVIROMENT} from '../ENV';
import {
    Post, 
    GetList, 
    Get, 
    Put,
    Delete
} from '../controllers/carrera.controller';

const router = express.Router();

router.post(
    ENVIROMENT.ROUTER_MAIN_MODULES.CARRERAS.ACTIONS.POST, 
    Post
);

router.get(
    ENVIROMENT.ROUTER_MAIN_MODULES.CARRERAS.ACTIONS.GET_LIST, 
    GetList
);

router.get(
    ENVIROMENT.ROUTER_MAIN_MODULES.CARRERAS.ACTIONS.GET, 
    Get
);

router.put(
    ENVIROMENT.ROUTER_MAIN_MODULES.CARRERAS.ACTIONS.PUT, 
    Put
);

router.delete(
    ENVIROMENT.ROUTER_MAIN_MODULES.CARRERAS.ACTIONS.DELETE,
    Delete
);

module.exports = router;