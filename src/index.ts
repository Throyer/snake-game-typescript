import Engine from "./Engine";
import Snake from "./Snake";
import Food from "./Food";
import terrain from "./config/terrain";

// init
const engine = new Engine({ width: terrain.width, height: terrain.height });

const snake: Snake = new Snake({ color: "#eb4034" });
let food = new Food({ color: "yellow" });
let fps = 0;

// update
engine.update = (context) => {
  snake.update(context);
  if (++fps === 25) {
    fps = 0;
    snake.move(context);
  }
  food.update(context);
};

// keyhandler
document.addEventListener("keydown", ({ key }) => {
  snake.direction(key);
});

engine.start();