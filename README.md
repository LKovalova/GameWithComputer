## Guess the Number Game

### Project Description
This is a simple browser-based game where the player tries to guess a randomly generated number between 1 and 20. The game provides feedback for each guess, helping the player zero in on the correct number by indicating whether they need to guess higher or lower. The game uses the SweetAlert2 library for nice alert pop-ups and GSAP for button animations.

### Features
- **Random Number Generation**: A random number between 1 and 20 is generated when the game starts.
- **User Input Validation**: Validates user input to ensure it's a number between 1 and 20.
- **User Feedback**: 
  - Informs the user if their guess is too high or too low.
  - Alerts the user if the input is not a number or out of range.
  - Displays a congratulatory message when the correct number is guessed.
- **Animations**: 
  - Buttons and input fields are animated using GSAP.
- **Responsive Design**: The game is styled to be responsive and works on a variety of screen sizes.

### Technologies Used
- **HTML**: Basic structure of the app.
- **CSS**: Styling the app, including responsive design for different screen sizes.
- **JavaScript**: Core game logic and user interaction.
- **SweetAlert2**: For modern and attractive alert boxes.
- **GSAP (GreenSock Animation Platform)**: For animations of input fields and buttons.

### How to Play
1. Enter a number between 1 and 20 in the input field.
2. Press "Enter" or click the "PLAY" button.
3. Based on your guess:
   - You will be asked to enter a higher or lower number.
   - If the number is out of range or not a valid number, you'll be prompted to enter a valid input.
   - If you guess correctly, you'll see a congratulatory message.

### Files
- `index.html`: The main HTML file that structures the page.
- `style.css`: The CSS file that styles the elements and defines the responsive layout.
- `script.js`: The JavaScript file containing the game logic.
- **Libraries used**:
  - **SweetAlert2**: Included via CDN for modern alert pop-ups.
  - **GSAP**: Included via CDN for animations.

### How to Run the Project
1. Download or clone this repository.
2. Open the `index.html` file in any modern web browser.
3. The game will load and be ready to play.

### Author
Created by **Liubov Kovalova** as a fun project to practice JavaScript, DOM manipulation, and working with libraries like SweetAlert2 and GSAP.
