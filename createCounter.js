function createCounter() {
    // Private variable
    let count = 0;

    return {
        increment: function () {
            count++;
            console.log("Current count:", count);
        },
        decrement: function () {
            count--;
            console.log("Current count:", count);
        }
    };
}


