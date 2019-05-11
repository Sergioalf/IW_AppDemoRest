import {FORMATS_FOR_DATE_AND_TIME, POST, GET_LIST, GET, PUT, DELETE} from '../ENV';
import niveles_grados_competencias from '../models/niveles_grados_competencias.model';

const bd = niveles_grados_competencias;
const name = [
    'Nivel grado competencia',
    'Niveles grados competencias',
    'nivel grado competencia',
    'niveles grados competencias'
];
const vowel = 'o';

exports.Post = async (req,res) => {
    POST(res,bd,name,vowel,req.body);
};

exports.GetList = async (req,res) => {
    GET_LIST(res,bd,name,vowel);
};

exports.Get = async (req,res) => {
    GET(res,bd,name,vowel,{IdNivelDominio: req.params.id})
};

exports.Put = async (req,res) => {
    req.body.FechaUltMod = FORMATS_FOR_DATE_AND_TIME().DATE_UTC;
    PUT(res,bd,name,vowel,{IdNivelDominio: req.params.id},req.body);
};

exports.Delete = async (req,res) => {
    DELETE(res,bd,name,vowel,{IdNivelDominio: req.params.id});
};