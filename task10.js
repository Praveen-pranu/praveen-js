function sortDescending(arr) {
    return arr.sort((a, b) => b - a);
}

let array = [5, 2, 9, 1, 5, 6];
let sortedArray = sortDescending(array);

console.log("Sorted array in descending order: ", sortedArray);