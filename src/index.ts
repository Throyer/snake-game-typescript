import Engine from "./Engine";
import Snake from "./Snake";
import Food from "./Food";
import terrain from "./config/terrain";

const SNAKE_SPEED = 5;

// init
const engine = new Engine({ width: terrain.width, height: terrain.height });

const snake: Snake = new Snake({ color: "#eb4034" });
let food = new Food({ color: "yellow" });
let count = 0;

// update
engine.update = (context) => {
  snake.update(context);
  if (++count === SNAKE_SPEED) {
    count = 0;
    snake.move(context);
    if (snake.isIntersect(food)) {
      snake.increase();  
      food.changePosition(context); 
    }
  }
  food.update(context);
};

// keyhandler
document.addEventListener("keydown", ({ key }) => {
  snake.direction(key);
});

engine.start();