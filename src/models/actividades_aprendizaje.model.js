import mongoose from 'mongoose';
import {ENVIROMENT, FORMATS_FOR_DATE_AND_TIME} from '../ENV';

const Schema = mongoose.Schema;

module.exports = mongoose.model('eva_cat_actividades_aprendizaje', new Schema({
    IdActividadAprendizaje: {type: Number, required: true},
    IdIndicador: {type: String, required: true},
    IdRubrica: {type: String, required: true},
    DesActividadAprendizaje: {type: String, default: ''},
    TipoActividad: {type: String, default: ''},
    Detalle: {type: String, default: ''},
    Activo: {type: String, default: 'S'},
    Borrado: {type: String, default: 'N'},
    FechaReg: {type: String, default: FORMATS_FOR_DATE_AND_TIME().DATE_UTC},
    UsuarioReg: {type: String, default: 'REST'},
    FechaUltMod: {type: String, default: ''},
    UsuarioMod: {type: String, default: ''},
    eva_cat_actividades_rubricas_criterios: {type: String, required: true}
}));