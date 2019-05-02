export const ENVIROMENT = {
    SERVER_PORT: process.env.PORT || 3001,
    BD_URL_CONNECTION: {
        TESTING: '',
        DEVELOPING: "mongodb://localhost:27017/Demo",
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

export const SEND_INFO = (res, data, message, code) => {
    console.log("code: " + code + "\nMessage: " + message + "\n");
    res.status(code);
    res.json({
        code: code,
        message: message,
        detail: data
    });
};