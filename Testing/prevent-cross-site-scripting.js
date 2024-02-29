/*
Prevent cross-site scripting

src/
└── utils/
    └── security.js
*/

// Import DOMPurify library to sanitize input
import DOMPurify from 'dompurify';

// Function to sanitize input against XSS attacks
function sanitizeInput(input) {
    // Use DOMPurify to sanitize input
    return DOMPurify.sanitize(input);
}

// Export the sanitizeInput function
export { sanitizeInput };

/*

DOMPurify is a JavaScript library designed to sanitize (cleanse) HTML and prevent cross-site scripting (XSS) 
attacks by removing potentially dangerous HTML and JavaScript code from user input. It ensures that any input
from users is safe to use and display on a web page, helping to protect against malicious code injection and
maintaining the security of the web application.

*/

// OR

// Function to sanitize input against XSS attacks
function sanitizeInputCode(input) {
    // Replace characters that could be used for XSS attacks with their HTML entity equivalents
    return input.replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
