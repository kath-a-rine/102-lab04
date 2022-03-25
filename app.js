
function favShow () {
    let favShow = prompt("What is your favorite show?");
    document.write("That's cool! "+ favShow + " deserved an Emmy!");
  }
  
  function sopranos() {
    let answer;
    let guesses = 0;
  
    do {
      guesses++;
      answer = prompt("Guess how many seasons Sopranos was on the air");
    } while (parseInt(answer) !== 6)
  
    if (parseInt(answer) === 6) {
      document.write("It took you " + guesses + " times to guess the correct answer.")
    }
  
  }
  
  function rating() {
    let output = '';
    let rating = prompt("Scale of 1-5 how much do you love to eat corn?");
  
    for (let i = 0; i < rating; i++) {
      output += "<img src='images/corn.jpg' />";
    }
  
    document.write(output);
  
  }