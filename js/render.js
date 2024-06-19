const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const image = document.getElementById("resources");

image.addEventListener("load", (e) => {
  ctx.drawImage(player, 100, 100);
});
