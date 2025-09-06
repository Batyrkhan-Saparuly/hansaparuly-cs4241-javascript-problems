const input = document.getElementById("letter");
input.addEventListener("input", function(event) {
    const h1block = document.createElement("h1");
    const value = event.target.value;
    if (value !== "") {h1block.innerText = value[0]};
    h1letter.appendChild(h1block);
    event.target.value = "";
});
