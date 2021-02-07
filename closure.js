function stopWatch() {
    let count = 0;
    return function() {
        count ++;
        return count;
    }
}

const watchOne = stopWatch();
console.log(watchOne());
console.log(watchOne());
console.log(watchOne());
console.log(watchOne());


const watchTwo = stopWatch();
console.log(watchTwo());
console.log(watchTwo());
console.log(watchTwo());


console.log(watchOne());