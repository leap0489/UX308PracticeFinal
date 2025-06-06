import {feetToAcre, fahrenheitToCelsius, hello, lawnTime, airQuality, yeeHa, calculateSlope} from './functions.js';

function Question1(){
    return <section>
1. Write a function that takes a _name_ as an argument and _returns a string_ that _contains "hello"_ and the name paramerer. Test at least 3 names. <br />*Note ... I solved this one already
      <h2>results</h2>
      <p>hello("Rich") == "{hello('Rich')}"</p>
      <p>hello("Bill") == "{hello('Bill')}"</p>
      <p>hello("Chris") == "{hello('Chris')}"</p>
    </section>;
}

function Question2(){
    return <section>
2. Write a function that converts from fahrenheit to celsius.
    <h2>results</h2> 
    <p>fahrenheitToCelsius(32) == "{fahrenheitToCelsius(32)}"</p> 
    <p>fahrenheitToCelsius(212) == "{fahrenheitToCelsius(212)}"</p>   
    <p>fahrenheitToCelsius(70) == "{fahrenheitToCelsius(70)}"</p>     
    </section>
}

function Question2Real(){
    return <section>
2. There are 43,560 square feet per acre. Write a program that converts square feet to acres.
    <h2>results</h2> 
    <p>feetToAcre(2000) == "{feetToAcre(2000)}"</p>
    <p>feetToAcre(13000) == "{feetToAcre(13000)}"</p>   
    <p>feetToAcre(67000) == "{feetToAcre(67000)}"</p>      
    </section>
}

function Question3(){
    return <section>
3. Given the width of a lawn in metres, length of a lawn in metres and the square metres cut per minute calculate the minutes it would take to mow that lawn. 
    <h2>results</h2>    
    <p>lawnTime(40,30,4) == "{lawnTime(40,30,4)}"</p>
    <p>lawnTime(50,50,10) == "{lawnTime(50,50,10)}"</p>
    <p>lawnTime(60,70,2) == "{lawnTime(60,70,2)}"</p>
    </section>
}

function Question4(){
    return <section>
4. Compute the air quality given an air quality index:
    <h2>results</h2>  
    <p>airQuality(40) == "{airQuality(40)}"</p>
    <p>airQuality(57) == "{airQuality(57)}"</p>
    <p>airQuality(130) == "{airQuality(130)}"</p>
    <p>airQuality(158) == "{airQuality(158)}"</p>
    <p>airQuality(230) == "{airQuality(230)}"</p>
    <p>airQuality(345) == "{airQuality(345)}"</p>
    </section>
}

function Question5(){
    return <section>
5. yee_ha takes an integer parameter and returns one of the following strings:
    <h2>results</h2>
    <p>yeeHa(6) == "{yeeHa(6)}"</p>
    <p>yeeHa(14) == "{yeeHa(14)}"</p>
    <p>yeeHa(21) == "{yeeHa(21)}"</p>
    <p>yeeHa(13) == "{yeeHa(13)}"</p>
    </section>
}

function Question6(){
    return <section>
6. Calculate the slope of a line.
    <h2>results</h2>
    <p>calculateSlope(2,13,4,15) == "{calculateSlope(2,13,4,15)}"</p>
    <p>calculateSlope(4,18,5,24) == "{calculateSlope(4,18,5,24)}"</p>
    <p>calculateSlope(12,39,28,83) == "{calculateSlope(12,39,28,83)}"</p>
    </section>
}

export {Question1, Question2, Question2Real, Question3, Question4, Question5, Question6}