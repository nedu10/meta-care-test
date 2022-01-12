"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var winston_1 = __importDefault(require("winston"));
var dotenv_1 = __importDefault(require("dotenv"));
var split_1 = __importDefault(require("split"));
dotenv_1.default.config();
var winston_elasticsearch_1 = require("winston-elasticsearch");
var esTransportOpts = {
    level: 'info',
    dataStream: true,
    clientOpts: { node: process.env.ELASTICSEARCH_URL }
};
var esTransport = new winston_elasticsearch_1.ElasticsearchTransport(esTransportOpts);
var colors = {
    error: 'red',
    warn: 'yellow',
    info: 'green',
    http: 'magenta',
    debug: 'white',
};
winston_1.default.addColors(colors);
var logConfiguration = {
    transports: [
        new winston_1.default.transports.Console({
            level: 'debug',
            handleExceptions: true,
            // json: false,
            // colorize: true,
        }),
        new winston_1.default.transports.File({
            level: 'info',
            filename: "logs/logfile",
            handleExceptions: true,
            // json: true,
            maxsize: 5242880,
            maxFiles: 5,
            // colorize: true
        }),
        esTransport
    ],
    format: winston_1.default.format.combine(winston_1.default.format.label({
        label: "Request\uD83C\uDFF7\uFE0F"
    }), winston_1.default.format.timestamp({
        format: 'MMM-DD-YYYY HH:mm:ss'
    }), winston_1.default.format.printf(function (info) { return info.level + ": " + info.label + ": " + [info.timestamp] + ": " + info.message; }))
};
var logger = winston_1.default.createLogger(logConfiguration);
// logger.stream = {
//   write: function(message: string) {
//     // use the 'info' log level so the output will be picked up by both transports (file and console)
//     logger.info(message);
//   },
// };
logger.stream = (0, split_1.default)().on('data', function (message) {
    logger.info(message);
});
exports.default = logger;
//# sourceMappingURL=logger.js.map