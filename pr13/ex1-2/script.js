function randColor() {
    var r = Math.floor(Math.random() * (256)),
        g = Math.floor(Math.random() * (256)),
        b = Math.floor(Math.random() * (256));
    return '#' + r.toString(16) + g.toString(16) + b.toString(16);
}

document.onkeydown = (event) => {
    switch (event.keyCode) {
        case 13: {
            console.log("Enter");
            document.documentElement.style.backgroundColor = randColor();
            break;
        }
        case 27: {
            console.log("Esc");
            break;
        }
        case 18: {
            console.log("Alt");
            break;
        }
        case 17: {
            console.log("Ctrl");
            break;
        }
        case 16: {
            console.log("Shift");
            break;
        }
        default: {
            console.log(event);
        }
    }
    switch (event.key) {
        case "ArrowUp": {
            document.querySelector(".arrow-up").style.backgroundColor = randColor();
            break;
        }
        case "ArrowLeft": {
            document.querySelector(".arrow-left").style.backgroundColor = randColor();
            break;
        }
        case "ArrowDown": {
            document.querySelector(".arrow-down").style.backgroundColor = randColor();
            break;
        }
        case "ArrowRight": {
            document.querySelector(".arrow-right").style.backgroundColor = randColor();
            break;
        }
    }
}