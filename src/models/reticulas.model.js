import mongoose from 'mongoose';
import { ENVIROMENT, FORMATS_FOR_DATE_AND_TIME } from '../ENV';

const Schema = mongoose.Schema;

module.exports = mongoose.model('eva_cat_reticulas', new Schema({
    IdReticula: {type: Number, required: true},
    ClaveReticula: {type: String, default: ''},
    DesReticula: {type: String, default: ''},
    Actual: {type: String, default: ''},
    FechaIni: {type: Date, default: ''},
    FechaFin: {type: Date, default: ''},
    TipoPlanEstudios: {type: String, required: true},
    Activo: {type: String, default: 'S'},
    Borrado: {type: String, default: 'N'},
    FechaReg: {type: String, default: FORMATS_FOR_DATE_AND_TIME().DATE_UTC},
    UsuarioReg: {type: String, default: 'REST'},
    FechaUltMod: {type: String, default: ''},
    UsuarioMod: {type: String, default: ''}
}));