//Story based game
const playerName = prompt("Enter your name: ");
const playerSelectedArray = []
menu();

function menu() {
  while (menuSelect !== ("q" || "g")) {
    var menuSelect = prompt("Menu \n Type in the options you want to select " + playerName + "\n I - Instructions   G - Game   Q - Quit").toLowerCase(); //had to use var for this 

    switch (menuSelect) {
      case "i":
        alert("Instructions");
        break;
      case "g":
        alert("Let the game begin")
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
}


function game() {
  let bus = false;
  alert(playerName + "! Wake up!! You're late!")
  var hungry = prompt("You've been woken up from your beauty sleep and you check your phone to see what time it is. \n Its 9:00AM.\n You rush down the stairs and see breakfast on the table. What do you do?\n \n E-Eat breakfast    H- Stay hungry").toLowerCase();
  if (hungry === "h") {
    alert("Your fault shouldn't have slept in and rember always pack emergency food " + playerName);
    playerSelectedArray.push("h");
    bus = true;
  } else if (hungry === "e") {
    alert("Chubby, enjoy the food.");
    playerSelectedArray.push("e");
  }
  alert("SLAM")
  var transport = prompt("You've left your house, your're now walking to the bus stop but you see you're bus leaving. Do you?\n R - Run for the bus like you life depends on it \n W - Walk it to school, B - Go back to bed").toLowerCase();
  switch (transport) {
    case "r":
      if (bus === true) {
        alert("WOOHOO You made it " + playerName);
        playerSelectedArray.push("b")
      }
      else {
        alert("Well someone shouldn't have had breakfast")
      }
      break;
    case "w":
      alert("This is going to be a long walk")
      break;
    case "b":
      alert("Ahhh the sweet bed. You rest child.")
      menu();
      break;
    default:
      alert("You have no choice you're WALKING")
      break;
  }
}