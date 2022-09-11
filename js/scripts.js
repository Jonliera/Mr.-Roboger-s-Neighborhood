//business logic

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




//User Interface Logic

function handleFormSubmission(event){
  event.preventDefault();
  const input = document.getElementById('number').value;
  const numArray = roboger(input);
  document.getElementById('result').innerText = numArray;
}

window.addEventListener("load", function() {
document.querySelector("form#user-input").addEventListener("submit", handleFormSubmission);
});


