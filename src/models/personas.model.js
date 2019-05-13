import mongoose from 'mongoose';
import { ENVIROMENT, FORMATS_FOR_DATE_AND_TIME } from '../ENV';

const Schema = mongoose.Schema;

module.exports = mongoose.model('rh_cat_personas', new Schema({
    IdPersona: {type: Number, required: true},
    Nombre: {type: String, default: ''},
    ApPaterno: {type: String, default: ''},
    ApMaterno: {type: String, default: ''},
    Alias: {type: String, default: ''},
    Sexo: {type: String, default: ''},
    TipoPersona: {type: String, default: ''},
    RFC: {type: String, default: ''},
    CURP: {type: String, default: ''},
    FechaNac: {type: Date, default: ''},
    TipoOcupación: {type: String, required: true},
    TipoEstadoCivil: {type: String, required: true},
    RutaFoto: {type: String, default: ''},
    Activo: {type: String, default: 'S'},
    Borrado: {type: String, default: 'N'},
    FechaReg: {type: String, default: FORMATS_FOR_DATE_AND_TIME().DATE_UTC},
    UsuarioReg: {type: String, default: 'REST'},
    FechaUltMod: {type: String, default: ''},
    UsuarioMod: {type: String, default: ''},
    rh_cat_dir_webs_AS: [],
    rh_cat_domicilios_AS: [],
    rh_cat_telefonos_AS: [],
    rh_cat_institutos_perfiles_AS: [],
}));