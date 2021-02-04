let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');
let startButton = document.getElementById('start');

const botDoorPath = 'https://content.codecademy.com/projects/chore-door/images/robot.svg';
const beachDoorPath = 'https://content.codecademy.com/projects/chore-door/images/beach.svg';
const spaceDoorPath = 'https://content.codecademy.com/projects/chore-door/images/space.svg';
let closedDoorPath = 'https://content.codecademy.com/projects/chore-door/images/closed_door.svg';

let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
let currentPlaying = true;

const isBot = (door) => {
  if(door.src === botDoorPath) {
    return true;
  } else {
    return false;
}
}

const isClicked = (door) => {
  if (door.src === closedDoorPath) {
  return false;
} else {
  return true;
}
}

const playDoor = (door) => {
  numClosedDoors--;
  if(numClosedDoors === 0) {
    gameOver('win');
  }else if (isBot(door)) {
  gameOver('lose');
} 
}

const randomChoreDoorGenerator= () => {
let choreDoor = Math.floor(Math.random() * numClosedDoors);
if(choreDoor === 0){
  openDoor1 = botDoorPath;
  openDoor2 = beachDoorPath;
  openDoor3 = spaceDoorPath;
}else if(choreDoor === 1){
  openDoor2 = botDoorPath;
  openDoor1 = spaceDoorPath;
  openDoor3 = beachDoorPath;
}else{
  openDoor3= botDoorPath;
  opendoor1 = beachDoorPath;
  openDoor2 = spaceDoorPath;
}
}

door1.onclick = () => {
  if(currentPlaying && !isClicked(door1)) {
  doorImage1.src = openDoor1;
  playDoor(door1);
}
}
door2.onclick = () => {
  if(currentPlaying && !isClicked(door2)) {
doorImage2.src = openDoor2;
playDoor(door2);
  }
}
door3.onclick = () => {
  if(currentPlaying && !isClicked(door3)) {
doorImage3.src = openDoor3;
playDoor(door3);
  }
}
startButton.onclick = () => {
//   if(!currentlyPlaying) {
// }; 
startRound();
}
const startRound = () => {
  door1.src = closedDoorPath;
  door2.src = closedDoorPath;
  door3.src = closedDoorPath;
  numClosedDoors = 3;
  currentPlaying = true;
  startButton.innerHTML = 'GoodLuck';
  randomChoreDoorGenerator();
}
const gameOver = (status) => {
if (status === 'win') {
  startButton.innerHTML = 'You win! Play again?';
}else {
  startButton.innerHTML = 'Game over! Play again?'
}
currentPlaying = false;
}
startRound();