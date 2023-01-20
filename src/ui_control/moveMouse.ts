import {mouse, up, down, left, right} from "@nut-tree/nut-js"

class MousePos {
    static async mouse_up(px: number) {
        await mouse.move(up(px))
    }

    static async mouse_down(px: number) {
        await mouse.move(down(px))
    }

    static async mouse_left(px: number) {
        await mouse.move(left(px))
    }

    static async mouse_right(px: number) {
        await mouse.move(right(px))
    }

    static async mouse_position() {
        const pos = await mouse.getPosition();
        return pos;
    }
}

export default MousePos;