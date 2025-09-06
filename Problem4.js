const btnfour = document.getElementById("btnfour");
btnfour.addEventListener("click", function swap(event) {
    oldBtn = event.currentTarget;
    oldBtn.remove();
    const newBtn = document.createElement("button");
    newBtn.type = "button";
    function randomLabel () {
        return "btn-" + Math.random().toString(16).slice(2,6);
    }
    newBtn.textContent = randomLabel();
    newBtn.addEventListener("click", swap);
});