(function () {
  // Function to download a file
  function downloadFile(content, fileName) {
    const a = document.createElement("a");
    const file = new Blob([content], { type: "text/markdown" });
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
    URL.revokeObjectURL(a.href);
  }

  // Function to parse the DOM and extract the content
  function parseContent() {
    (function () {
      // Function to extract properties from the head script
      function extractProperties() {
        // Find the script tag in the head that contains the properties
        const scripts = document.querySelectorAll("head script");
        let propertiesScriptContent = null;

        scripts.forEach((script) => {
          if (script.innerText.includes("properties = {")) {
            propertiesScriptContent = script.innerText;
          }
        });

        if (!propertiesScriptContent) {
          console.error("Properties script not found.");
          return null;
        }

        // Extract the JSON part from the script content
        const propertiesMatch = propertiesScriptContent.match(
          /properties\s*=\s*({[\s\S]*?});/
        );
        if (!propertiesMatch || propertiesMatch.length < 2) {
          console.error("Properties not found in the script.");
          return null;
        }

        // Parse the extracted JSON
        const propertiesJSON = propertiesMatch[1];
        let properties = null;
        try {
          properties = JSON.parse(propertiesJSON);
        } catch (error) {
          console.error("Failed to parse properties JSON:", error);
          return null;
        }

        return properties;
      }

      // Extract properties and log them
      const properties = extractProperties();
      if (properties) {
        console.log("Extracted Properties:", properties);
      }
    })();

    // {
    //     "platform": "Academy",
    //     "platform_version": "V1",
    //     "module_id": 35,
    //     "module_name": "Web Requests",
    //     "module_difficulty": "Fundamental",
    //     "section_id": 219,
    //     "section_title": "HyperText Transfer Protocol (HTTP)"
    //   }

    // Extract properties
    let url = window.location.href;
    let platform = properties.platform;
    let platformVersion = properties.platform_version;
    let moduleId = properties.module_id;
    let moduleDifficulty = properties.module_difficulty;
    let sectionId = properties.section_id;
    // if section id is less than 10, add 0 to the beginning
    if (sectionId < 10) {
      sectionId = `0${sectionId}`;
    }
    let sectionTitle = properties.section_title;
    let pageTitle = document.title.trim();
    let moduleName = properties.module_name;
    // let pageNumber = document.querySelector('li.breadcrumb-item:nth-child(1) > a:nth-child(1)').content;
    //check if the page number is in the second breadcrumb item
    let pageNumbers = document.querySelectorAll("li.breadcrumb-item a");
    let pageNumber = pageNumbers[pageNumbers.length - 1].textContent.replace(
      "Page ",
      ""
    );
    let propertiesComments = `<!--\n // Platform: ${platform}\n`;
    propertiesComments += `// URL: ${url}\n`;
    propertiesComments += `// Platform Version: ${platformVersion}\n`;
    propertiesComments += `// Module ID: ${moduleId}\n`;
    propertiesComments += `// Module Name: ${moduleName}\n`;
    propertiesComments += `// Module Difficulty: ${moduleDifficulty}\n`;
    propertiesComments += `// Section ID: ${sectionId}\n`;
    propertiesComments += `// Section Title: ${sectionTitle}\n`;
    propertiesComments += `// Page Title: ${pageTitle}\n`;
    propertiesComments += `// Page Number: ${pageNumber}\n-->\n\n`;

    let markdownContent = propertiesComments;
    markdownContent += `# ${sectionTitle}\n\n`;
    markdownContent += `**Module Name:** ${moduleName} `;
    markdownContent += `**Page Number:** ${pageNumber}\n\n`;

    // Loop through headers and pre tags in the correct order
    const elements = document.querySelectorAll(
      "h1, h2, h3, h4, h5, h6, pre, img"
    );
    elements.forEach((el) => {
      if (el.tagName.startsWith("H")) {
        const headerLevel = parseInt(el.tagName.substring(1));
        markdownContent += `${"#".repeat(
          headerLevel
        )} ${el.innerText.trim()}\n\n`;
      } else if (el.tagName === "PRE") {
        let codeLang = el
          .querySelector("code")
          .className.replace("language-", "");
        //if language-shell-session, change to shell
        if (codeLang === "shell session") {
          codeLang = "shell";
        }
        markdownContent += `\`\`\`${codeLang}\n${el.innerText.trim()}\n\`\`\`\n\n`;
        // only add images with src beginning with https://academy.hackthebox.com/storage/
      } else if (
        el.tagName === "IMG" &&
        el.src.startsWith("https://academy.hackthebox.com/storage/")
      ) {
        let imgSrc = el.src;
        // add markdown image with source
        markdownContent += `![${imgSrc}](${imgSrc})\n\n`;
      }
    });

    // // Add the questions and answers to the markdown content
    // question
    // span.badge:nth-child(1)
    // answer
    // #answer893
    // hint
    // #hintBtn893
    // html body div.container-fluid div#layout-wrapper div.main-content div.page-content div.row.justify-content-xl-center div.col-md-12.col-xl-9.col-xxl-7 div.training-module div#questionsDiv.card div.card-body div div div.row div.d-flex.justify-content-end.w-100.mr-3 div.mb-4.mr-1 button#hintBtn893.btn.btn-outline-warning.btn-block
    // click - modal
    // modal
    // #hint893 > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > h6:nth-child(3)
    // html body.modal-open div.container-fluid div#layout-wrapper div.main-content div.page-content div#hint893.modal.fade.show div.modal-dialog.modal-dialog-centered div.modal-content div.modal-body div.text-center h6

    // // Check for and download the cheat sheet if available
    // const cheatSheetButton = document.querySelector(
    //   'button[data-target="#cheatSheetModal"]'
    // );
    // if (cheatSheetButton) {
    //   markdownContent += "## Cheat Sheet\n\n";
    //   const cheatSheetContent = document
    //     .querySelector("#cheatSheetModal .modal-body")
    //     .innerText.trim();
    //   markdownContent += `${cheatSheetContent}\n\n`;
    // }

    // Remove 'Table of Contents' and everything after it
    const tocIndex = markdownContent.indexOf("# Table of Contents");
    if (tocIndex !== -1) {
      markdownContent = markdownContent.substring(0, tocIndex);
    }

    // Save the markdown content to a file
    // const fileName = `${moduleName.replace(/\s+/g, '_')}_Page_${pageNumber}.md`;

    // replace spaces with underscores in the module name and section title
    const fileName = `${moduleName.replace(
      /\s+/g,
      "_"
    )}_${pageNumber}_${sectionTitle.replace(/\s+/g, "_")}.md`;
    downloadFile(markdownContent, fileName);

    // Function to download the file
    function downloadFile(markdownContent, fileName) {
      const blob = new Blob([markdownContent], { type: "text/markdown" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      setTimeout(() => {
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        afterDownload(); // Call the function to click the next page button after download
      }, 0);
    }

    // Function to click the next page button
    function afterDownload() {
      // Click the "Next Page" button
      // document
      //   .querySelector(
      //     "div.container-fluid div#layout-wrapper.global-alert-visible div.main-content div.page-content div.row.justify-content-xl-center div.col-md-12.col-xl-9.col-xxl-7 div.card.bg-color-blue-nav div.card-body a.btn.btn-light.ml-2.module-button.py-2"
      //   )
      //   .click();
      // broken next button - server side atttacks
      // html body div.container-fluid div#layout-wrapper div.main-content div.page-content div.row.justify-content-xl-center div.col-md-12.col-xl-9.col-xxl-7 div.card.bg-color-blue-nav div.card-body a.btn.btn-light.ml-2.module-button.py-2
      // a.btn:nth-child(3)
      // a.btn:nth-child(2)
      // a.btn-light:nth-child(3)
      // document.querySelector("a.btn:nth-child(2)").click();
      let buttons = document.querySelectorAll("a.btn");
      // console.log(buttons);
      let nextButton = Array.from(buttons).find(
        (button) => button.innerText.trim() === "Next"
      );
      // console.log("Next Button", nextButton);

      if (nextButton) {
        // Do something with nextButton
        nextButton.click();
      }
    }

    // // Example usage
    // const markdownContent = "# Example Markdown Content";
    // const fileName = "example.md";
    // downloadFile(markdownContent, fileName);
  }

  parseContent();
})();

// TODO:
// - [x] Add images to the markdown content
// - [x] fix shelll session code block
// - [x] Fix Header levels in the markdown content
// - [x] Fix Next Button click
// - [ ] Add the cheat sheet content to the markdown
// - [ ] Add questions to the markdown content
// - [ ] Add answers to the markdown content
// - [ ] Add hints to the markdown content
// - [x] Add 0 to module id and section id if less than 10
// - [ ] remove ndefstathiou@htb[/htb]$ from shell code blocks for easier copy and paste
