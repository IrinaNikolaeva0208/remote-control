import {left, up, down, right, mouse, Button, Point} from "@nut-tree/nut-js"

class Figure {
    static async draw_circle(radius: number) {
        let pointsArray: Point[] = [];
        const startPos = await mouse.getPosition();
        pointsArray.push(startPos);
        for(let i = 0; i < 200; i++) {        
            const previousPos = pointsArray[pointsArray.length - 1];
            let nextPos: Point;
            if (i < 100) {
                const nextX = previousPos.x - startPos.x + radius/50;
                const nextY = startPos.y + Math.sqrt(radius**2 - (nextX - radius)**2);
                nextPos = new Point(previousPos.x + radius/50, nextY)
            }
            else {
                const nextX = previousPos.x - startPos.x - radius/50;
                const nextY = startPos.y - Math.sqrt(radius**2 - (nextX - radius)**2);
                nextPos = new Point(previousPos.x - radius/50, nextY)
            }
            pointsArray.push(nextPos);
        }
        pointsArray.reverse();
        await mouse.pressButton(Button.LEFT);
        await mouse.move(pointsArray);
        await mouse.releaseButton(Button.LEFT);
    }

    static async draw_rectangle(length: number, width: number) {
        await mouse.pressButton(Button.LEFT);
        await mouse.move(right(length));
        await mouse.move(down(width));
        await mouse.move(left(length));
        await mouse.move(up(width));
        await mouse.releaseButton(Button.LEFT);
    }

    static async draw_square(width: number) {
        await mouse.pressButton(Button.LEFT);
        await mouse.move(right(width));
        await mouse.move(down(width));
        await mouse.move(left(width));
        await mouse.move(up(width));
        await mouse.releaseButton(Button.LEFT);
    }
}

export default Figure;