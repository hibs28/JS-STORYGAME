//Story based game
const playerName = prompt("Enter your name: ");

while (menuSelect !== ("q" || "g")) {
  var menuSelect = prompt("Menu \n Type in the options you want to select " + playerName + "\n I - Instructions   G - Game   Q - Quit").toLowerCase(); //had to use var for this 

  switch (menuSelect) {
    case "i":
      alert("Instructions");
      break;
    case "g":
      alert("let the games begin")
      game();
      break;
    case "q":
      alert("Goodbye");
      window.close();
      break;
    default:
      alert("Please enter the right option");
      break;
  }
}


function game() {
  prompt(playerName + "you're a wizard");
}