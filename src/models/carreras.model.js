import mongoose from 'mongoose';
import { ENVIROMENT, FORMATS_FOR_DATE_AND_TIME } from '../ENV';

const Schema = mongoose.Schema;

module.exports = mongoose.model('eva_cat_indicadores', new Schema({
    IdCarrera: {type: Number, required: true},
    ClaveCarrera: {type: String, default: ''},
    ClaveOficial: {type: String, default: ''},
    DesCarrera: {type: String, default: ''},
    NombreCorta: {type: String, default: ''},
    Alias: {type: String, default: ''},
    TipoGradoEscolar: {type: String, required: true},
    TipoModalidad: {type: String, required: true},
    Creditos: {type: Number, default: 0},
    FechaIni: {type: Date, default: ''},
    FechaFin: {type: Date, default: ''},    
    Activo: {type: String, default: 'S'},
    Borrado: {type: String, default: 'N'},
    FechaReg: {type: String, default: FORMATS_FOR_DATE_AND_TIME().DATE_UTC},
    UsuarioReg: {type: String, default: 'REST'},
    FechaUltMod: {type: String, default: ''},
    UsuarioMod: {type: String, default: ''},
    eva_cat_carreras_especialidades: [
        {
            eva_cat_carreras_especialidades: {type: String, required: true},
            IdEspecialidad: {type: Number, required: true},
            FechaIni: {type: Date, default: ''},
            FechaFin: {type: Date, default: ''},
            Activo: {type: String, default: 'S'},
            Borrado: {type: String, default: 'N'},
            FechaReg: {type: String, default: FORMATS_FOR_DATE_AND_TIME().DATE_UTC},
            UsuarioReg: {type: String, default: 'REST'},
            FechaUltMod: {type: String, default: ''},
            UsuarioMod: {type: String, default: ''}
        }
    ]
}));