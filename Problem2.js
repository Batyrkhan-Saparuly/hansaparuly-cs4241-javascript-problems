const p2test = {};

p2test.test = function () {
for (i = 0; i < 20; i++) {
    const block = document.createElement("div");
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    block.style.width = "40px";
    block.style.height = "40px";
    block.style.display = "inline-block"; // single row
    block.style.backgroundColor = `rgb(${r},${g},${b})`;
  }
}