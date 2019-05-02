export const ENVIROMENT = {
    SERVER_PORT: process.env.PORT || 3001,
    BD_URL_CONNECTION: {
        TESTING: '',
        DEVELOPING: "mongodb://localhost:27017/Demo",
        PRODUCTION: ''
    },
    ROUTER_MAIN_MODULES: {
        INDEX: '/'
    }
}