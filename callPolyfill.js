const actions = {
    getFavFood: function (name) { 
        console.log(`${name}'s favorite food is ${this.food} and it costs around ${this.price} `);
    }
}


const printFavFood = {
    food: 'Pongal',
    price: 60
}

// actions.getFavFood.call(printFavFood, 'praveen');

Function.prototype.myCall = function(context, ...args) {
    console.log('i am called')
    this.bind(context, args.join(','))();
}

actions.getFavFood.myCall(printFavFood, 'praveen');