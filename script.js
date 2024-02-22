"use strict";

async function updateBkgdColor(color, time) {
  await delay(time); // this will take 5 seconds to change the background to different colors.
  document.body.style.backgroundColor = color;
}
function delay(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

updateBkgdColor("blue", 5000);
updateBkgdColor("green", 10000);
updateBkgdColor("red", 15000);
