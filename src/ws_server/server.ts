import {createWebSocketStream, WebSocketServer, WebSocket} from "ws";
import Figure from "../ui_control/drawFigures";
import MousePos from "../ui_control/moveMouse";

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
        }
        // if(message[0].startsWith("draw")) {
        //     Figure[message[0]](+message[1], +message[2]);
        // }
        // else if (message[0].startsWith("mouse")) {
        //     MousePos[message[0]]()
        // }
        
        ws.send(message.join(" "));
    })
    
});

