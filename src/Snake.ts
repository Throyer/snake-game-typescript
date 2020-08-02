import GameObject from "./GameObject";

export default class Snake extends GameObject {
  private tileSize: number = 20;
  private dir: (snake: Snake) => void = (snake) =>
    (snake.position.x += snake.tileSize);

  update(context?: CanvasRenderingContext2D): void {
    context.fillStyle = this.color;
    context.fillRect(
      this.position.x,
      this.position.y,
      this.tileSize,
      this.tileSize
    );
  }

  move(context: CanvasRenderingContext2D): void {
    this.dir(this);

    if (this.position.x >= context.canvas.width) {
      this.position.x = 0;
    } else if (this.position.x < -1) {
      this.position.x = context.canvas.width;
    } else if (this.position.y < -1) {
      this.position.y = context.canvas.height;
    } else if (this.position.y > context.canvas.height) {
      this.position.y = 0;
    }
  }

  direction(key: string) {
    if (key === "a" || key.replace("Arrow", "") === "Left") {
      this.dir = (snake) => (snake.position.x -= snake.tileSize);
    }

    if (key === "s" || key.replace("Arrow", "") === "Down") {
      this.dir = (snake) => (snake.position.y += snake.tileSize);
    }

    if (key === "d" || key.replace("Arrow", "") === "Right") {
      this.dir = (snake) => (snake.position.x += snake.tileSize);
    }

    if (key === "w" || key.replace("Arrow", "") === "Up") {
      this.dir = (snake) => (snake.position.y -= snake.tileSize);
    }
  }

  increase(): void {
    console.log("novo corpinho");
    
  }
}
