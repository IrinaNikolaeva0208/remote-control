"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var ws_1 = require("ws");
var drawFigures_1 = require("../ui_control/drawFigures");
var moveMouse_1 = require("../ui_control/moveMouse");
var wss = new ws_1.WebSocketServer({ port: 8080 });
wss.on("connection", function (ws) {
    var wsStream = (0, ws_1.createWebSocketStream)(ws);
    // let message = "";
    // wsStream.on("data", (data) => {
    //     message += data.toString();
    // })
    // wsStream.on("", () => {
    //     console.log(message)
    // });
    ws.on("message", function (data) { return __awaiter(void 0, void 0, void 0, function () {
        var message, _a, pos;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    message = data.toString().split(" ");
                    _a = message[0];
                    switch (_a) {
                        case "draw_circle": return [3 /*break*/, 1];
                        case "draw_square": return [3 /*break*/, 2];
                        case "draw_rectangle": return [3 /*break*/, 3];
                        case "mouse_right": return [3 /*break*/, 4];
                        case "mouse_left": return [3 /*break*/, 5];
                        case "mouse_up": return [3 /*break*/, 6];
                        case "mouse_down": return [3 /*break*/, 7];
                        case "mouse_position": return [3 /*break*/, 8];
                    }
                    return [3 /*break*/, 10];
                case 1:
                    drawFigures_1["default"].draw_circle(+message[1]);
                    return [3 /*break*/, 10];
                case 2:
                    drawFigures_1["default"].draw_square(+message[1]);
                    return [3 /*break*/, 10];
                case 3:
                    drawFigures_1["default"].draw_rectangle(+message[1], +message[2]);
                    return [3 /*break*/, 10];
                case 4:
                    moveMouse_1["default"].mouse_right(+message[1]);
                    return [3 /*break*/, 10];
                case 5:
                    moveMouse_1["default"].mouse_left(+message[1]);
                    return [3 /*break*/, 10];
                case 6:
                    moveMouse_1["default"].mouse_up(+message[1]);
                    return [3 /*break*/, 10];
                case 7:
                    moveMouse_1["default"].mouse_down(+message[1]);
                    return [3 /*break*/, 10];
                case 8: return [4 /*yield*/, moveMouse_1["default"].mouse_position()];
                case 9:
                    pos = _b.sent();
                    message.push("".concat(pos.x, ",").concat(pos.y));
                    return [3 /*break*/, 10];
                case 10:
                    // if(message[0].startsWith("draw")) {
                    //     Figure[message[0]](+message[1], +message[2]);
                    // }
                    // else if (message[0].startsWith("mouse")) {
                    //     MousePos[message[0]]()
                    // }
                    ws.send(message.join(" "));
                    return [2 /*return*/];
            }
        });
    }); });
});
