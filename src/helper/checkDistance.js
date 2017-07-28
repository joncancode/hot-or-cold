export function checkDistance(numberInput, answer) {
  //var difference = Math.abs
  // return has to be string
  //line 33: take out 'this' when move to help folder

  //   if (Number(numberInput) === answer) {
  //     console.log('game restarted');
  //     //alert("You win!")
  //     this.resetGame();
  //   }
  var difference = Math.abs(numberInput - answer);

  if (difference === 0) {
    document.getElementById('response').innerHTML = 'YOU WIN! 😁';
  }

  if (difference >= 50) {
    document.getElementById('response').innerHTML = "You're cold as ice";
  }

  if (difference < 50 && difference >= 25) {
    document.getElementById('response').innerHTML = "You're lukewarm";
  }

  if (difference < 25 && difference >= 10) {
    document.getElementById('response').innerHTML = "You're heating up!";
  }

  if (difference < 10 && difference > 0) {
    document.getElementById('response').innerHTML =
      "Mother of Dragons! \n You're burning!";
  }
}
