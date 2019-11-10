import { Word } from "../../Word";

export enum Position {
    Left = "left",
    Right = "right",
    Middle = "middle",
}

export function positionFromNumber(n: number): Position {
    switch (n) {
        case 0:
            return Position.Left;
        case 1:
            return Position.Right
        default:
            return Position.Middle;
    }
}

export interface Asteroid {
    id: number
    word: Word
    speed: number
    position: Position
}