import express from 'express';
import {ENVIROMENT} from '../ENV';
import {
    Post, 
    GetList, 
    Get, 
    Put,
    Delete
} from '../controllers/reticulas.controller';

const router = express.Router();

router.post(
    ENVIROMENT.ROUTER_MAIN_MODULES.RETICULAS.ACTIONS.POST, 
    Post
);

router.get(
    ENVIROMENT.ROUTER_MAIN_MODULES.RETICULAS.ACTIONS.GET_LIST, 
    GetList
);

router.get(
    ENVIROMENT.ROUTER_MAIN_MODULES.RETICULAS.ACTIONS.GET, 
    Get
);

router.put(
    ENVIROMENT.ROUTER_MAIN_MODULES.RETICULAS.ACTIONS.PUT, 
    Put
);

router.delete(
    ENVIROMENT.ROUTER_MAIN_MODULES.RETICULAS.ACTIONS.DELETE,
    Delete
);

module.exports = router;