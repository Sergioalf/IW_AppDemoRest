import {FORMATS_FOR_DATE_AND_TIME, POST, GET_LIST, GET, PUT, DELETE} from '../ENV';
import bd from '../models/carreras.model';

const name = [
    'Carrera',
    'Carreras'
];

exports.Post = async (req,res) => {
    POST(res,bd,name[0],req.body);
};

exports.GetList = async (req,res) => {
    GET_LIST(res,bd,name[1]);
};

exports.Get = async (req,res) => {
    GET(res,bd,name[0],{IdCarrera: req.params.id})
};

exports.Put = async (req,res) => {
    req.body.FechaUltMod = FORMATS_FOR_DATE_AND_TIME().DATE_UTC;
    PUT(res,bd,name[0],{IdCarrera: req.params.id},req.body);
};

exports.Delete = async (req,res) => {
    DELETE(res,bd,name[0],{IdCarrera: req.params.id});
};

exports.PostSub = async (req,res) => {
    PUT(res,bd,name[0],{IdCarrera: req.params.id},{$push: {eva_cat_carreras_especialidades_AS: req.body}});
};

exports.GetSub = async (req,res) => {
    GET(res,bd,name[0],{IdCarrera: req.params.id, 'eva_cat_carreras_especialidades_AS.IdEspecialidad': req.params.idSub});
};

exports.PutSub = async (req,res) => {
    PUT(res,bd,name[0],{
        IdCarrera: req.params.id, 'eva_cat_carreras_especialidades_AS.IdEspecialidad': req.params.idSub
    },
    {
        'eva_cat_carreras_especialidades_AS.$.eva_cat_carreras_especialidades':req.body.eva_cat_carreras_especialidades,
        'eva_cat_carreras_especialidades_AS.$.IdEspecialidad':req.body.IdEspecialidad,
        'eva_cat_carreras_especialidades_AS.$.FechaIni':req.body.FechaIni,
        'eva_cat_carreras_especialidades_AS.$.FechaFin':req.body.FechaFin,
        'eva_cat_carreras_especialidades_AS.$.Activo':req.body.Activo,
        'eva_cat_carreras_especialidades_AS.$.Borrado':req.body.Borrado,
        'eva_cat_carreras_especialidades_AS.$.UsuarioMod':req.body.UsuarioMod,
        'eva_cat_carreras_especialidades_AS.$.FechaUltMod': FORMATS_FOR_DATE_AND_TIME().DATE_UTC
    });
};

exports.DeleteSub = async (req,res) => {
    PUT(res,bd,name[0],{IdCarrera: req.params.id},{$pull: {eva_cat_carreras_especialidades_AS:{IdEspecialidad: req.params.idSub}}});
};