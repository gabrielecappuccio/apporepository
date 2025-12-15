// 1. Define a function that will be executed when the button is clicked
function changeGreeting() {
    // 2. Use the Document Object Model (DOM) to find the HTML element with the ID 'greeting'
    const greetingElement = document.getElementById('greeting');
    
    // 3. Check if the element was actually found
    if (greetingElement) {
        // 4. Change the text content of the HTML element
        greetingElement.textContent = 'Hello from JavaScript! The text has changed.';
        
        // 5. Optional: Log a message to the browser's console for debugging
        console.log('Greeting successfully updated.');
    } else {
        console.error('Error: Could not find element with ID "greeting"');
    }
}

// 6. Use the DOM to find the button element
const buttonElement = document.getElementById('changeButton');

// 7. Attach the 'changeGreeting' function to the button's 'click' event
// This means: when the button is clicked, execute the function above.
if (buttonElement) {
    buttonElement.addEventListener('click', changeGreeting);
}