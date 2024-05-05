import React from 'react';
import Matter from 'matter-js';
import { createCanvas } from 'p5';

const CanvasAnimation = () => {

    const engine = Matter.Engine;
    const world = Matter.World;
    const bodies = Matter.Bodies;
    const matterBody = Matter.Body;

    let engineInit;
    let items = [];
    let lastMouseX = -1;
    let lastMouseY = -1;

    function setup() {
        createCanvas(window.innerWidth, window.innerHeight);
        engineInit = engine.create();
        engineInit.world.gravity.y = 0;

        addBoundaries();

        for (let i = 0; i < 5; i++) {
            let x = random(100, width - 100);
            let y = random(100, height - 100);
            items.push(new Item(x, y, `../assests/heroSection/img${i + 1}.jpg`))
        }

    }

    function addBoundaries() {
        const thickness = 50;
        world.add(engineInit.world, [
            bodies.rectangle(width / 2, -thickness / 2, width, thickness, { isStatic: true, }),
            bodies.rectangle(width / 2, -thickness / 2, width, thickness, { isStatic: true, }),
            bodies.rectangle(-thickness / 2, height / 2, thickness, height, { isStatic: true, }),
            bodies.rectangle(width + thickness / 2, height / 2, thickness, height, { isStatic: true, }),

        ]);
    }

    function draw() {
        background("black");
        engine.update(engineInit);
        items.forEach((item) => item.update());
    }

    class Item {
        constructor(x, y, imagePath) {
            let options = {
                frictionAir: 0.075,
                restitution: 0.25,
                density: 0.002,
                angle: Math.random() * Math.PI * 2,
            };

            this.matterBody = bodies.rectangle(x, y, 100, 200, options);
            world.add(engineInit.world, this.matterBody);

            this.div = document.createElement("div");
            this.div.style.left = `${this.body.position.x - 50}px`;
            this.div.style.top = `${this.body.position.y - 100}px`;
            const img = document.createElement("img");
            img.src = imagePath;
            this.div.appendChild(img);
            document.body.appendChild(this.div);

        }

        update() {
            this.div.style.left = `${this.body.position.x - 50}px`;
            this.div.style.top = `${this.body.position.y - 100}px`;
            this.div.style.transform = `rotate(${this.body.angle}rad)`
        }
    }

    setup();

    return (
        <div id='header' className='text-white text-3xl'>CanvasAnimation</div>
    )
}

export default CanvasAnimation; 