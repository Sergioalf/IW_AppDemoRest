import {FORMATS_FOR_DATE_AND_TIME, POST, GET_LIST, GET, PUT, DELETE} from '../ENV';
import actividades_ensenanza from '../models/actividades_ensenanza.model';

const bd = actividades_ensenanza;
const name = [
    'Actividad de enseñanza', //Un documento inicia con mayusculas
    'Actividades de enseñanza', //Varios documentos inicia con mayusculas
    'actividad de enseñanza', //Un documento inicia con minusculas
    'actividades de enseñanza' //Varios documentos inicia con minusculas
]; 
const vowel = 'a';

exports.Post = (req,res) => {
    POST(res,bd,name,vowel,req.body);
};

exports.GetList = (req,res) => {
    GET_LIST(res,bd,name,vowel);
};

exports.Get = async (req,res) => {
    GET(res,bd,name,vowel,{IdActividadEnsenanza: req.params.id});
};

exports.Put = async (req,res) => {
    req.body.FechaUltMod = FORMATS_FOR_DATE_AND_TIME().DATE_UTC;
    PUT(res,bd,name,vowel,{IdActividadEnsenanza: req.params.id},req.body);
};

exports.Delete = async (req,res) => {
    DELETE(res,bd,name,vowel,{IdActividadEnsenanza: req.params.id});
};