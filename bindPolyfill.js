const superHero = {
    name: 'Batman',
    movie: 'The Dark Knight'
}

const superHero2 = {
    name: 'Thor',
    movie: 'Avengers'
}

const printSuperHero = function(movieIndustry, productionBanner) {
   console.log( `Hey i am ${this.name} casted in ${this.movie}, a ${movieIndustry} movie under the banner ${productionBanner}`);
}

Function.prototype.myBind = function(obj, ...args) {
    const currentFunc = this;
    return function(...methodArgs) {
        console.log(methodArgs);
        currentFunc.apply(obj, [...args, ...methodArgs]);
    }
}

const batman = printSuperHero.myBind(superHero, 'Hollywood');
batman('DC comics');

const thor = printSuperHero.bind(superHero2, 'Hollywood');
thor('Marvels');
