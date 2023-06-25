const images =["b.png", "g.png"];
const imageRandom = images[Math.floor(Math.random() * images.length)];
const imageElement = document.createElement("img");

imageElement.src = `src/${imageRandom}`;

imageElement.setAttribute("class", "bgImage");
document.body.appendChild(imageElement);