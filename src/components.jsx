import {feetToAcre, fahrenheitToCelsius, hello, lawnTime,} from './functions.js';

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

export {Question1, Question2, Question2Real, Question3}