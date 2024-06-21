// Function to check if the cheat sheet button is present
function isCheatSheetButtonPresent() {
  var button = document.querySelector(
    'button[data-toggle="modal"][data-target="#cheatSheetModal"]'
  );
  return button !== null;
}

// Function to extract code snippets and headers
function extractCodeSnippetsWithHeaders() {
  // Initialize variables to store Markdown content and header levels
  var markdownContent = "";
  var currentHeaderLevel = 0;
  var foundTableOfContents = false;

  // Find all <h1>, <h2>, <h3>, ... <pre> elements
  var elements = document.querySelectorAll("h1, h2, h3, h4, h5, h6, pre");

  // Loop through each element
  elements.forEach(function (element) {
    if (element.tagName.startsWith("H")) {
      // Extract header text and determine header level
      var headerLevel = parseInt(element.tagName.substring(1));
      var headerText = element.textContent.trim();

      // Check if the element is the "Table of Contents" section
      if (element.textContent.trim() === "Table of Contents") {
        foundTableOfContents = true;
      }

      // Stop adding content if "Table of Contents" section is found
      if (foundTableOfContents) {
        return;
      }

      // Adjust header levels if necessary
      if (headerLevel > currentHeaderLevel) {
        markdownContent +=
          "#".repeat(headerLevel - currentHeaderLevel) +
          " " +
          headerText +
          "\n\n";
      } else if (headerLevel < currentHeaderLevel) {
        markdownContent +=
          "#".repeat(currentHeaderLevel - headerLevel) +
          " " +
          headerText +
          "\n\n";
      } else {
        markdownContent += "#".repeat(headerLevel) + " " + headerText + "\n\n";
      }

      currentHeaderLevel = headerLevel;
    } else {
      // Extract and format code snippets
      var codeSnippet = element.textContent.trim();
      var language = element.classList[0].replace("language-", "");

      if (language==="shell-session"){language="bash"}; // Change shell-session to bash

      // Add code snippet to Markdown content
      markdownContent += "```" + language + "\n";
      markdownContent += codeSnippet + "\n";
      markdownContent += "```\n\n";
    }
  });

  // Return the Markdown content
  return markdownContent;
}

// Get the URL of the page
var url = window.location.href;
// Extract module and section numbers from the URL
var match = url.match(/module\/(\d+)\/section\/(\d+)/);
if (match) {
  var moduleNumber = match[1];
  var sectionNumber = match[2];
  // Construct the filename based on the module and section numbers
  var filename = `module-${moduleNumber}-section-${sectionNumber}.md`;

  // Check if the cheat sheet button is present
  if (isCheatSheetButtonPresent()) {
    // Wait for the FileSaver.js library to load
    var script = document.createElement("script");
    script.onload = function () {
      // Extract code snippets and headers
      var extractedContent = extractCodeSnippetsWithHeaders();
      // Save the extracted content to a local Markdown file
      var blob = new Blob([extractedContent], {
        type: "text/plain;charset=utf-8",
      });
      saveAs(blob, filename);
    };
    script.src = "https://cdn.jsdelivr.net/npm/file-saver";
    document.head.appendChild(script);
  } else {
    console.log("Cheat sheet button not found.");
  }
} else {
  console.log("URL format not recognized.");
}

// TODO
// 
// - fix empty #
// - Cheat sheet button present doesn't download the file
// - Create a Tampermonkey Script
// Next, we need to create a Tampermonkey script to inject the JavaScript code into the Hack The Box page. Tampermonkey is a popular userscript manager that allows you to run custom JavaScript on webpages.
// Here's an example Tampermonkey script that injects the JavaScript code into the Hack The Box page: