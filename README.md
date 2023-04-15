# A calculator app
This is a simple calculator web application built using HTML, CSS, and JavaScript. It allows users to perform basic arithmetic operations using the on-screen buttons or their keyboard. The calculator supports addition, subtraction, multiplication, and division, as well as percentage, square, and square root functions.


## Usage
To use the calculator, simply open the index.html file in a web browser. You can use either the on-screen buttons or your keyboard to input numbers and perform calculations.


### Keyboard Controls
* Numbers: Press the corresponding number key on your keyboard.
* Operators: Press the corresponding operator key (+, -, *, /).
* Decimal: Press the . key.
* Clear: Press the C key.

### Files
* index.html: The main HTML file that contains the calculator layout and structure.
* styles.css: The CSS file that defines the styles for the calculator, including the layout, colors, and fonts.
* calculator.js: The JavaScript file that contains the logic for handling user input, performing calculations, and updating the display.

### Code Structure
* index.html contains the calculator's structure, with an input element for displaying the current value and a series of buttons for numbers, operators, and other functions. The buttons have onclick attributes that call the handleCalculatorInput function with their respective values.
* styles.css defines the overall styles and layout for the calculator, using a combination of the grid layout and other CSS properties to create a clean, modern design.
* calculator.js contains the main logic for handling user input and performing calculations. The handleCalculatorInput function takes a button value as an argument and updates the calculator's state accordingly. The clearCalculator function resets the calculator's state and clears the input field.


## Customization
To customize the calculator, you can edit the styles in styles.css. For example, you can change the colors, fonts, or sizes of the buttons and display. If you want to add more functionality or modify the existing logic, you can edit calculator.js.

Please note that this calculator is designed for educational purposes and may not be suitable for advanced or commercial applications. If you need more advanced features or better performance, consider using a dedicated calculator library or a more robust framework.
