//Story based game
const playerName = prompt("Enter your name: ");
const playerInventory = []
let stamina = 10;

menu();

function menu() {
  while (menuSelect !== ("q" || "g")) {
    playerInventory.length = 0;
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
    stamina -= 1;
    bus = true;
  } else if (hungry === "e") {
    alert("Chubby, enjoy the food.");
    alert("You make yourself a sandwhich for lunch :) ")
    playerInventory.push("Sandwhich");
  }
  alert("SLAM")
  var transport = prompt("You've left your house, your're now walking to the bus stop but you see your bus leaving. Do you?\n R - Run for the bus like you life depends on it \n W - Walk it to school \n B - Go back to bed").toLowerCase();
  switch (transport) {
    case "r":
      if (bus === true) {
        alert("WOOHOO You made it on the bus " + playerName);
        stamina -= 4;
        alert("Someone gives you a biscuit. You save it for")
        playerInventory.push("Biscuit")
        school();
      }
      else {
        alert("Well someone shouldn't have taken their time and have breakfast");
        walk();
      }
      break;
    case "w":
      alert("This is going to be a long walk");
      alert("Oooo you found £10 on the ground. Finders, Keepers");
      playerInventory.push("£10 Note");
      walk();
      break;
    case "b":
      alert("Ahhh the sweet bed. You rest child.")
      menu();
      break;
    default:
      alert("You have no choice you're WALKING")
      walk();
      break;
  }
}

function walk() {
  alert("You're walking... ");
  alert("...walking...");
  alert("... and walking...");
  alert(playerName + "! *Beep Beep*");
  var drive = prompt("This voice is so familiar to you, where do you recognise this voice. You turn to see it's your mum in the car. She's offering to drive you to school. What do you choose? \n J - You take the free ride    I - You choose to ignore her");
  if (drive === "j") {
    alert("It's a free ride, can't complain");
    stamina += 1;
    school();
  }
  else {
    var mum = prompt("You try to ignore her but she being persistant about it. Do you: \n R - Run Away from her  \n T - Tell her you don't need a ride   P - Pretend you can't hear her").toLowerCase();
    if (mum === "r") {
      school();
      stamina -= 5;
    }
    else {
      alert("You're in the car with her (-____-) ");
      school();
      stamina += 1;
    }
  }
}

function school() {
  alert("You finally made it in class and luckily the teacher hasn't taken attendance *high five*");
  alert("Uh Oh you're starting to feel hungry let's see if you have anything in your backpack. You have: \n" + playerInventory.toString());
  for (var i = 0; i > playerInventory.length; i++) {
    if (playerInventory[i] !== "Sandwhich" || "Biscuit") {
      alert("you have nothing to eat");
    }
  }
}