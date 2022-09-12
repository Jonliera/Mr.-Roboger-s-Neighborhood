# _Mr. Roboger's Neighborhood_

#### By _**Jonathan Liera**_

#### _This project will show you how using basic Javascript a user will get numbers and words as a result from their input.

## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap_
* _Markdown_
* _Javascript_

## Description

_This project takes a numerical input from the user. With simple Javascript using arrays and loops the numerical input will be converted into a string. The output of the string will be a range of numbers from 0 to the number inputted by the user. If the user inputs any number containing "1" then it gets replaced by "Beep!". If the user inputs any number containing "2" then it gets replaced by "Boop!". If the user inputs any number containing "3" then it gets replaced by "Won't you be my Neighbor!".  . Here is a [link]https://jonliera.github.io/Mr.-Roboger-s-Neighborhood/

## Tests

Test: "It will return a number to a string"
Code: roboger(5);
Expected Output: "5"

function roboger(input){
  return input.toString();
}

Test "It will return a range of numbers from 0 to the inputted number by the user" 
Code: roboger: (3) 
Expected Output: 0,1,2,3

function roboger(userInput){
  let numArray = []
 for (let index = 0; index <= userInput; index++){
  numArray.push(index.toString());
 }
  return numArray;
};

Test:"It will return a range of numbers from 0 to the inputted number by the user, substituting the number '1' with the word 'Beep!'
Code: roboger:(3)
Expected Output: 0,Beep!,2,3

function roboger(userInput) {
  let numArray = [];
  for (let index = 0; index <= userInput; index++) {
    numArray.push(index.toString());
    if ((numArray[index]).includes('1')){
      numArray[index] = ('Beep!');
    } else{
    numArray[index]
    }
  }
  return numArray;
};

Test:"It will return a range of numbers from 0 to the inputted number by the user, substituting the number '2' with the word 'Boop!'
Code: roboger:(3)
Expected Output: 0,Beep!,Boop!,3

function roboger(userInput) {
  let numArray = [];
  for (let index = 0; index <= userInput; index++) {
    numArray.push(index.toString());
    if ((numArray[index]).includes('1')){
      numArray[index] = ('Beep!');
    } else if ((numArray[index]).includes('2')){
      numArray[index] = ('Boop!');  
    } else{
    numArray[index]
    }
  }
  return numArray;
};

Test:"It will return a range of numbers from 0 to the inputted number by the user, substituting the number '3' with the phrase 'Won't you be my neighbor!'
Code: roboger:(3)
Expected Output: 0,Beep!,Boop!,Won't you be my neighbor!

function roboger(userInput) {
  let numArray = [];
  for (let index = 0; index <= userInput; index++) {
    numArray.push(index.toString());
    if ((numArray[index]).includes('1')){
      numArray[index] = ('Beep!');
    } else if ((numArray[index]).includes('2')){
      numArray[index] = ('Boop!');  
    } else if ((numArray[index]).includes('3')){
      numArray[index] = ("Won't you be my Neighbor!");
    } else{
    numArray[index]
    }
  }
  return numArray;
};

Test:"It will return a range of numbers from 0 to the inputted number by the user, substituting any number containing '1' with the word 'Beep!'
Code: roboger:(11)
Expected Output: 0,Beep!,Boop!,Won't you be my neighbor!,4,5,6,7,8,9,Beep!,Beep!
function roboger(userInput) {
  let numArray = [];
  for (let index = 0; index <= userInput; index++) {
    numArray.push(index.toString());
    if ((numArray[index]).includes('1')){
      numArray[index] = ('Beep!');
    } else if ((numArray[index]).includes('2')){
      numArray[index] = ('Boop!');  
    } else if ((numArray[index]).includes('3')){
      numArray[index] = ("Won't you be my Neighbor!");
    } else{
    numArray[index]
    }
  }
  return numArray;
};

Test:"It will return a range of numbers from 0 to the inputted number by the user, substituting any number containing '2' with the word 'Boop!' overwriting the number '1'
Code: roboger:(12)
Expected Output: 0,Beep!,Boop!,Won't you be my neighbor!,4,5,6,7,8,9,Beep!,Beep!,Boop!

function roboger(userInput) {
  let numArray = [];
  for (let index = 0; index <= userInput; index++) {
    numArray.push(index.toString());
    if ((numArray[index]).includes('2')){
      numArray[index] = ('Boop!');
    } else if ((numArray[index]).includes('1')){
      numArray[index] = ('Beep!');  
    } else if ((numArray[index]).includes('3')){
      numArray[index] = ("Won't you be my Neighbor!");
    } else{
    numArray[index]
    }
  }
  return numArray;
};


Test:"It will return a range of numbers from 0 to the inputted number by the user, substituting any number containing '3' with the phrase 'Won't you be my neighbor!' overwriting the number '1'and '2'
Code: roboger:(13)
Expected Output: 0,Beep!,Boop!,Won't you be my neighbor!,4,5,6,7,8,9,Beep!,Beep!,Boop!,Won't you be my neighbor!

function roboger(userInput) {
  let numArray = [];
  for (let index = 0; index <= userInput; index++) {
    numArray.push(index.toString());
    if ((numArray[index]).includes('3')){
      numArray[index] = ("Won't you be my Neighbor!");
    } else if ((numArray[index]).includes('2')){
      numArray[index] = ('Boop!');
    } else if ((numArray[index]).includes('1')){
      numArray[index] = ('Beep!');
    } else{
    numArray[index]
    }
  }
  return numArray;
};


## Setup/Installation Requirements

* _Click link above for the gitHub repository_
* _Clone the repository_
* _Save the repository to your computer_
* _Click the index.html file_
* _It should open in your preferred web browser_

## Known Bugs

* _No known bugs_

## License

_If you have any questions or concerns please contact me @ jonliera1@gmail.com. You are also welcome to contribute if you feel you may so._

*_MIT_

Copyright (c) _Aug 2022_ _Jonathan Liera_