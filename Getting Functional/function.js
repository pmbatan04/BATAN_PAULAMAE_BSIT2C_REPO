// var dogName = "berry";
// var dogWeight = 10;
// if (dogWeight > 20){
//     console.log(dogName + " says WOOF WOOF");
// } else {
//      console.log(dogName + "says WOOF WOOF")
//}

// dogName = "Lucky";
// dogWeight = 23;
// if (dogWeight > 20){
//     console.log(dogName + " says WOOF WOOF");
// } else {
//      console.log(dogName + "says WOOF WOOF")
//}

// dogName = "Goldy";
// dogWeight = 28;
// if (dogWeight > 20){
//     console.log(dogName + " says WOOF WOOF");
// } else {
//      console.log(dogName + "says WOOF WOOF")
//}

// dogName = "Tour";
// dogWeight = 5;
// if (dogWeight > 20){
//     console.log(dogName + " says WOOF WOOF");
// } else {
//      console.log(dogName + "says WOOF WOOF")
//}

function bark(name, weight) {
    if (weight > 20) {
        console.log(name + " says WOOF WOOF");
    } else {
        console.log(name + " says woof woof");
    }
}

// bark(prompt("Enter dog name"), prompt("Enter dog weight"));

bark("berry", 10);
bark("lucky", 23);
bark("Goldy", 28);
bark("Tour", 5);
