import {FORMATS_FOR_DATE_AND_TIME, POST, GET_LIST, GET, PUT, DELETE} from '../ENV';
import bd from '../models/tipo_estatus.model';

const name = [
    'Tipo estatus',
    'Tipos estatus'
];

exports.Post = async (req,res) => {
    POST(res,bd,name[0],req.body);
};

exports.GetList = async (req,res) => {
    GET_LIST(res,bd,name[1]);
};

exports.Get = async (req,res) => {
    GET(res,bd,name[0],{IdTipoEstatus: req.params.id})
};

exports.Put = async (req,res) => {
    req.body.FechaUltMod = FORMATS_FOR_DATE_AND_TIME().DATE_UTC;
    PUT(res,bd,name[0],{IdTipoEstatus: req.params.id},req.body);
};

exports.Delete = async (req,res) => {
    DELETE(res,bd,name[0],{IdTipoEstatus: req.params.id});
};

exports.PostSub = async (req,res) => {
    PUT(res,bd,name[0],{IdTipoEstatus: req.params.id},{$push: {cat_estatus_AS: req.body}});
};

exports.GetSub = async (req,res) => {
    GET(res,bd,name[0],{IdTipoEstatus: req.params.id, 'cat_estatus_AS.IdEstatus': req.params.idSub});
};

exports.PutSub = async (req,res) => {
    PUT(res,bd,name[0],{
        IdTipoEstatus: req.params.id, 'cat_estatus_AS.IdEstatus': req.params.idSub
    },
    {
        'cat_estatus_AS.$.cat_estatus':req.body.cat_estatus,
        'cat_estatus_AS.$.IdEstatus':req.body.IdEstatus,
        'cat_estatus_AS.$.DesEstatus':req.body.DesEstatus,
        'cat_estatus_AS.$.Clave':req.body.Clave,
        'cat_estatus_AS.$.Activo':req.body.Activo,
        'cat_estatus_AS.$.Borrado':req.body.Borrado,
        'cat_estatus_AS.$.UsuarioMod':req.body.UsuarioMod,
        'cat_estatus_AS.$.FechaUltMod': FORMATS_FOR_DATE_AND_TIME().DATE_UTC
    });
};

exports.DeleteSub = async (req,res) => {
    PUT(res,bd,name[0],{IdTipoEstatus: req.params.id},{$pull: {cat_estatus_AS:{IdEstatus: req.params.idSub}}});
};