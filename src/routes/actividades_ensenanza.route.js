import express from 'express';
import {ENVIROMENT} from '../ENV';
import {
    PostActividadEnsenanza, 
    GetActividadesEnsenanzaList, 
    GetActividadEnsenanza, 
    PutActividadEnsenanza,
    DeleteActividadEnsenanza
} from '../controllers/actividades_ensenanza.controller';

const router = express.Router();

router.post(
    ENVIROMENT.ROUTER_MAIN_MODULES.ACTIVIDADES_ENSENANZA.ACTIONS.POST_ACTIVIDAD, 
    PostActividadEnsenanza
);

router.get(
    ENVIROMENT.ROUTER_MAIN_MODULES.ACTIVIDADES_ENSENANZA.ACTIONS.GET_ACTIVIDADES_LIST, 
    GetActividadesEnsenanzaList
);

router.get(
    ENVIROMENT.ROUTER_MAIN_MODULES.ACTIVIDADES_ENSENANZA.ACTIONS.GET_ACTIVIDAD, 
    GetActividadEnsenanza
);

router.put(
    ENVIROMENT.ROUTER_MAIN_MODULES.ACTIVIDADES_ENSENANZA.ACTIONS.PUT_ACTIVIDAD, 
    PutActividadEnsenanza
);

router.delete(ENVIROMENT.ROUTER_MAIN_MODULES.ACTIVIDADES_ENSENANZA.ACTIONS.DELETE_ACTIVIDAD,
    DeleteActividadEnsenanza
);

module.exports = router;