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
} from '../controllers/tipo_estatus.controller';

const router = express.Router();

router.post(
    ENVIROMENT.ROUTER_MAIN_MODULES.TIPO_ESTATUS.ACTIONS.POST, 
    Post
);

router.get(
    ENVIROMENT.ROUTER_MAIN_MODULES.TIPO_ESTATUS.ACTIONS.GET_LIST, 
    GetList
);

router.get(
    ENVIROMENT.ROUTER_MAIN_MODULES.TIPO_ESTATUS.ACTIONS.GET, 
    Get
);

router.put(
    ENVIROMENT.ROUTER_MAIN_MODULES.TIPO_ESTATUS.ACTIONS.PUT, 
    Put
);

router.delete(
    ENVIROMENT.ROUTER_MAIN_MODULES.TIPO_ESTATUS.ACTIONS.DELETE,
    Delete
);

router.post(
    ENVIROMENT.ROUTER_MAIN_MODULES.TIPO_ESTATUS.ACTIONS.POST_SUB,
    PostSub
);

router.get(
    ENVIROMENT.ROUTER_MAIN_MODULES.TIPO_ESTATUS.ACTIONS.GET_SUB,
    GetSub
);

router.put(
    ENVIROMENT.ROUTER_MAIN_MODULES.TIPO_ESTATUS.ACTIONS.PUT_SUB,
    PutSub
);

router.delete(
    ENVIROMENT.ROUTER_MAIN_MODULES.TIPO_ESTATUS.ACTIONS.DELETE_SUB,
    DeleteSub
);

module.exports = router;