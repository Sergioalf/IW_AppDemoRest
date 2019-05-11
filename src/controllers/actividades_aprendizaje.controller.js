import {FORMATS_FOR_DATE_AND_TIME, POST, GET_LIST, GET, PUT, DELETE} from '../ENV';
import actividades_aprendizaje from '../models/actividades_aprendizaje.model';

const bd = actividades_aprendizaje;
const name = [
    'Actividad de aprendizaje',
    'Actividades de aprendizaje',
    'actividad de aprendizaje',
    'actividades de aprendizaje'
];
const vowel = 'a';

exports.Post = async (req,res) => {
    POST(res,bd,name,vowel,req.body);
};

exports.GetList = async (req,res) => {
    GET_LIST(res,bd,name,vowel);
};

exports.Get = async (req,res) => {
    GET(res,bd,name,vowel,{IdActividadAprendizaje: req.params.id})
};

exports.Put = async (req,res) => {
    req.body.FechaUltMod = FORMATS_FOR_DATE_AND_TIME().DATE_UTC;
    PUT(res,bd,name,vowel,{IdActividadAprendizaje: req.params.id},req.body);
};

exports.Delete = async (req,res) => {
    DELETE(res,bd,name,vowel,{IdActividadAprendizaje: req.params.id});
};