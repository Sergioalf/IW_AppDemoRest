import {FORMATS_FOR_DATE_AND_TIME, POST, GET_ALL, GET, PUT, DELETE} from '../ENV';
import actividades_ensenanza from '../models/actividades_ensenanza.model';

const bd = actividades_ensenanza;
const name = [
    'Actividad de enseñanza', //Un documento inicia con mayusculas
    'Actividades de enseñanza', //Varios documentos inicia con mayusculas
    'actividad de enseñanza', //Un documento inicia con minusculas
    'actividades de enseñanza' //Varios documentos inicia con minusculas
]; 
const vowel = 'a';

exports.PostActividadEnsenanza = (req,res) => {
    POST(res,bd,name,vowel,req.body);
};

exports.GetActividadesEnsenanzaList = (req,res) => {
    GET_ALL(res,bd,name,vowel);
};

exports.GetActividadEnsenanza = async (req,res) => {
    GET(res,bd,name,vowel,{IdActividadEnsenanza: req.params.id});
};

exports.PutActividadEnsenanza = async (req,res) => {
    req.body.FechaUltMod = FORMATS_FOR_DATE_AND_TIME().DATE_UTC;
    PUT(res,bd,name,vowel,{IdActividadEnsenanza: req.params.id},req.body);
};

exports.DeleteActividadEnsenanza = async (req,res) => {
    DELETE(res,bd,name,vowel,{IdActividadEnsenanza: req.params.id});
};