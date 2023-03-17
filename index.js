let reset = function () {
  const canvas = document.getElementById("canvas");
  const c = canvas.getContext("2d");

  let mouseX;
  let mouseY;

  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  const canvasWidth = canvas.width;
  const canvasHeight = canvas.height;

  const maxRadius = 55;

  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });

  class Circle {
    constructor(xCoordinate, yCoordinate, radius) {
      const randomNumber = Math.floor(Math.random() * 22);
      const randomTrueOrFalse = Math.floor(Math.random() * 4);

      this.xCoordinate = xCoordinate;
      this.yCoordinate = yCoordinate;
      this.radius = radius / 4;
      this.color = colorArray[randomNumber];

      if (randomTrueOrFalse == 1) {
        this.xVelocity = -Math.random() * 0.5;
      } else {
        this.xVelocity = Math.random() * 0.5;
      }

      if (randomTrueOrFalse == 1) {
        this.yVelocity = -Math.random() * 0.5;
      } else {
        this.yVelocity = Math.random() * 0.5;
      }

      this.update = function () {
        this.xCoordinate += this.xVelocity;
        const xDistance = mouseX - this.xCoordinate;
        const yDistance = mouseY - this.yCoordinate;
        const originalRadius = radius / 4;
        this.yCoordinate += this.yVelocity;

        this.draw();
      };

      this.draw = function () {
        c.beginPath();
        c.arc(
          this.xCoordinate,
          this.yCoordinate,
          Math.abs(this.radius),
          0,
          Math.PI * 2
        );
        c.fillStyle = this.color;
        c.fill();
      };
    }
  }

  const colorArray = [
    "rgba(42,38,30, 0.5)",
    "rgba(222,209,153, 0.5)",
    "rgba(168,59,36, 0.5)",
    "rgba(100,71,50, 0.5)",
    "rgba(183,151,102, 0.5)",
    "rgba(235,65,29, 0.5)",
    "rgba(170,160,164, 0.5)",
    "rgba(170,111,109, 0.5)",
    "rgba(57,13,20,0.5)",
    "rgba(119,138,110,0.5)",
    "rgba(216,73,23,0,5)",
    "rgba(232,73,20,0.5)",
    "rgba(235,213,159,0.5)",
    "rgba(16,29,32,0.5)",
    "rgba(224,233,178,0.5)",
    "rgba(226,82,33,0.5)",
    "rgba(247,238,218,0.5)",
    "rgba(121,140,112,0.5)",
    "rgba(217,76,26,0.5)",
    "rgba(229,8,29,0.5)",
    "rgba(144,7,17,0.5)",
  ];
  const myCircle = new Circle(30, 80, 10);
  let circleArray = [];

  for (let i = 0; i < 8000; i++) {
    const randomXCoordinate = Math.random() * canvasWidth;
    const randomYCoordinate = Math.random() * canvasHeight;
    const randomRadius = Math.random() * 5;
    circleArray.push(
      new Circle(randomXCoordinate, randomYCoordinate, randomRadius)
    );
  }

  function updateAll() {
    myCircle.update();
    for (let i = 0; i < circleArray.length; i++) {
      circleArray[i].update();
    }
    window.requestAnimationFrame(updateAll);
  }
  updateAll();
};

document.getElementById("button").addEventListener("click", reset);
