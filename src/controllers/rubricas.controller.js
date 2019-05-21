import {FORMATS_FOR_DATE_AND_TIME, POST, GET_LIST, GET, PUT, DELETE} from '../ENV';
import bd from '../models/rubricas.model';

const name = [
    'Rúbrica',
    'Rúbricas'
];

exports.Post = async (req,res) => {
    POST(res,bd,name[0],req.body);
};

exports.GetList = async (req,res) => {
    GET_LIST(res,bd,name[1]);
};

exports.Get = async (req,res) => {
    GET(res,bd,name[0],{IdRubrica: req.params.id})
};

exports.Put = async (req,res) => {
    req.body.FechaUltMod = FORMATS_FOR_DATE_AND_TIME().DATE_UTC;
    PUT(res,bd,name[0],{IdRubrica: req.params.id},req.body);
};

exports.Delete = async (req,res) => {
    DELETE(res,bd,name[0],{IdRubrica: req.params.id});
};

exports.PostSub = async (req,res) => {
    PUT(res,bd,name[0],{IdRubrica: req.params.id},{$push: {eva_cat_rubricas_criterios_AS: req.body}});
};

exports.GetSub = async (req,res) => {
    GET(res,bd,name[0],{IdRubrica: req.params.id, 'eva_cat_rubricas_criterios_AS.IdCriterioRubrica': req.params.idSub});
};

exports.PutSub = async (req,res) => {
    PUT(res,bd,name[0],{
        IdRubrica: req.params.id, 'eva_cat_rubricas_criterios_AS.IdCriterioRubrica': req.params.idSub
    },
    {
        'eva_cat_rubricas_criterios_AS.$.eva_cat_rubricas_criterios':req.body.eva_cat_rubricas_criterios,
        'eva_cat_rubricas_criterios_AS.$.IdCriterioRubrica':req.body.IdCriterioRubrica,
        'eva_cat_rubricas_criterios_AS.$.DesCriterioRubrica':req.body.DesCriterioRubrica,
        'eva_cat_rubricas_criterios_AS.$.Detalle':req.body.Detalle,
        'eva_cat_rubricas_criterios_AS.$.Activo':req.body.Activo,
        'eva_cat_rubricas_criterios_AS.$.Borrado':req.body.Borrado,
        'eva_cat_rubricas_criterios_AS.$.UsuarioMod':req.body.UsuarioMod,
        'eva_cat_rubricas_criterios_AS.$.FechaUltMod': FORMATS_FOR_DATE_AND_TIME().DATE_UTC
    });
};

exports.DeleteSub = async (req,res) => {
    PUT(res,bd,name[0],{IdRubrica: req.params.id},{$pull: {eva_cat_rubricas_criterios_AS:{IdCriterioRubrica: req.params.idSub}}});
};

exports.PostSubSub = async (req,res) => {
    PUT(res,bd,name[0],{
            IdRubrica: req.params.id, 'eva_cat_rubricas_criterios_AS.IdCriterioRubrica': req.params.idSub
        },
        {
            $push: {
                'eva_cat_rubricas_criterios_AS.$.eva_nivel_dominio_criterio_rubricas_AS': req.body
            }
        }
    );
};

exports.GetSubSub = async (req,res) => {
    GET(res,bd,name[0],{
        IdRubrica: req.params.id, 'eva_cat_rubricas_criterios_AS.IdCriterioRubrica': req.params.idSub, 'eva_cat_rubricas_criterios_AS.eva_nivel_dominio_criterio_rubricas_AS.IdNivelDominio': req.params.idSubSub
    });
};
/*
exports.PutSubSub = async (req,res) => {
    PUT(res,bd,name[0],{
        IdRubrica: req.params.id, 'eva_cat_rubricas_criterios_AS.IdCriterioRubrica': req.params.idSub, 'eva_cat_rubricas_criterios_AS.eva_nivel_dominio_criterio_rubricas_AS.IdNivelDominio': req.params.idSubSub
    },
    {
        'eva_cat_rubricas_criterios_AS.$.eva_nivel_dominio_criterio_rubricas_AS.$.IdNivelDominio':100
    });
};

exports.DeleteSubSub = async (req,res) => {
    PUT(res,bd,name[0],{
        IdRubrica: req.params.id, 'eva_cat_rubricas_criterios_AS.IdCriterioRubrica': req.params.idSub, 'eva_cat_rubricas_criterios_AS.eva_nivel_dominio_criterio_rubricas_AS.IdNivelDominio': req.params.idSubSub
    },
    {   
        $pull: {eva_cat_rubricas_criterios_AS:{eva_nivel_dominio_criterio_rubricas_AS:{IdNivelDominio: req.params.idSubSub}}}
    })
};*/