import mongoose from 'mongoose';
import { ENVIROMENT, FORMATS_FOR_DATE_AND_TIME } from '../ENV';

const Schema = mongoose.Schema;

module.exports = mongoose.model('eva_cat_tipos_generales', new Schema({
    IdTipoGeneral: {type: Number, required: true},
    DesTipo: {type: String, default: ''},
    Activo: {type: String, default: 'S'},
    Borrado: {type: String, default: 'N'},
    FechaReg: {type: String, default: FORMATS_FOR_DATE_AND_TIME().DATE_UTC},
    UsuarioReg: {type: String, default: 'REST'},
    FechaUltMod: {type: String, default: ''},
    UsuarioMod: {type: String, default: ''},
    cat_generales_AS: [
        {
            cat_generales: {type: Number, required: true},
            IdGeneral: {type: Number, default: '0'},
            DesGeneral: {type: String, default: ''},
            Clave: {type: String, default: ''},
            Referencia: {type: String, default: ''},
            Activo: {type: String, default: 'S'},
            Borrado: {type: String, default: 'N'},
            FechaReg: {type: String, default: FORMATS_FOR_DATE_AND_TIME().DATE_UTC},
            UsuarioReg: {type: String, default: 'REST'},
            FechaUltMod: {type: String, default: ''},
            UsuarioMod: {type: String, default: ''}
        }
    ]
}));