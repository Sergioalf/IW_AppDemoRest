import express from 'express';
import {ENVIROMENT} from '../ENV';
import {
    Post, 
    GetList, 
    Get, 
    Put,
    Delete,
    PostSub,
    GetSub,
    PutSub,
    DeleteSub
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

router.post(
    ENVIROMENT.ROUTER_MAIN_MODULES.CARRERAS.ACTIONS.POST_SUB,
    PostSub
);

router.get(
    ENVIROMENT.ROUTER_MAIN_MODULES.CARRERAS.ACTIONS.GET_SUB,
    GetSub
);

router.put(
    ENVIROMENT.ROUTER_MAIN_MODULES.CARRERAS.ACTIONS.PUT_SUB,
    PutSub
);

router.delete(
    ENVIROMENT.ROUTER_MAIN_MODULES.CARRERAS.ACTIONS.DELETE_SUB,
    DeleteSub
);

module.exports = router;