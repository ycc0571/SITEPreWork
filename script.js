// global constants
var clueHoldTime = 1000; //how long to hold each clue's light/sound
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence
//Global Variables
var pattern = [];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;
var mistake = 0;
var text = "";
var distance = 30000;
var s = false;

function timer(){
  var x = setInterval(function() {
    if(s){
      distance = 30000;
    }else{
      distance = distance - 10;
    }
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    var tseconds = Math.floor((distance-seconds*1000)/100);
    document.getElementById("timer").innerHTML = seconds+"'"+tseconds;
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("timer").innerHTML = "Time's up!";
      loseGame();
    }
  }, 10);
}

function startGame() {
  //initialize game variables
  document.getElementById("victory").classList.add("hidden");
  clueHoldTime = 1000
  timer();
  text = "Start!";
  document.getElementById("mytext").innerHTML = text;
  mistake = 0;
  progress = 0;
  document.getElementById("mistake").innerHTML = mistake;
  gamePlaying = true;
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  for (let i = 0; i < 8; i++) {
    pattern[i] = Math.floor(Math.random() * 4) + 1;
  }
  playClueSequence();
}

function stopGame() {
  //update game variables
  s = true;
  text = "End of game. Press Start to play again.";
  document.getElementById("mytext").innerHTML = text;
  gamePlaying = false;
  for (let i = 0; i < 8; i++) {
    pattern.pop();
  }
  // swap the Start and Stop buttons
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("startBtn").classList.remove("hidden");
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 523.3
};
function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  tonePlaying = true;
  setTimeout(function() {
    stopTone();
  }, len);
}
function startTone(btn) {
  if (!tonePlaying) {
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    tonePlaying = true;
  }
}
function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}

function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence(func) {
  text = " ";
  let delay = nextClueWaitTime; //set delay to initial wait time
  guessCounter = 0;
  for (let i = 0; i <= progress; i++) {
    if(!gamePlaying){
      s = true;
      return;
    }
    s = true;
    // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
    setTimeout(changes, delay);
}

function changes(){
  if(gamePlaying)
    s = false;
}

function loseGame() {
  stopGame();
  alert("Game Over. You lost.");
}

function winGame() {
  stopGame();
  document.getElementById("victory").classList.remove("hidden");
  alert("Game Over. You won!");
}

function guess(btn) {
  console.log("user guessed: " + btn);
  if (!gamePlaying) {
    return;
  }
  if (btn == pattern[guessCounter]) {
    guessCounter++;
    if (guessCounter - 1 == progress) {
      clueHoldTime-=110;
      if (guessCounter == pattern.length) {
        winGame();
      } else {
        progress++;
        text = "Correct guess!";
        document.getElementById("mytext").innerHTML = text;
        playClueSequence();
      }
    }
  } else {
    text = "Wrong guess! Try again.";
    document.getElementById("mytext").innerHTML = text;
    mistake++;
    document.getElementById("mistake").innerHTML = mistake;
    guessCounter = 0;
    if (mistake == 3) {
      loseGame();
    }
  }
}


function startTimer(){

}


//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);
