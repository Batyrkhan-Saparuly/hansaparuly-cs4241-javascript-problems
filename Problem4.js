const btnfour = document.getElementById("btnfour");
btnfour.style.width = "40px";
btnfour.style.height = "40px";
btnfour.addEventListener("click", function swap(event) {
    const oldBtn = event.currentTarget;
    const newBtn = document.createElement("button");
    newBtn.type = "button";
    newBtn.style.width = "40px";
    newBtn.style.height = "40px";
    function randomLabel () {
        return "btn-" + Math.random().toString(16).slice(2,6);
    }
    newBtn.textContent = randomLabel();
    newBtn.addEventListener("click", swap);
    oldBtn.replaceWith(newBtn);
});