const axios = require('axios');
const fs = require('fs');

// Array of module URLs
const moduleUrls = [
    'https://www.hackthebox.eu/home/modules/academy/1',
    'https://www.hackthebox.eu/home/modules/academy/2',
    // Add more module URLs here
];

// Function to download HTML for a given URL
async function downloadHtml(url) {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error(`Failed to download HTML for ${url}: ${error.message}`);
        return null;
    }
}

// Function to save HTML to a file
function saveHtmlToFile(html, filename) {
    fs.writeFile(filename, html, (error) => {
        if (error) {
            console.error(`Failed to save HTML to ${filename}: ${error.message}`);
        } else {
            console.log(`HTML saved to ${filename}`);
        }
    });
}

// Main function to download HTML for all module URLs
async function downloadAllModules() {
    for (let i = 0; i < moduleUrls.length; i++) {
        const url = moduleUrls[i];
        const html = await downloadHtml(url);
        if (html) {
            // const filename = `module_${i + 1}.html`;
            extractProperties(html);
            moduleName = properties.module_name;
            pageNumber = properties.module_id;
            sectionTitle = properties.section_title;
            const fileName = `${moduleName.replace(
                /\s+/g,
                "_"
              )}_${pageNumber}_${sectionTitle.replace(/\s+/g, "_")}.md`;
            saveHtmlToFile(html, fileName);
        }
    }
}

// Function to extract modulename, pagenumber, and sectiontitle similiar to htb-scrape.js
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


// Run the main function
downloadAllModules();