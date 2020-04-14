function arrays(n) {
    let array1 = [];
    let array2 = [];
    for (let i = 1; i <= n; i++) {
        array1.push(Math.floor(Math.random() * 100));
    }
    array2 = array1.filter((el) => el % 2 == 1)
    console.log(array1.join(', '));
    console.log(array2.join(', '));
}

function insertArray(n) {
    let array1 = [];
    let array2 = [];
    for (let i = 1; i <= n; i++) {
        array1.push(Math.floor(Math.random() * 100));
    }
    inputArray(array1)
    for (let i = 1; i <= n; i++) {
        array2.push(Math.floor(Math.random() * 100));
    }
    inputArray(array2)
    array1 = array1.concat(array2);
    inputArray(array1);
}

function inputArray(array) {
    console.log("Array:")
    array.forEach((el, i) => {
        console.log("el"+i+" = "+el);
    });
}