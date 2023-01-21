import {createWebSocketStream, WebSocketServer, WebSocket} from "ws";
import Figure from "../ui_control/drawFigures";
import MousePos from "../ui_control/moveMouse";
import prnt_scrn from "../ui_control/printScreen";

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
    ws.on("message", async data => {
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
            case "mouse_right":
                MousePos.mouse_right(+message[1]);
                break;
            case "mouse_left":
                MousePos.mouse_left(+message[1]);
                break;
            case "mouse_up":
                MousePos.mouse_up(+message[1]);
                break;
            case "mouse_down":
                MousePos.mouse_down(+message[1]);
                break;
            case "mouse_position":
                const pos = await MousePos.mouse_position();
                message.push(`${pos.x},${pos.y}`)
                break;
            case "prnt_scrn":
                const base64str = await prnt_scrn();
                message.push(base64str);
                break;
        }
        
        ws.send(message.join(" "));
    })
    
});

