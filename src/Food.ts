import GameObject from "./GameObject";

export default class Food extends GameObject {
  private tileSize: number = 20;

  update(context: CanvasRenderingContext2D): void {
    context.fillStyle = this.color;
    context.fillRect(this.position.x, this.position.y, this.tileSize, this.tileSize);
  }
}
