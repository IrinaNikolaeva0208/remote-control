"use strict";
exports.__esModule = true;
var ws_1 = require("ws");
var drawFigures_1 = require("../ui_control/drawFigures");
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
    ws.on("message", function (data) {
        var message = data.toString().split(" ");
        switch (message[0]) {
            case "draw_circle":
                drawFigures_1["default"].draw_circle(+message[1]);
                break;
            case "draw_square":
                drawFigures_1["default"].draw_square(+message[1]);
                break;
            case "draw_rectangle":
                drawFigures_1["default"].draw_rectangle(+message[1], +message[2]);
                break;
        }
        ws.send(message.join("_"));
    });
});
