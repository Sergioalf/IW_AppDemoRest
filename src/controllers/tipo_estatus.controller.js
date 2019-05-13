import {FORMATS_FOR_DATE_AND_TIME, POST, GET_LIST, GET, PUT, DELETE} from '../ENV';
import tipo_estatus from '../models/tipo_estatus.model';

const bd = tipo_estatus;
const name = [
    'Tipo estatus',
    'Tipos estatus',
    'tipo estatus',
    'tipos estatus'
];
const vowel = 'a';

exports.Post = async (req,res) => {
    POST(res,bd,name,vowel,req.body);
};

exports.GetList = async (req,res) => {
    GET_LIST(res,bd,name,vowel);
};

exports.Get = async (req,res) => {
    GET(res,bd,name,vowel,{IdTipoEstatus: req.params.id})
};

exports.Put = async (req,res) => {
    req.body.FechaUltMod = FORMATS_FOR_DATE_AND_TIME().DATE_UTC;
    PUT(res,bd,name,vowel,{IdTipoEstatus: req.params.id},req.body);
};

exports.Delete = async (req,res) => {
    DELETE(res,bd,name,vowel,{IdTipoEstatus: req.params.id});
};