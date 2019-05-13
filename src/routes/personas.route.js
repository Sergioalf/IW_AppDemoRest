import express from 'express';
import {ENVIROMENT} from '../ENV';
import {
    Post, 
    GetList, 
    Get, 
    Put,
    Delete
} from '../controllers/personas.controller';

const router = express.Router();

router.post(
    ENVIROMENT.ROUTER_MAIN_MODULES.PERSONAS.ACTIONS.POST, 
    Post
);

router.get(
    ENVIROMENT.ROUTER_MAIN_MODULES.PERSONAS.ACTIONS.GET_LIST, 
    GetList
);

router.get(
    ENVIROMENT.ROUTER_MAIN_MODULES.PERSONAS.ACTIONS.GET, 
    Get
);

router.put(
    ENVIROMENT.ROUTER_MAIN_MODULES.PERSONAS.ACTIONS.PUT, 
    Put
);

router.delete(
    ENVIROMENT.ROUTER_MAIN_MODULES.PERSONAS.ACTIONS.DELETE,
    Delete
);

module.exports = router;