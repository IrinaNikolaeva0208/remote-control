import {screen, Region, mouse,} from "@nut-tree/nut-js"
import {readFileSync} from "fs"
import { resolve } from "path";
import Jimp from "jimp"

const errorPath = resolve("src", "ui_control", "assets", "out_of_screen.png");

export default async function prnt_scrn(): Promise<string>{ 
   try {
        const mousePosition = await mouse.getPosition();
        const screenRegion = new Region(mousePosition.x - 100, mousePosition.y - 100, 200, 200);
        const imageBuffer = await (await screen.grabRegion(screenRegion)).toRGB();
        const jimpImg = new Jimp({data: imageBuffer.data, width: imageBuffer.width, height: imageBuffer.height}, ()=>{});
        const jimpBuf = await jimpImg.getBufferAsync(Jimp.MIME_PNG);
        return jimpBuf.toString("base64");
   }
    catch (err) {
        return readFileSync(errorPath, {encoding: "base64"})
    }
}