// Define a function named 'changeText'
function changeText() {
  // Use document.getElementById() to find the HTML element with the id="demo"
  const paragraphElement = document.getElementById("demo");

  // Change the content (textContent) of that HTML element
  paragraphElement.textContent = "The text has been changed by JavaScript!";
}