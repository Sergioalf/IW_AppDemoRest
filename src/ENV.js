export const ENVIROMENT = {
    SERVER_PORT: process.env.PORT || 3001,
    BD_URL_CONNECTION: {
        TESTING: '',
        CLOUD: "mongodb+srv://admin:admin@cluster0-23gn0.mongodb.net/test?retryWrites=true",
        LOCAL: "mongodb://localhost:27017/Demo",
        PRODUCTION: ''
    },
    ROUTER_MAIN_MODULES: {
        INDEX: '/',
        EVENTS: {
            NAME_ROUTE: '/api/events',
            ACTIONS: {
                POST_ZONE: '/postzone',
                GET_ZONES_LIST: '/getzoneslist',
                GET_ZONE: '/getzone/:id',
                PUT_ZONE: '/putzone/:id',
                DELETE_ZONE: '/deletezone/:id'
            }
        },
        ACTIVIDADES_APRENDIZAJE: {
            NAME_ROUTE: '/actividades_aprendizaje',
            ACTIONS: {
                POST: '/',
                GET_LIST: '/',
                GET: '/:id',
                PUT: '/:id',
                DELETE: '/:id'
            }
        },
        ACTIVIDADES_ENSENANZA: {
            NAME_ROUTE: '/actividades_ensenanza',
            ACTIONS: {
                POST: '/',
                GET_LIST: '/',
                GET: '/:id',
                PUT: '/:id',
                DELETE: '/:id'
            }
        },
        ACTIVIDADES_RUBRICAS_CRITERIOS: {
            NAME_ROUTE: '/actividades_rubricas_criterios',
            ACTIONS: {
                POST: '/',
                GET_LIST: '/',
                GET: '/:id',
                PUT: '/:id',
                DELETE: '/:id'
            }
        },
        ACTIVIDADES_RUBRICAS_CRITERIOS_DOMINIOS: {
            NAME_ROUTE: '/actividades_rubricas_criterios_dominios',
            ACTIONS: {
                POST: '/',
                GET_LIST: '/',
                GET: '/:id',
                PUT: '/:id',
                DELETE: '/:id'
            }
        },
        FUENTES_BIBLIOGRAFICAS: {
            NAME_ROUTE: '/fuentes_bibliograficas',
            ACTIONS: {
                POST: '/',
                GET_LIST: '/',
                GET: '/:id',
                PUT: '/:id',
                DELETE: '/:id'
            }
        },
        APOYOS_DIDACTICOS: {
            NAME_ROUTE: '/apoyos_didacticos',
            ACTIONS: {
                POST: '/',
                GET_LIST: '/',
                GET: '/:id',
                PUT: '/:id',
                DELETE: '/:id'
            }
        },
        INDICADORES: {
            NAME_ROUTE: '/indicadores',
            ACTIONS: {
                POST: '/',
                GET_LIST: '/',
                GET: '/:id',
                PUT: '/:id',
                DELETE: '/:id'
            }
        },
        NIVELES_GRADOS_COMPETENCIAS: {
            NAME_ROUTE: '/niveles_grados_competencias',
            ACTIONS: {
                POST: '/',
                GET_LIST: '/',
                GET: '/:id',
                PUT: '/:id',
                DELETE: '/:id'
            }
        },
        ALUMNOS: {
            NAME_ROUTE: '/alumnos',
            ACTIONS: {
                POST: '/',
                GET_LIST: '/',
                GET: '/:id',
                PUT: '/:id',
                DELETE: '/:id'
            }
        },
        ESPECIALIDADES: {
            NAME_ROUTE: '/especialidades',
            ACTIONS: {
                POST: '/',
                GET_LIST: '/',
                GET: '/:id',
                PUT: '/:id',
                DELETE: '/:id'
            }
        },
        RETICULAS: {
            NAME_ROUTE: '/reticulas',
            ACTIONS: {
                POST: '/',
                GET_LIST: '/',
                GET: '/:id',
                PUT: '/:id',
                DELETE: '/:id'
            }
        },
        ASIGNATURAS: {
            NAME_ROUTE: '/asignaturas',
            ACTIONS: {
                POST: '/',
                GET_LIST: '/',
                GET: '/:id',
                PUT: '/:id',
                DELETE: '/:id'
            }
        },
        PERSONAS: {
            NAME_ROUTE: '/personas',
            ACTIONS: {
                POST: '/',
                GET_LIST: '/',
                GET: '/:id',
                PUT: '/:id',
                DELETE: '/:id'
            }
        },
        RUBRICAS: {
            NAME_ROUTE: '/rubricas',
            ACTIONS: {
                POST: '/',
                GET_LIST: '/',
                GET: '/:id',
                PUT: '/:id',
                DELETE: '/:id'
            }
        }
    }
}

