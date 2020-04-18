const cat = document.querySelector(".cat");
cat.ondragstart = (event) => {
    cat.style.top = event.pageY - cat.offsetHeight / 2 + 'px';
    cat.style.left = event.pageX - cat.offsetWidth / 2 + 'px';
    cat.ondrag = (event) => {
        if (event.pageX != 0 && event.pageY != 0) {
            cat.style.top = event.pageY - cat.offsetHeight / 2 + 'px';
            cat.style.left = event.pageX - cat.offsetWidth / 2 + 'px';
        }
    }
}

document.onwheel = (event) => {
    if (event.deltaY < 0) {
        cat.style.width = cat.offsetWidth * 1.1 + "px"; 
    }
    else {
        cat.style.width = cat.offsetWidth * 0.9 + 'px'; 
    }
}