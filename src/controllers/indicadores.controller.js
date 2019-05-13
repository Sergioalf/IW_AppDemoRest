import {FORMATS_FOR_DATE_AND_TIME, POST, GET_LIST, GET, PUT, DELETE} from '../ENV';
import bd from '../models/indicadores.model';

const name = [
    'Indicador',
    'Indicadores'
];

exports.Post = async (req,res) => {
    POST(res,bd,name[0],req.body);
};

exports.GetList = async (req,res) => {
    GET_LIST(res,bd,name[1]);
};

exports.Get = async (req,res) => {
    GET(res,bd,name[0],{IdIndicador: req.params.id})
};

exports.Put = async (req,res) => {
    req.body.FechaUltMod = FORMATS_FOR_DATE_AND_TIME().DATE_UTC;
    PUT(res,bd,name[0],{IdIndicador: req.params.id},req.body);
};

exports.Delete = async (req,res) => {
    DELETE(res,bd,name[0],{IdIndicador: req.params.id});
};