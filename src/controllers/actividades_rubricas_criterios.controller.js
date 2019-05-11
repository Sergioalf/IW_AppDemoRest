import {FORMATS_FOR_DATE_AND_TIME, POST, GET_LIST, GET, PUT, DELETE} from '../ENV';
import actividades_rubricas_criterios from '../models/actividades_rubricas_criterios.model';

const bd = actividades_rubricas_criterios;
const name = [
    'Actividades rúbricas criterios', //Un documento inicia con mayusculas
    'Actividades rúbricas criterios', //Varios documentos inicia con mayusculas
    'actividad rúbricas criterios', //Un documento inicia con minusculas
    'actividades rúbricas criterios' //Varios documentos inicia con minusculas
]; 
const vowel = 'o';

exports.Post = (req,res) => {
    POST(res,bd,name,vowel,req.body);
};

exports.GetList = (req,res) => {
    GET_LIST(res,bd,name,vowel);
};

exports.Get = async (req,res) => {
    GET(res,bd,name,vowel,{eva_cat_actividades_rubricas_criterios: req.params.id});
};

exports.Put = async (req,res) => {
    req.body.FechaUltMod = FORMATS_FOR_DATE_AND_TIME().DATE_UTC;
    PUT(res,bd,name,vowel,{eva_cat_actividades_rubricas_criterios: req.params.id},req.body);
};

exports.Delete = async (req,res) => {
    DELETE(res,bd,name,vowel,{eva_cat_actividades_rubricas_criterios: req.params.id});
};