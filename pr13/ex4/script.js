const car = document.querySelector("#car");
const directions = {
    left: {
        move: () => {
            if (car.getBoundingClientRect().left - 60>= 0) {
                car.style.left = car.getBoundingClientRect().left - 60 + 'px';
            }
        },
        transform: 'scale(-1) rotate(180deg)',
        moveBack: function() {return directions.right.move()},
        nextDirection: function() {return directions.up},
        prevDirection: function() {return directions.down},
    },
    right: {
        move: () => {
            if (car.getBoundingClientRect().left + 60 + 100 <= document.documentElement.clientWidth) {
                car.style.left = car.getBoundingClientRect().left + 60 + 'px';
            }
        },
        transform: 'scale(-1) rotate(0deg)',
        moveBack: function() {return directions.left.move()},
        nextDirection: function() {return directions.down},
        prevDirection: function() {return directions.up},
    },
    up: {
        move: () => {
            if (car.getBoundingClientRect().top - 60 >= 0) {
                car.style.top = car.getBoundingClientRect().top - 60 + 'px';
            }
        },
        transform: 'scale(-1) rotate(270deg)',
        moveBack: function() {return directions.down.move()},
        nextDirection: function() {return directions.right},
        prevDirection: function() {return directions.left},
    },
    down: {
        move: () => {
            if (car.getBoundingClientRect().top + 60 <= document.documentElement.clientHeight) {
                car.style.top = car.getBoundingClientRect().top + 60 + 'px' ;
            }
        },
        transform: 'scale(-1) rotate(90deg)',
        moveBack: function() {return directions.up.move()},
        nextDirection: function() {return directions.left},
        prevDirection: function() {return directions.right},
    },
}
let direction = directions.right;
document.onkeydown = (event) => {
    switch (event.key) {
        case "ArrowUp" : {
            direction.move();
            break;
        }
        case "ArrowDown" : {
            direction.moveBack();
            break;
        }
        case "ArrowLeft" : {
            direction = direction.prevDirection();
            car.style.transform = direction.transform;
            break;
        }
        case "ArrowRight" : {
            direction = direction.nextDirection();
            car.style.transform = direction.transform;
            break;
        }
    }
}
