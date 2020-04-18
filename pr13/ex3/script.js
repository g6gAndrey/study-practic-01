const car = document.querySelector("#car");
document.onkeydown = (event) => {
    switch (event.key) {
        case "ArrowUp": {
            if (car.getBoundingClientRect().top - 20 >= 0) {
                car.style.top = car.getBoundingClientRect().top - 20 + 'px';
            }
            break;
        }
        case "ArrowDown": {
            if (car.getBoundingClientRect().top + 20 + 50 <= document.documentElement.clientHeight) {
                car.style.top = car.getBoundingClientRect().top + 20 + 'px';
            }
            break;
        }
        case "ArrowLeft": {
            if (car.getBoundingClientRect().left - 20 >= 0) {
                car.style.left = car.getBoundingClientRect().left - 20 + 'px';
            }
            break;
        }
        case "ArrowRight": {
            if (car.getBoundingClientRect().left + 20 + 100 <= document.documentElement.clientWidth) {
                car.style.left = car.getBoundingClientRect().left + 20 + 'px';
            }
            break;
        }
    }
}
