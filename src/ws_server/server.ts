import {createWebSocketStream, WebSocketServer, WebSocket} from "ws";
import handleMessage from "./handleMessage";
import * as dotenv from "dotenv";
import { fork } from "child_process";

dotenv.config({path: __dirname + "/.env"});
const PORT = process.env.PORT || 8080

const wss = new WebSocketServer({port: +PORT});
fork("index.mjs");

wss.on("connection", (ws: WebSocket) => {
    
    console.log(`Start WebSocket server on the ${PORT} port`);

    const wsStream = createWebSocketStream(ws, {decodeStrings: false});
    wsStream.on("data", async (data) => {
        let message = data.toString().split(" ");
        message = await handleMessage(message);
        wsStream.write(message.join(" "));
    });
    
});

process.on("SIGINT", () => {
    process.exit();
})

