import mongoose from 'mongoose';
import { ENVIROMENT, FORMATS_FOR_DATE_AND_TIME } from '../ENV';

const Schema = mongoose.Schema;

module.exports = mongoose.model('eva_cat_rubricas', new Schema({
    IdRubrica: {type: Number, required: true},
    TipoRubrica: {type: String, default: ''},
    DesRubrica: {type: String, default: ''},
    Detalle: {type: String, default: ''},
    Activo: {type: String, default: 'S'},
    Borrado: {type: String, default: 'N'},
    FechaReg: {type: String, default: FORMATS_FOR_DATE_AND_TIME().DATE_UTC},
    UsuarioReg: {type: String, default: 'REST'},
    FechaUltMod: {type: String, default: ''},
    UsuarioMod: {type: String, default: ''},
    eva_cat_rubricas_criterios_AS: [
        {
            eva_cat_rubricas_criterios: {type: String, required: true},
            IdCriterioRubrica: {type: Number, default: 0},
            DesCriterioRubrica: {type: String, default: ''},
            Detalle: {type: String, default: ''},
            Activo: {type: String, default: 'S'},
            Borrado: {type: String, default: 'N'},
            FechaReg: {type: String, default: FORMATS_FOR_DATE_AND_TIME().DATE_UTC},
            UsuarioReg: {type: String, default: 'REST'},
            FechaUltMod: {type: String, default: ''},
            UsuarioMod: {type: String, default: ''},
            eva_nivel_dominio_criterio_rubricas_AS:[
                {
                    eva_nivel_dominio_criterio_rubricas: {type: String, required:true},
                    IdNivelDominio: {type: String, default: ''},
                    DesNivelDominio: {type: String, default: ''},
                    ValorPuntuacion: {type: Number, default: 0},
                    Detalle: {type: String, default: ''},
                    Activo: {type: String, default: 'S'},
                    Borrado: {type: String, default: 'N'},
                    FechaReg: {type: String, default: FORMATS_FOR_DATE_AND_TIME().DATE_UTC},
                    UsuarioReg: {type: String, default: 'REST'},
                    FechaUltMod: {type: String, default: ''},
                    UsuarioMod: {type: String, default: ''}
                }
            ]
        }
    ]
}));