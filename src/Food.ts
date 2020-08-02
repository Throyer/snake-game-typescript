import GameObject from "./GameObject";
import { randomBetween } from "./uitls/random";

export default class Food extends GameObject {
  private tileSize: number = 20;

  update(context: CanvasRenderingContext2D): void {
    context.fillStyle = this.color;
    context.fillRect(
      this.position.x,
      this.position.y,
      this.tileSize,
      this.tileSize
    );
  }

  changePosition(context: CanvasRenderingContext2D): void {
    const MARGIN = 25;
    const { width, height } = context.canvas;
    const x = randomBetween(MARGIN, width - MARGIN);
    const y = randomBetween(MARGIN, height - MARGIN);
    this.position = { x, y };
  }
}
