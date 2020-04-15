//1
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

//2
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
    inputArray(array2.concat(array1));
    inputArray(array1.concat(array2));
    inputArray(array1.slice(0, Math.floor(array1.length / 2)).concat(array2, array1.slice(-1 * Math.floor(array1.length / 2))));
}

function inputArray(array) {
    console.log("Array:")
    array.forEach((el, i) => {
        console.log("i["+(i+1)+"] = "+el);
    });
}

//3
function deletePartOfArray(n) {
    let array1 = [];
    for (let i = 1; i <= 13; i++) {
        array1.push(Math.floor(Math.random() * 100));
    }
    console.log("Start array: " + array1.join(", "));
    console.log(array1.slice(n).join(", "));
    console.log(array1.slice(-0, -n).join(", "));
    console.log(
        array1.slice(
            0, 
            Math.floor(array1.length / 2) - Math.floor(n / 2)
        ).concat(array1.slice(Math.floor(array1.length / 2) + Math.ceil(n / 2))).join(", ")
    );
}

//4
function sort(array) {
    console.log((array.sort((el1, el2) => {
        if (el1 > el2) return 1
        else if (el1 < el2) return -1
        else return 0
    })).join(", "))
    console.log((array.sort((el1, el2) => {
        if (el1 > el2) return -1
        else if (el1 < el2) return 1
        else return 0
    })).join(", "))
}
//5
function sortString(array) {
    console.log((array.sort((el1, el2) => {
        if (el1.toLowerCase() > el2.toLowerCase()) return 1
        else if (el1.toLowerCase() < el2.toLowerCase()) return -1
        else return 0
    })).join(", "))
}