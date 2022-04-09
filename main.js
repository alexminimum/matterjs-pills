let starN = 2;
let dotN = 1;
let smileN = 2;
let aprendizajeN = 4;
let innovacionN = 3;
let comunidadN = 4;
let fundacionN = 1;

let starI =
  "https://uploads-ssl.webflow.com/62455c11c0e6cfa2d44856a7/624ebb1abfef71e9feaf27fc_star-pill.png";
let dotI =
  "https://uploads-ssl.webflow.com/62455c11c0e6cfa2d44856a7/624ebb1a17266bd29bf1b7a6_dot-pill.png";
let smileI =
  "https://uploads-ssl.webflow.com/62455c11c0e6cfa2d44856a7/624ebb1af215a516963147ee_smile-pill.png";
let aprendizajeI =
  "https://uploads-ssl.webflow.com/62455c11c0e6cfa2d44856a7/624ebb1a770d706838e7aaae_aprendizaje-pill.png";
let innovacionI =
  "https://uploads-ssl.webflow.com/62455c11c0e6cfa2d44856a7/624ebb1a9582869e27688ed5_innovacion-pill.png";
let comunidadI =
  "https://uploads-ssl.webflow.com/62455c11c0e6cfa2d44856a7/624eb11137122dfaa3cc0eec_comunidad.png";
let fundacionI =
  "https://uploads-ssl.webflow.com/62455c11c0e6cfa2d44856a7/624ebb1bf64f4d48d16b973d_fundacion-pill.png";

let wideScreen = window.matchMedia("(min-width: 1441px)").matches;

if (wideScreen) {
  starN++;
  dotN++;
  smileN++;
  aprendizajeN++;
  innovacionN++;
  comunidadN++;
  fundacionN++;
}

var velocity = {
  x: 0,
  y: 0,
};

const updateValues = ({ position }) => {
  if (position.changed) {
    velocity = position.velocity;
  }
};

tornis.watchViewport(updateValues);

let Engine = Matter.Engine,
  Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies,
  Events = Matter.Events,
  MouseConstraint = Matter.MouseConstraint,
  Mouse = Matter.Mouse;

let engine = Engine.create();
let element = document.querySelector('[js="matter-pills"]');

function init() {
  //TODO: remove canvas node with ES6
  $("[js='matter-pills'] canvas").remove();

  let elRect = element.getBoundingClientRect();
  let width = elRect.width;
  let height = elRect.height;

  engine.events = {};
  World.clear(engine.world);
  Engine.clear(engine);

  engine = Engine.create();

  let render = Render.create({
    element: element,
    engine: engine,
    options: {
      wireframes: false,
      background: "transparent",
    //   background: "#0c0c0c",
      width: width,
      height: height,
    },
  });

  // if wide screen add "impediments" for pills
  if (wideScreen) {
    World.add(engine.world, [
      //impediments
      Bodies.rectangle(width * 0.25, -10, 1, 1, {
        isStatic: true,
        render: {
          fillStyle: "transparent",
        },
      }),
      Bodies.rectangle(width * 0.75, -10, 1, 1, {
        isStatic: true,
        render: {
          fillStyle: "transparent",
        },
      }),
    ]);
  }

  // world constrains
  World.add(engine.world, [
    //bottom
    Bodies.rectangle(width / 2, height + 50, width + 200, 100, {
      isStatic: true,
      render: {
        fillStyle: "green",
      },
    }),
    //top
    Bodies.rectangle(width / 2, -210, width, 100, {
      isStatic: true,
      render: {
        fillStyle: "blue",
      },
    }),
    //left
    Bodies.rectangle(-100, height / 2, 100, height + 400, {
      isStatic: true,
      render: {
        fillStyle: "orange",
      },
    }),
    //right
    Bodies.rectangle(width + 100, height / 2, 100, height + 400, {
      isStatic: true,
      render: {
        fillStyle: "pruple",
      },
    }),
  ]);

  // smile pill
  for (let i = 1; i <= smileN; i++) {
    World.add(
      engine.world,
      Bodies.rectangle(Math.random() * width, -200, 51, 41, {
        chamfer: {
          radius: 24,
        },
        render: {
          sprite: {
            texture: smileI,
            xScale: 0.5,
            yScale: 0.5,
          },
        },
      })
    );
  }
  // star pill
  for (let i = 1; i <= starN; i++) {
    World.add(
      engine.world,
      Bodies.rectangle(Math.random() * width, -150, 56, 41, {
        chamfer: {
          radius: 24,
        },
        render: {
          sprite: {
            texture: starI,
            xScale: 0.5,
            yScale: 0.5,
          },
        },
      })
    );
  }
  // dot pill
  for (let i = 1; i <= dotN; i++) {
    World.add(
      engine.world,
      Bodies.rectangle(Math.random() * width, -100, 54, 41, {
        chamfer: {
          radius: 24,
        },
        render: {
          sprite: {
            texture: dotI,
            xScale: 0.5,
            yScale: 0.5,
          },
        },
      })
    );
  }
  // apendizadje
  for (let i = 1; i <= aprendizajeN; i++) {
    World.add(
      engine.world,
      Bodies.rectangle(Math.random() * width, -200, 166, 48, {
        chamfer: {
          radius: 24,
        },
        render: {
          sprite: {
            texture: aprendizajeI,
            xScale: 0.5,
            yScale: 0.5,
          },
        },
      })
    );
  }
  // fundacion
  for (let i = 1; i <= fundacionN; i++) {
    World.add(
      engine.world,
      Bodies.rectangle(Math.random() * width, -200, 151, 48, {
        chamfer: {
          radius: 24,
        },
        render: {
          sprite: {
            texture: fundacionI,
            xScale: 0.5,
            yScale: 0.5,
          },
        },
      })
    );
  }
  // innovacion
  for (let i = 1; i <= innovacionN; i++) {
    World.add(
      engine.world,
      Bodies.rectangle(Math.random() * width, -200, 155, 48, {
        chamfer: {
          radius: 24,
        },
        render: {
          sprite: {
            texture: innovacionI,
            xScale: 0.5,
            yScale: 0.5,
          },
        },
      })
    );
  }
  // comunidad
  for (let i = 1; i <= comunidadN; i++) {
    World.add(
      engine.world,
      Bodies.rectangle(Math.random() * width, -200, 164, 48, {
        chamfer: {
          radius: 24,
        },
        render: {
          sprite: {
            texture: comunidadI,
            xScale: 0.5,
            yScale: 0.5,
          },
        },
      })
    );
  }

  // mouse control
  var mouse = Mouse.create(render.canvas),
    mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    });

  World.add(engine.world, mouseConstraint);

  render.mouse = mouse;

  mouse.element.removeEventListener("mousewheel", mouse.mousewheel);
  mouse.element.removeEventListener("DOMMouseScroll", mouse.mousewheel);

  Engine.run(engine);

  Render.run(render);

  function update() {
    engine.world.gravity.x = velocity.x / 2;
    engine.world.gravity.y = velocity.y + 1;
    idRAF = requestAnimationFrame(update.bind(this));
  }
  update();
}

init();

/* Window resize */
var rtime;
var timeout = false;
var delta = 200;

window.addEventListener(
  "resize",
  function (event) {
    rtime = new Date();
    if (timeout === false) {
      timeout = true;
      setTimeout(resizeend, delta);
    }
  },
  true
);

function resizeend() {
  if (new Date() - rtime < delta) {
    setTimeout(resizeend, delta);
  } else {
    timeout = false;
    init();
  }
}
