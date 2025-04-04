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

function airQuality(quality){
    let description;
    if (quality > 0 && quality < 50){
        description = "Good";
    }else if (quality > 51 && quality < 100){
        description = "Moderate";
    }else if (quality > 101 && quality < 150){
        description = "Unhealthy for Sensitive Groups";
    }else if (quality > 151 && quality < 200){
        description = "Unhealthy";
    }else if (quality > 201 && quality < 300){
        description = "Very Unhealthy";
    }else if (quality > 300)
        description = "Hazardous";
    return description;
}


export {hello, fahrenheitToCelsius, feetToAcre, lawnTime, airQuality}