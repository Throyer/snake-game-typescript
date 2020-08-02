import GameObject from "./GameObject";

export default class Snake extends GameObject {
  private tileSize: number = 20;
  private dir: (snake: Snake) => void = (snake) =>
    (snake.position.x += snake.tileSize);

  private next: Snake;
  private previous: Snake;

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

  increase() {
    const snake = this.findLast(this);
    const { x, y } = this.position;
    snake.next = new Snake({ color: this.color, position: { x, y } })
  }

  findLast(snake: Snake) {
    if (snake.next) {
      snake.next.previous = snake;
      return this.findLast(snake.next);
    } else {
      return snake;
    }
  }
}
