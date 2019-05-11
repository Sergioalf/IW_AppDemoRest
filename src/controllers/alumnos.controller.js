import {FORMATS_FOR_DATE_AND_TIME, POST, GET_LIST, GET, PUT, DELETE} from '../ENV';
import alumnos from '../models/alumnos.model';

const bd = alumnos;
const name = [
    'Alumno',
    'Alumnos',
    'alumno',
    'alumnos'
];
const vowel = 'o';

exports.Post = async (req,res) => {
    /*req.body.FechaIngreso = FORMATS_FOR_DATE_AND_TIME(req.body.FechaIngreso).DATE_UTC();
    req.body.FechaEgreso = FORMATS_FOR_DATE_AND_TIME(req.body.FechaEgreso).DATE_UTC();
    req.body.FechaTitulacion = FORMATS_FOR_DATE_AND_TIME(req.body.FechaTitulacion).DATE_UTC();
    req.body.FechaUltModSII = FORMATS_FOR_DATE_AND_TIME(req.body.FechaUltModSII).DATE_UTC();*/
    POST(res,bd,name,vowel,req.body);
};

exports.GetList = async (req,res) => {
    GET_LIST(res,bd,name,vowel);
};

exports.Get = async (req,res) => {
    GET(res,bd,name,vowel,{IdAlumno: req.params.id})
};

exports.Put = async (req,res) => {
    req.body.FechaUltMod = FORMATS_FOR_DATE_AND_TIME().DATE_UTC;
    PUT(res,bd,name,vowel,{IdAlumno: req.params.id},req.body);
};

exports.Delete = async (req,res) => {
    DELETE(res,bd,name,vowel,{IdAlumno: req.params.id});
};