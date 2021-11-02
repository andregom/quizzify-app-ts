"use strict";
exports.__esModule = true;
// @ts-nocheck
var electron_1 = require("electron");
var electronmon_1 = require("electronmon");
var main_1 = require("./main");
main_1["default"].main(electron_1.app, electron_1.BrowserWindow, electronmon_1["default"]);
