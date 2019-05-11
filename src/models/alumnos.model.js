import mongoose from 'mongoose';
import { ENVIROMENT, FORMATS_FOR_DATE_AND_TIME } from '../ENV';

const Schema = mongoose.Schema;

module.exports = mongoose.model('rh_cat_aulmnos', new Schema({
    IdAlumno: {type: Number, required: true},
    NumControl: {type: String, default: ''},
    IdCarrera: {type: Number, required: true},
    IdEspecialidad: {type: String, required: true},
    IdReticula: {type: Number, required: true},
    FechaIngreso: {type: Date, default: ''},
    FechaEgreso: {type: Date, default: ''},
    FechaTitulacion: {type: Date, default: ''},
    FechaUltModSII: {type: Date, default: ''},
    SemestreActual: {type: Number, default: 0},
    TipoOpcionTitulacion: {type: String, required: true},
    IdPeriodoIngreso: {type: Number, required: true},
    IdPeriodoUltimo: {type: Number, required: true},
    IdPeriodoTitulacion: {type: Number, required: true},
    TipoNivelEscolar: {type: Number, required: true},
    TipoIngreso: {type: Number, required: true},
    TipoPlanEstudio: {type: Number, required: true},
    Activo: {type: String, default: 'S'},
    Borrado: {type: String, default: 'N'},
    FechaReg: {type: String, default: FORMATS_FOR_DATE_AND_TIME().DATE_UTC},
    UsuarioReg: {type: String, default: 'REST'},
    FechaUltMod: {type: String, default: ''},
    UsuarioMod: {type: String, default: ''}
}));