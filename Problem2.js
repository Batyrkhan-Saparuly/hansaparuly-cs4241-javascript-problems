const p2test = {};

p2test.test = function () {
for (let i = 0; i < 20; i++) {
    const block = document.createElement("div");
    const row = document.getElementById("row");
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    while (r === g && g === b) {
      r = Math.floor(Math.random() * 256);
      g = Math.floor(Math.random() * 256);
      b = Math.floor(Math.random() * 256);
    }
    block.style.width = "40px";
    block.style.height = "40px";
    block.style.display = "inline-block"; // single row
    block.style.backgroundColor = `rgb(${r},${g},${b})`;
    row.appendChild(block);
  }
}