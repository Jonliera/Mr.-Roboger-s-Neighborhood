//business logic

function roboger(userInput) {
  const numArray = [];
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

//User Interface Logic

