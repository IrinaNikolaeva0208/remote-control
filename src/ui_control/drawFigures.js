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
var nut_js_1 = require("@nut-tree/nut-js");
var Figure = /** @class */ (function () {
    function Figure() {
    }
    Figure.draw_circle = function (radius) {
        return __awaiter(this, void 0, void 0, function () {
            var pointsArray, startPos, i, previousPos, nextPos, nextX, nextY, nextX, nextY;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        pointsArray = [];
                        return [4 /*yield*/, nut_js_1.mouse.getPosition()];
                    case 1:
                        startPos = _a.sent();
                        pointsArray.push(startPos);
                        for (i = 0; i < 800; i++) {
                            previousPos = pointsArray[pointsArray.length - 1];
                            nextPos = void 0;
                            if (i < 400) {
                                nextX = previousPos.x - startPos.x + radius / 200;
                                nextY = startPos.y + Math.sqrt(Math.pow(radius, 2) - Math.pow((nextX - radius), 2));
                                nextPos = new nut_js_1.Point(previousPos.x + radius / 200, nextY);
                            }
                            else {
                                nextX = previousPos.x - startPos.x - radius / 200;
                                nextY = startPos.y - Math.sqrt(Math.pow(radius, 2) - Math.pow((nextX - radius), 2));
                                nextPos = new nut_js_1.Point(previousPos.x - radius / 200, nextY);
                            }
                            pointsArray.push(nextPos);
                        }
                        pointsArray.reverse();
                        return [4 /*yield*/, nut_js_1.mouse.pressButton(nut_js_1.Button.LEFT)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, nut_js_1.mouse.move(pointsArray)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, nut_js_1.mouse.releaseButton(nut_js_1.Button.LEFT)];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Figure.draw_rectangle = function (length, width) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, nut_js_1.mouse.pressButton(nut_js_1.Button.LEFT)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, nut_js_1.mouse.move((0, nut_js_1.right)(length))];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, nut_js_1.mouse.move((0, nut_js_1.down)(width))];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, nut_js_1.mouse.move((0, nut_js_1.left)(length))];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, nut_js_1.mouse.move((0, nut_js_1.up)(width))];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, nut_js_1.mouse.releaseButton(nut_js_1.Button.LEFT)];
                    case 6:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Figure.draw_square = function (width) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, nut_js_1.mouse.pressButton(nut_js_1.Button.LEFT)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, nut_js_1.mouse.move((0, nut_js_1.right)(width))];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, nut_js_1.mouse.move((0, nut_js_1.down)(width))];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, nut_js_1.mouse.move((0, nut_js_1.left)(width))];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, nut_js_1.mouse.move((0, nut_js_1.up)(width))];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, nut_js_1.mouse.releaseButton(nut_js_1.Button.LEFT)];
                    case 6:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return Figure;
}());
exports["default"] = Figure;
