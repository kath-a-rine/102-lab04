function message() {

    let show = prompt("What is your favorite show?");
    let watch = prompt("What streaming service do you watch " + show +  " on?");
    let pay = prompt("Do you pay for " + watch + "?")
    if( pay === "yes") {
        document.write("That's great! I hope you enjoy " + show + " and it is stays on " + watch + " forever!");
    } else {
        document.write("That's great! Although you really should start paying for " + watch + ". You don't want to get locked out of the account. Then you'll never be able to watch " + show + " again.");
    }

}
