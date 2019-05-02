import express from 'express';
import {ENVIROMENT} from '../ENV';
import {PostZone, GetZonesList, GetZone, PutZone, DeleteZone} from '../controllers/events.controller';

const router = express.Router();

router.post(ENVIROMENT.ROUTER_MAIN_MODULES.EVENTS.ACTIONS.POST_ZONE, PostZone);

router.get(ENVIROMENT.ROUTER_MAIN_MODULES.EVENTS.ACTIONS.GET_ZONES_LIST, GetZonesList);

router.get(ENVIROMENT.ROUTER_MAIN_MODULES.EVENTS.ACTIONS.GET_ZONE, GetZone);

router.put(ENVIROMENT.ROUTER_MAIN_MODULES.EVENTS.ACTIONS.PUT_ZONE, PutZone);

router.delete(ENVIROMENT.ROUTER_MAIN_MODULES.EVENTS.ACTIONS.DELETE_ZONE, DeleteZone);

module.exports = router;