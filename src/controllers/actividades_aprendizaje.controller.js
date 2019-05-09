import {FORMATS_FOR_DATE_AND_TIME, GET_TYPE_ASSISTANCE, SEND_INFO} from '../ENV';
import actividades_aprendizaje from '../models/actividades_aprendizaje.model';
import status from 'http-status';

exports.PostActivitadAprendizaje = async (req,res) => {
    const body = req.body;
    await actividades_aprendizaje.create(body)
    .then(data => {
        SEND_INFO(res, data, "Actividad de aprendizaje insertada exitósamente", status.CREATED);
    })
    .catch(err => {
        SEND_INFO(res, err, "Actividad de aprendizaje no pudo ser insertada", status.INTERNAL_SERVER_ERROR);
    });
};

exports.GetActividadesAprendizajeList = async (req,res) => {
    await actividades_aprendizaje.find()
    .then(data => {
        data.length == 0 ? 
        SEND_INFO(res, "Nada", "No se encontraron actividades de aprendizaje", status.NOT_FOUND):
        SEND_INFO(res, data, "Actividades de aprendizaje recuperadas exitósamente", status.OK);
    })
    .catch(err => {
        SEND_INFO(res, err, "Actividades de aprendizaje no pudieron ser recuperadas", status.INTERNAL_SERVER_ERROR);
    });
};

exports.GetActividadAprendizaje = async (req,res) => {
    const id = req.params.id;
    await actividades_aprendizaje.findOne({IdActividadAprendizaje: id})
    .then(data => {
        data == null ?
        SEND_INFO(res, "Nada", "No se encontró la actividad de aprendizaje", status.NOT_FOUND):
        SEND_INFO(res, data, "Actividad de aprendizaje recuperada exitósamente", status.OK);
    })
    .catch(err => {
        SEND_INFO(res, err, "La actividad de apredizaje no pudo ser recuperada", status.INTERNAL_SERVER_ERROR);
    });
};

exports.PutActividadAprendizaje = async (req,res) => {
    const id = req.params.id;
    const body = req.body;
    body.FechaUltMod = FORMATS_FOR_DATE_AND_TIME().DATE_UTC;
    await actividades_aprendizaje.findOneAndUpdate({IdActividadAprendizaje: id}, body, {new: true})
    .then(data => {
        data == null ?
        SEND_INFO(res, "Nada", "No se encontró la actividad de aprendizaje", status.NOT_FOUND):
        SEND_INFO(res, data, "Actividad de aprendizaje actualizada exitósamente", status.OK);
    })
    .catch(err => {
        SEND_INFO(res, err, "La actividad de apredizaje no pudo ser actualizada", status.INTERNAL_SERVER_ERROR);
    });
};

exports.DeleteActividadAprendizaje = async (req,res) => {
    const id = req.params.id;
    await actividades_aprendizaje.findOneAndDelete({IdActividadAprendizaje: id})
    .then(data => {
        data == null ?
        SEND_INFO(res, "Nada", "No se encontró la actividad de aprendizaje", status.NOT_FOUND):
        SEND_INFO(res, data, "Actividad de aprendizaje actualizada exitósamente", status.OK);
    })
    .catch(err => {
        SEND_INFO(res, err, "La actividad de apredizaje no pudo ser eliminada", status.INTERNAL_SERVER_ERROR);
    });
};