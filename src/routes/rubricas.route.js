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
    DeleteSub,
    PostSubSub,
    GetSubSub,
    PutSubSub,
    DeleteSubSub
} from '../controllers/rubricas.controller';

const router = express.Router();

router.post(
    ENVIROMENT.ROUTER_MAIN_MODULES.RUBRICAS.ACTIONS.POST, 
    Post
);

router.get(
    ENVIROMENT.ROUTER_MAIN_MODULES.RUBRICAS.ACTIONS.GET_LIST, 
    GetList
);

router.get(
    ENVIROMENT.ROUTER_MAIN_MODULES.RUBRICAS.ACTIONS.GET, 
    Get
);

router.put(
    ENVIROMENT.ROUTER_MAIN_MODULES.RUBRICAS.ACTIONS.PUT, 
    Put
);

router.delete(
    ENVIROMENT.ROUTER_MAIN_MODULES.RUBRICAS.ACTIONS.DELETE,
    Delete
);

router.post(
    ENVIROMENT.ROUTER_MAIN_MODULES.RUBRICAS.ACTIONS.POST_SUB,
    PostSub
);

router.get(
    ENVIROMENT.ROUTER_MAIN_MODULES.RUBRICAS.ACTIONS.GET_SUB,
    GetSub
);

router.put(
    ENVIROMENT.ROUTER_MAIN_MODULES.RUBRICAS.ACTIONS.PUT_SUB,
    PutSub
);

router.delete(
    ENVIROMENT.ROUTER_MAIN_MODULES.RUBRICAS.ACTIONS.DELETE_SUB,
    DeleteSub
);

router.post(
    ENVIROMENT.ROUTER_MAIN_MODULES.RUBRICAS.ACTIONS.POST_SUB_SUB,
    PostSubSub
);

router.get(
    ENVIROMENT.ROUTER_MAIN_MODULES.RUBRICAS.ACTIONS.GET_SUB_SUB,
    GetSubSub
);

router.put(
    ENVIROMENT.ROUTER_MAIN_MODULES.RUBRICAS.ACTIONS.PUT_SUB_SUB,
    PutSubSub
);

router.delete(
    ENVIROMENT.ROUTER_MAIN_MODULES.RUBRICAS.ACTIONS.DELETE_SUB_SUB,
    DeleteSubSub
);

module.exports = router;