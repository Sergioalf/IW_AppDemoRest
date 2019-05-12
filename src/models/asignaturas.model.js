import mongoose from 'mongoose';
import { ENVIROMENT, FORMATS_FOR_DATE_AND_TIME } from '../ENV';

const Schema = mongoose.Schema;

module.exports = mongoose.model('eva_cat_asignaturas', new Schema({
    IdAsignatura: {type: Number, required: true},
    ClaveAsignatura: {type: String, default: ''},
    DesAsignatura: {type: String, default: ''},
    NombreCorto: {type: String, default: ''},
    Matricula: {type: String, default: ''},
    Actual: {type: String, default: ''},
    FechaPlanEstudios: {type: Date, default: ''},
    Creditos: {type: Number, default: 0},
    TipoAsignatura: {type: String, required: true},
    TipoNivelEscolar: {type: String, required: true},
    Activo: {type: String, default: 'S'},
    Borrado: {type: String, default: 'N'},
    FechaReg: {type: String, default: FORMATS_FOR_DATE_AND_TIME().DATE_UTC},
    UsuarioReg: {type: String, default: 'REST'},
    FechaUltMod: {type: String, default: ''},
    UsuarioMod: {type: String, default: ''}
}));