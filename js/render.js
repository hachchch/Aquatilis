const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const image = document.getElementById("resources");

image.addEventListener("load", (e) => {
  ctx.drawImage(player, 100, 100);
});

// Moved square
ctx.translate(110, 30);
ctx.fillStyle = "red";
ctx.fillRect(0, 0, 80, 80);

// Reset current transformation matrix to the identity matrix
ctx.setTransform(1, 0, 0, 1, 0, 0);

// Unmoved square
ctx.fillStyle = "gray";
ctx.fillRect(0, 0, 80, 80);
