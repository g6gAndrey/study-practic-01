document.documentElement.addEventListener("mousemove", (event) => {
    console.log("Относительно страницы: x = " + event.clientX + " y = " + event.clientY)
})
document.querySelectorAll(".block").forEach(((block, index) => {
    block.addEventListener("mousemove", (event) => {
        console.clear();
        console.log("Относительно блока " + (index + 1) + ": x = " + event.offsetX + " y = " + event.offsetY)
        block.textContent = "x = " + event.offsetX + " y = " + event.offsetY;
        block.addEventListener("mouseout", () => {
            block.textContent = "Блок" + (index + 1);
        })
    })
}))
document.addEventListener("keydown", (event) => {
    if (event.key == "ArrowLeft") document.querySelector(".block").style.backgroundColor = "indianred"
    else if (event.key == "ArrowRight") document.querySelector(".block").style.backgroundColor = "lightyellow"
})