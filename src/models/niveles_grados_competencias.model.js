import mongoose from 'mongoose';
import { ENVIROMENT, FORMATS_FOR_DATE_AND_TIME } from '../ENV';

const Schema = mongoose.Schema;

module.exports = mongoose.model('eva_cat_niveles_grados_competencias', new Schema({
    IdNivelDominio: {type: Number, required: true},
    IdPeriodo: {type: Number, required: true},
    DesNivelDominio: {type: String, default: ''},
    Detalle: {type: String, default: ''},
    RangoInicial:{type: Number, default: 0},
    RangoFinal:{type: Number, default: 10},
    Activo: {type: String, default: 'S'},
    Borrado: {type: String, default: 'N'},
    FechaReg: {type: String, default: FORMATS_FOR_DATE_AND_TIME().DATE_UTC},
    UsuarioReg: {type: String, default: 'REST'},
    FechaUltMod: {type: String, default: ''},
    UsuarioMod: {type: String, default: ''}
}));