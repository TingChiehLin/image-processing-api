"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
var express_1 = __importDefault(require("express"));
var index_1 = __importDefault(require("./routes/index"));
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
exports.app = express_1.default();
var port = 3002;
var dir = './thumb';
if (!fs_1.default.existsSync(dir)) {
    fs_1.default.mkdirSync(dir);
}
exports.app.use(express_1.default.static('public'));
//Use middleware by use from routes
exports.app.use('/', index_1.default);
//404 Not Found Page
exports.app.use(function (req, res) {
    res.status(404).sendFile(path_1.default.join(__dirname, 'views', '404.html'));
});
//start the Express server
exports.app.listen(port, function () {
    console.log("Server is working. Port is " + port);
});
