let isGuestoneVegan = false
let isGuestTwoVegan = false


if (isGuestoneVegan && isGuestTwoVegan) {
    console.log("only offer vegan dishes");
  } else if (isGuestoneVegan || isGuestTwoVegan) {
    console.log("make sure to offer some vegan dishes");
  } else {
    console.log("offer up anything on the menu");
  }