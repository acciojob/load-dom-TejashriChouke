//your JS code here. If required.
// script.js
document.addEventListener("DOMContentLoaded", function () {
  // This code will run when the DOM is fully loaded
  const paragraph = document.createElement("p"); // Create a new paragraph element
  paragraph.textContent = "DOM load success"; // Set its text content

  // Append the paragraph to the body of the document
  document.body.appendChild(paragraph);
});
