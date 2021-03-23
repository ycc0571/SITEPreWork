# Pre-work - _Memory Game_

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: **Yuchen Jin**

Time spent: **4.5** hours spent in total

Link to project: https://glitch.com/edit/#!/siteprework-jyc

## Required Functionality

The following **required** functionality is complete:

- [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
- [x] "Start" button toggles between "Start" and "Stop" when clicked.
- [x] Game buttons each light up and play a sound when clicked.
- [x] Computer plays back sequence of clues including sound and visual cue for each button
- [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
- [x] User wins the game after guessing a complete pattern
- [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

- [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
- [x] Buttons use a pitch (frequency) other than the ones in the tutorial
- [ ] More than 4 functional game buttons
- [x] Playback speeds up on each turn
- [x] Computer picks a different pattern each time the game is played
- [x] Player only loses after 3 mistakes (instead of on the first mistake)
- [x] Game button appearance change goes beyond color (e.g. add an image)
- [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
- [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] User can see their remaining time on the screen once a clue finished
- [x] User can see their remaining chances on the screen, along with a message indicating if certain guess is wrong or not
- [x] A picture indicating victory appears when user wins the game

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img
    src="https://cdn.glitch.com/190a0d97-f306-42b1-896d-dcfc0a9b0fb5%2Fnofault.gif?v=1616536523370"
  />

<img
    src="https://cdn.glitch.com/190a0d97-f306-42b1-896d-dcfc0a9b0fb5%2Ftimesup.gif?v=1616535882460"
  />

<img
    src="https://cdn.glitch.com/190a0d97-f306-42b1-896d-dcfc0a9b0fb5%2F3chances.gif?v=1616536023998"
  />

<img
    src="https://cdn.glitch.com/190a0d97-f306-42b1-896d-dcfc0a9b0fb5%2Fdiff.gif?v=1616534682742"
  />

## Reflection Questions

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.

   > &nbsp;&nbsp;&nbsp;&nbsp; https://www.w3schools.com/

   > &nbsp;&nbsp;&nbsp;&nbsp; https://stackoverflow.com/

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)

   > &nbsp;&nbsp;&nbsp;&nbsp; Previously, I was implementing an additional feature such that a
   > picture of the current note will appear on the screen somewhere else. However, when I was testing it, I realized that it can look ugly
   > as a user since it pops up from nowhere. I then decided to implement it according to the project write-up, making the buttons change
   > to the picture that I want to show the users. However, because I only deleted the part involving "img" in the HTML file but forgot to
   > delete the lines in the javascript file, bugs appeared. The buttons are not returning to the original color after they finish playing
   > a note! At that time, I already finished the basics so I have loads of code. I was stressed out because I don't have a lot of
   > experience in javascript or any other languages that we used in this project and I don't know the tools that can help me debug
   > javascript codes. It's going to be frustrating if I get no idea about what went wrong and have to look at every function in the
   > file and might even mess up more. Thank to Glitch's rewind function, I decided to go back to the previous version where I didn't
   > make the changes. To change the implementation, I decided to keep the first while adding the new one instead of deleting the first,
   > so that it's easier to see what went wrong. After adding the new feature, the code worked perfectly fine, but after deleting the HTML
   > part, it went buggy again. I realized that it has something to do with the first implementation and the second implementation is fine,
   > the amount of code that I have to look through is narrowed down. Finally, I find out my mistake of not deleting the image-related
   > part in the javascript file. After fixing it, my codes worked beautifully without bugs. Although this minor mistake caused a big
   > problem in my project and took me a long time to fix, it once again reminded me of the importance of saving previous versions - and of
   > course, the fact that we are lucky to have tools like Glitch and Github, and that we should utilize them well.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)

   > &nbsp;&nbsp;&nbsp;&nbsp; Just like what I said in the previous question, I especially lack the experience of debugging in
   > web-developing. Although I learnt in school about tools to debug other programming languages like GDB and Valgrind, I'm not that
   > familiar with other languages. I believe that the ability to debug is one of the most important qualities that a successful programmer
   > should have, and I did encounter obstacles in this project due to my lack of knowledge and experience in the web-developing debugging
   > process. That's why the first thing that emerged when I see this question is "how to debug". I'm looking forward to learning the
   > debugging techniques and the tools that work with javascript, CSS, and other languages.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)
   > &nbsp;&nbsp;&nbsp;&nbsp; Although I worked very hard on finding and fixing the minor bugs,
   > I find out that the game doesn't behave very well when the user tries to mess with it. For example, if the user clicks the buttons
   > while the computer is still playing the clue, the computer will be stopped. After the user releases the mouse, the computer will then
   > continue. Although it's not technically wrong and if the users are good enough at this game, they might still get the pattern, it is
   > oftentimes annoying. I think the best way to solve this is to find a way to disable the buttons when the computer is playing and able
   > it after it finishes. I tried to solve this issue, but due to my limited experience with javascript and limited time, I was not able
   > to do it and decided to leave it as a feature. If I had a few more hours on this project, I will definitely research this and try to
   > solve it. 

## License

    Copyright [Yuchen Jin]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
