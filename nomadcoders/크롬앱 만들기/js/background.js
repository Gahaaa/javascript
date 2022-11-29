const images = ["bg_00.jpg","bg_01.png","bg_02.png","bg_03.png"]

const chosenImage =images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");

bgImage.src = `./img/${chosenImage}`;

document.body.appendChild(bgImage);