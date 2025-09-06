const input = document.getElementById("letter");
input.addEventListener("input", function(event) {
    document.createElement("h1");
    const value = event.target.value;
    if (value !== "") {h1.innerText = value};
    document.body.appendChild(h1);
    event.target.value = "";
});