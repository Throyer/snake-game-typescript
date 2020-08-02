import { v4 as uuid } from 'uuid';
import Point2D from "./Point2D";

interface Input {
  position?: Point2D;
  width?: number;
  height?: number;
  color: string;
}

export default abstract class GameObject {
  id: string;
  position: Point2D;
  width: number;
  height: number;
  color: string;

  constructor({ position, width, height, color }: Input) {
    this.id = uuid();
    this.position = position ?? { x: 20, y: 20 };
    this.width = width ?? 20;
    this.height = height ?? 20;
    this.color = color;
  }

  abstract update(context?: CanvasRenderingContext2D): void;

  public isIntersect(object: GameObject): boolean {
    return (
      this.position.x < object.position.x + object.width &&
      this.position.x + this.width > object.position.x &&
      this.position.y < object.position.y + object.height &&
      this.position.y + this.height > object.position.y
    );
  }
}
