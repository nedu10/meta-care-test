"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var body_parser_1 = __importDefault(require("body-parser"));
var compression_1 = __importDefault(require("compression"));
var cookie_parser_1 = __importDefault(require("cookie-parser"));
var morgan_1 = __importDefault(require("morgan"));
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./routes"));
var cors = require("cors");
var limiter_1 = require("./middleware/limiter");
require('./config/database');
var logger_1 = __importDefault(require("./logger"));
var redis_connection_1 = require("./redis.connection");
var app = (0, express_1.default)();
(0, redis_connection_1.client)();
var morganFormat = process.env.NODE_ENV !== "production" ? "dev" : "combined";
app.use((0, morgan_1.default)("combined", { stream: { write: logger_1.default.stream } }));
app.use((0, compression_1.default)());
app.use((0, cookie_parser_1.default)());
// initalize passport
app.use(cors({
    origin: '*',
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    optionsSuccessStatus: 200,
    credentials: true // allow session cookie from browser to pass through
}));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(limiter_1.rateLimiter);
app.set("port", process.env.PORT || 3000);
app.use(routes_1.default);
app.use(function (req, res, next) {
    return res.status(404).send({
        status: "Not Found",
        status_code: 404,
    });
});
app.use(function (err, req, res, next) {
    console.log(req.url);
    if (req.url != '/api/auth/login') {
        logger_1.default.info("request>>" + JSON.stringify(req.body));
    }
    if (res.headersSent) {
        return next(err);
    }
    var statusCode = err.statusCode || 500;
    return res.status(statusCode).json({
        status: err.status,
        statusCode: statusCode,
        message: err.message,
        error: process.env.NODE_ENV === "development" ? err : undefined,
    });
});
exports.default = app;
//# sourceMappingURL=app.js.map