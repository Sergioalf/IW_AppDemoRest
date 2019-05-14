import {FORMATS_FOR_DATE_AND_TIME, POST, GET_LIST, GET, PUT, DELETE} from '../ENV';
import bd from '../models/tipos_generales.model';

const name = [
    'Tipo general',
    'Tipos generales'
];

exports.Post = async (req,res) => {
    POST(res,bd,name[0],req.body);
};

exports.GetList = async (req,res) => {
    GET_LIST(res,bd,name[1]);
};

exports.Get = async (req,res) => {
    GET(res,bd,name[0],{IdTipoGeneral: req.params.id})
};

exports.Put = async (req,res) => {
    req.body.FechaUltMod = FORMATS_FOR_DATE_AND_TIME().DATE_UTC;
    PUT(res,bd,name[0],{IdTipoGeneral: req.params.id},req.body);
};

exports.Delete = async (req,res) => {
    DELETE(res,bd,name[0],{IdTipoGeneral: req.params.id});
};

exports.PostSub = async (req,res) => {
    PUT(res,bd,name[0],{IdTipoGeneral: req.params.id},{$push: {cat_generales_AS: req.body}});
};

exports.GetSub = async (req,res) => {
    GET(res,bd,name[0],{IdTipoGeneral: req.params.id, 'cat_generales_AS.IdGeneral': req.params.idSub});
};

exports.PutSub = async (req,res) => {
    PUT(res,bd,name[0],{
        IdTipoGeneral: req.params.id, 'cat_generales_AS.IdGeneral': req.params.idSub
    },
    {
        'cat_generales_AS.$.cat_generales':req.body.cat_generales,
        'cat_generales_AS.$.IdGeneral':req.body.IdGeneral,
        'cat_generales_AS.$.DesGeneral':req.body.DesGeneral,
        'cat_generales_AS.$.Clave':req.body.Clave,
        'cat_generales_AS.$.Referencia':req.body.Referencia,
        'cat_generales_AS.$.Activo':req.body.Activo,
        'cat_generales_AS.$.Borrado':req.body.Borrado,
        'cat_generales_AS.$.UsuarioMod':req.body.UsuarioMod,
        'cat_generales_AS.$.FechaUltMod': FORMATS_FOR_DATE_AND_TIME().DATE_UTC
    });
};

exports.DeleteSub = async (req,res) => {
    PUT(res,bd,name[0],{IdTipoGeneral: req.params.id},{$pull: {cat_generales_AS:{IdGeneral: req.params.idSub}}});
};