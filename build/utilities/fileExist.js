"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
function fileExist(path) {
    try {
        fs_1.default.accessSync(path);
        return true;
    }
    catch (errror) {
        return false;
    }
}
exports.default = fileExist;
