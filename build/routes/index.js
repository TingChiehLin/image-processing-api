"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var imageProcess_1 = __importDefault(require("./imageProcess"));
var imageProcessAll_1 = __importDefault(require("./imageProcessAll"));
var logger_1 = __importDefault(require("../utilities/logger"));
var path_1 = __importDefault(require("path"));
var routes = express_1.default.Router();
//To create other Routes for middleware
routes.use('/image-process', imageProcess_1.default);
routes.use('/image-process-all', imageProcessAll_1.default);
//endPoints
routes.get('/', logger_1.default, function (req, res, next) {
    res.sendFile(path_1.default.join(__dirname, '../', 'views', 'Home.html'));
});
exports.default = routes;
