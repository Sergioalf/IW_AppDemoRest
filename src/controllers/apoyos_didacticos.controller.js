import {FORMATS_FOR_DATE_AND_TIME, POST, GET_LIST, GET, PUT, DELETE} from '../ENV';
import apoyos_didacticos from '../models/apoyos_didacticos.model';

const bd = apoyos_didacticos;
const name = [
    'Apoyo didáctico',
    'Apoyos didácticos',
    'apoyo didáctico',
    'apoyos didácticos'
];
const vowel = 'o';

exports.Post = async (req,res) => {
    POST(res,bd,name,vowel,req.body);
};

exports.GetList = async (req,res) => {
    GET_LIST(res,bd,name,vowel);
};

exports.Get = async (req,res) => {
    GET(res,bd,name,vowel,{IdApoyoDidactico: req.params.id})
};

exports.Put = async (req,res) => {
    req.body.FechaUltMod = FORMATS_FOR_DATE_AND_TIME().DATE_UTC;
    PUT(res,bd,name,vowel,{IdApoyoDidactico: req.params.id},req.body);
};

exports.Delete = async (req,res) => {
    DELETE(res,bd,name,vowel,{IdApoyoDidactico: req.params.id});
};