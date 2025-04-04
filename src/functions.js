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

export {hello, fahrenheitToCelsius, feetToAcre}