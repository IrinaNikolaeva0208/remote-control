import {screen, Region, mouse,} from "@nut-tree/nut-js"
import {readFileSync} from "fs"

export default async function prnt_scrn(): Promise<string>{
    try {
        const mousePosition = await mouse.getPosition();
        const screenRegion = new Region(mousePosition.x - 100, mousePosition.y - 100, 200, 200);
        await screen.captureRegion("image.png", screenRegion);
        return readFileSync("image.png", {encoding: "base64"})
    }
    catch (err) {
        return readFileSync("image.png", {encoding: "base64"})
    }
}