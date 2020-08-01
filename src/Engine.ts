export default class Engine {
  public update: (context: CanvasRenderingContext2D) => void;
  public canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;
  constructor({
    canvasId,
    width,
    height,
  }: {
    canvasId?: string;
    width: number;
    height: number;
  }) {
    const canvas = document.getElementById(canvasId) as HTMLCanvasElement;
    if (canvas) {
      this.canvas = canvas;
    } else {
      const element = document.createElement("canvas");
      document.body.appendChild(element);
      this.canvas = element;
    }

    this.context = this.canvas.getContext("2d");
    this.canvas.width = width;
    this.canvas.height = height;
  }

  public start(): void {
    this.loop();
  }

  private loop(): void {
    if (this.update) {
      this.clearContext(this.context);
      this.update(this.context);
    }
    requestAnimationFrame(this.loop.bind(this));
  }

  private clearContext(context: CanvasRenderingContext2D): void {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.context.fillStyle = "#000";
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }
}
