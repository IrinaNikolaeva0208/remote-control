import {createWebSocketStream, WebSocketServer, WebSocket} from "ws";
import Figure from "../ui_control/drawFigures";

const wss = new WebSocketServer({port: 8080});

wss.on("connection", (ws: WebSocket) => {
    const wsStream = createWebSocketStream(ws);
    
    // let message = "";
    // wsStream.on("data", (data) => {
    //     message += data.toString();
    // })
    // wsStream.on("", () => {
    //     console.log(message)
    // });
    ws.on("message", data => {
        const message = data.toString().split(" ");
        switch (message[0]) {
            case "draw_circle":
                Figure.draw_circle(+message[1]);
                break;
            case "draw_square":
                Figure.draw_square(+message[1]);
                break;
            case "draw_rectangle":
                Figure.draw_rectangle(+message[1], +message[2]);
                break;
        }
        
        ws.send(message.join("_"));
    })
    
});

