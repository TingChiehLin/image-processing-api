"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var logger = function (req, res, next) {
    var url = req.url;
    next();
};
exports.default = logger;
