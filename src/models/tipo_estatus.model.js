import mongoose from 'mongoose';
import { ENVIROMENT, FORMATS_FOR_DATE_AND_TIME } from '../ENV';

const Schema = mongoose.Schema;

module.exports = mongoose.model('eva_cat_tipo_estatus', new Schema({
    IdTipoEstatus: {type: Number, required: true},
    DesTipoEstatus: {type: String, default: ''},
    Activo: {type: String, default: 'S'},
    Borrado: {type: String, default: 'N'},
    FechaReg: {type: String, default: FORMATS_FOR_DATE_AND_TIME().DATE_UTC},
    UsuarioReg: {type: String, default: 'REST'},
    FechaUltMod: {type: String, default: ''},
    UsuarioMod: {type: String, default: ''},
    cat_estatus_AS: [
        {
            cat_estatus: {type: Number, required: true},
            IdEstatus: {type: Number, default: '0'},
            DesEstatus: {type: String, default: ''},
            Clave: {type: String, default: ''},
            Activo: {type: String, default: 'S'},
            Borrado: {type: String, default: 'N'},
            FechaReg: {type: String, default: FORMATS_FOR_DATE_AND_TIME().DATE_UTC},
            UsuarioReg: {type: String, default: 'REST'},
            FechaUltMod: {type: String, default: ''},
            UsuarioMod: {type: String, default: ''}
        }
    ]
}));