export const GET_DAY_WEEK_TEXT = (day) => {
    switch(day) {
        case 1: return 'LUNES';
        case 2: return 'MARTES';
        case 3: return 'MIERCOLES';
        case 4: return 'JUEVES';
        case 5: return 'VIERNES';
        case 6: return 'SABADO';
        case 7: return 'DOMINGO'
    }
};  

export const FORMATS_FOR_DATE_AND_TIME = (date = new Date()) => {
    return {
        DATE_STANDARD: date,
        DATE_STRING: date.toDateString(),
        DATE_ISO: date.toISOString(),
        DATE_UTC: date.toUTCString(),
        TIME_STANDARD: date.toTimeString(),
        DATE_TIME_SUBDOCUMENT: {
            DATE: {
                YEAR: date.getFullYear(),
                MONTH: date.getMonth()+1,
                DAY: date.getDate()
            },
            TIME: {
                HOUR: date.getHours(),
                MINUTES: date.getMinutes(),
                SECONDS: date.getSeconds()
            }
        },
        DATE: {
            YEAR: date.getFullYear(),
            MONTH: date.getMonth()+1,
            DAY: date.getDate()
        },
        TIME: {
            HOUR: date.getHours(),
            MINUTES: date.getMinutes(),
            SECONDS: date.getSeconds()
        },
        DAY_WEEK: {
            NUMBER: date.getDay,
            TEXT: GET_DAY_WEEK_TEXT(date.getDay())
        }
    }
}

export const GET_TYPE_ASSISTANCE = () => {
    return null;
};

import status from 'http-status';

export const POST = async (res,bd,name,vowel,body) => {
    await bd.create(body)
    .then(data => {
        SEND_INFO(res, data, `${name[0]} insertad${vowel} exitósamente`, status.CREATED);
    })
    .catch(err => {
        SEND_INFO(res, err, `${name[0]} no pudo ser insertad${vowel}`, status.INTERNAL_SERVER_ERROR);
    });
};

export const GET_LIST = async (res,bd,name,vowel) => {
    await bd.find()
    .then(data => {
        data.length == 0 ? 
        SEND_INFO(res, 'Nada', `No se encontraron ${name[3]}`, status.NOT_FOUND):
        SEND_INFO(res, data, `${name[1]} recuperad${vowel}s exitósamente`, status.OK);
    })
    .catch(err => {
        SEND_INFO(res, err, `${name[1]} no pudieron ser recuperad${vowle}s`, status.INTERNAL_SERVER_ERROR);
    });
};

export const GET = async (res,bd,name,vowel,condition) => {
    await bd.findOne(condition)
    .then(data => {
        data == null ?
        SEND_INFO(res, 'Nada', `No se encontró ${name[2]}`, status.NOT_FOUND):
        SEND_INFO(res, data, `${name[0]} recuperad${vowel} exitósamente`, status.OK);
    })
    .catch(err => {
        SEND_INFO(res, err, `${name[0]} no pudo ser recuperad${vowel}`, status.INTERNAL_SERVER_ERROR);
    });
}

export const PUT = async (res,bd,name,vowel,condition,body) => {
    await bd.findOneAndUpdate(condition, body, {new: true})
    .then(data => {
        data == null ?
        SEND_INFO(res, 'Nada', `No se encontró ${name[2]}`, status.NOT_FOUND):
        SEND_INFO(res, data, `${name[0]} actualizad${vowel} exitósamente`, status.OK);
    })
    .catch(err => {
        SEND_INFO(res, err, `${name[0]} no pudo ser actualizad${vowel}`, status.INTERNAL_SERVER_ERROR);
    });
};

export const DELETE = async (res,bd,name,vowel,condition) => {
    await bd.findOneAndDelete(condition)
    .then(data => {
        data == null ?
        SEND_INFO(res, 'Nada', `No se encontró ${name[2]}`, status.NOT_FOUND):
        SEND_INFO(res, data, `${name[0]} eliminad${vowel} exitósamente`, status.OK);
    })
    .catch(err => {
        SEND_INFO(res, err, `${name[0]} no pudo ser eliminad${vowel}`, status.INTERNAL_SERVER_ERROR);
    });
};

export const SEND_INFO = (res, data, message, code) => {
    console.log("code: " + code + "\nMessage: " + message + "\n");
    res.status(code);
    res.json({
        code: code,
        message: message,
        detail: data
    });
};
