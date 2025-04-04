function hello(name){
    return(`hello ${name}`);
}

function fahrenheitToCelsius(fahrenheit){
    const celsius = (fahrenheit - 32) * (5/9);
    return celsius
}

function feetToAcre(feet){
    const Acre = (feet/433560);
    return Acre
}

function lawnTime(width, length, rate){
    const minutes = (width*length)/rate;
    return minutes;
}

export {hello, fahrenheitToCelsius, feetToAcre, lawnTime}