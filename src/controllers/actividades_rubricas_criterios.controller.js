import {FORMATS_FOR_DATE_AND_TIME, POST, GET_LIST, GET, PUT, DELETE} from '../ENV';
import bd from '../models/actividades_rubricas_criterios.model';

const name = [
    'Actividades rúbricas criterios', //Un documento inicia con mayusculas
    'Actividades rúbricas criterios' //Varios documentos inicia con mayusculas
]; 

exports.Post = (req,res) => {
    POST(res,bd,name[0],vowel,req.body);
};

exports.GetList = (req,res) => {
    GET_LIST(res,bd,name[1],vowel);
};

exports.Get = async (req,res) => {
    GET(res,bd,name[0],vowel,{eva_cat_actividades_rubricas_criterios: req.params.id});
};

exports.Put = async (req,res) => {
    req.body.FechaUltMod = FORMATS_FOR_DATE_AND_TIME().DATE_UTC;
    PUT(res,bd,name[0],vowel,{eva_cat_actividades_rubricas_criterios: req.params.id},req.body);
};

exports.Delete = async (req,res) => {
    DELETE(res,bd,name[0],vowel,{eva_cat_actividades_rubricas_criterios: req.params.id});
};