dice_faces = [
    "dice/one.png",
    "dice/two.png",
    "dice/three.png",
    "dice/four.png",
    "dice/five.png",
    "dice/six.png",
]
var random1;
var random2;

function roll() {
    random1 = Math.floor(Math.random() * 6);
    random2 = Math.floor(Math.random() * 6);
    var dice1 = dice_faces[random1];
    var dice2 = dice_faces[random2];
    var dices = document.getElementsByClassName("dice");
    dices[0].setAttribute("src", dice1);
    dices[1].setAttribute("src", dice2);

}

function rollDice() {
    roll();
    setTimeout(roll, 100);
    setTimeout(roll, 200);
    setTimeout(roll, 300);
    setTimeout(roll, 400);
    setTimeout(roll, 500);
    setTimeout(() => console.log(random1 + 1, random2 + 1), 600);;

}