function calculateArea() {
  // 1. READ INPUTS
  
  // Get the value from the 'length' input field (it's a string)
  const lengthInput = document.getElementById("length").value;
  
  // Get the value from the 'width' input field (it's a string)
  const widthInput = document.getElementById("width").value;
  
  
  // 2. VALIDATE AND CONVERT
  
  // Convert the input strings to floating-point numbers for calculation
  const length = parseFloat(lengthInput);
  const width = parseFloat(widthInput);
  
  // Basic validation: Check if both inputs are valid numbers
  if (isNaN(length) || isNaN(width)) {
    document.getElementById("result").textContent = "Please enter valid numbers for both length and width.";
    return; // Stop the function if validation fails
  }
  
  
  // 3. CALCULATE VALUE
  
  const area = length * width; // Area = Length × Width
  
  
  // 4. DISPLAY OUTPUT
  
  // Select the result paragraph element
  const resultElement = document.getElementById("result");
  
  // Update the text content using a template literal (the backticks you asked about!)
  resultElement.textContent = `The area is: ${area}`;
}