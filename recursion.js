const sumTo = num => {
    return num === 1 ? 1 : num + sumTo(num - 1)
}



console.log(sumTo(5));