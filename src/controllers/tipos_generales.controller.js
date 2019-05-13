import {FORMATS_FOR_DATE_AND_TIME, POST, GET_LIST, GET, PUT, DELETE} from '../ENV';
import tipos_generales from '../models/tipos_generales.model';

const bd = tipos_generales;
const name = [
    'Tipo general',
    'Tipos generales',
    'tipo general',
    'tipos generales'
];
const vowel = 'o';

exports.Post = async (req,res) => {
    POST(res,bd,name,vowel,req.body);
};

exports.GetList = async (req,res) => {
    GET_LIST(res,bd,name,vowel);
};

exports.Get = async (req,res) => {
    GET(res,bd,name,vowel,{IdTipoGeneral: req.params.id})
};

exports.Put = async (req,res) => {
    req.body.FechaUltMod = FORMATS_FOR_DATE_AND_TIME().DATE_UTC;
    PUT(res,bd,name,vowel,{IdTipoGeneral: req.params.id},req.body);
};

exports.Delete = async (req,res) => {
    DELETE(res,bd,name,vowel,{IdTipoGeneral: req.params.id});
};