import express from 'express';
import {ENVIROMENT} from '../ENV';
import {
    PostActividadAprendizaje, 
    GetActividadesAprendizajeList, 
    GetActividadAprendizaje, 
    PutActividadAprendizaje,
    DeleteActividadAprendizaje
} from '../controllers/actividades_aprendizaje.controller';

const router = express.Router();

router.post(
    ENVIROMENT.ROUTER_MAIN_MODULES.ACTIVIDADES_APRENDIZAJE.ACTIONS.POST_ACTIVIDAD, 
    PostActividadAprendizaje
);

router.get(
    ENVIROMENT.ROUTER_MAIN_MODULES.ACTIVIDADES_APRENDIZAJE.ACTIONS.GET_ACTIVIDADES_LIST, 
    GetActividadesAprendizajeList
);

router.get(
    ENVIROMENT.ROUTER_MAIN_MODULES.ACTIVIDADES_APRENDIZAJE.ACTIONS.GET_ACTIVIDAD, 
    GetActividadAprendizaje
);

router.put(
    ENVIROMENT.ROUTER_MAIN_MODULES.ACTIVIDADES_APRENDIZAJE.ACTIONS.PUT_ACTIVIDAD, 
    PutActividadAprendizaje
);

router.delete(ENVIROMENT.ROUTER_MAIN_MODULES.ACTIVIDADES_APRENDIZAJE.ACTIONS.DELETE_ACTIVIDAD,
    DeleteActividadAprendizaje
);

module.exports = router;