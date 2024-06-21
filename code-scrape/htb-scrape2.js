(function() {
    // Function to download a file
    function downloadFile(content, fileName) {
        const a = document.createElement('a');
        const file = new Blob([content], { type: 'text/markdown' });
        a.href = URL.createObjectURL(file);
        a.download = fileName;
        a.click();
        URL.revokeObjectURL(a.href);
    }

    // Function to parse the DOM and extract the content
    function parseContent() {
        const pageTitle = document.title.trim();
        const moduleName = document.querySelector('meta[name="description"]').content;
        const pageNumber = document.querySelector('meta[name="author"]').content;

        let markdownContent = `# ${pageTitle}\n\n`;
        markdownContent += `**Module Name:** ${moduleName}\n\n`;
        markdownContent += `**Page Number:** ${pageNumber}\n\n`;

        // Loop through headers and pre tags in the correct order
        const elements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, pre');
        elements.forEach(el => {
            if (el.tagName.startsWith('H')) {
                const headerLevel = parseInt(el.tagName.substring(1));
                markdownContent += `${'#'.repeat(headerLevel)} ${el.innerText.trim()}\n\n`;
            } else if (el.tagName === 'PRE') {
                const codeLang = el.querySelector('code').className.replace('language-', '');
                markdownContent += `\`\`\`${codeLang}\n${el.innerText.trim()}\n\`\`\`\n\n`;
            }
        });

        // Check for and download the cheat sheet if available
        const cheatSheetButton = document.querySelector('button[data-target="#cheatSheetModal"]');
        if (cheatSheetButton) {
            markdownContent += '## Cheat Sheet\n\n';
            const cheatSheetContent = document.querySelector('#cheatSheetModal .modal-body').innerText.trim();
            markdownContent += `${cheatSheetContent}\n\n`;
        }

        // Remove 'Table of Contents' and everything after it
        const tocIndex = markdownContent.indexOf('# Table of Contents');
        if (tocIndex !== -1) {
            markdownContent = markdownContent.substring(0, tocIndex);
        }

        // Save the markdown content to a file
        const fileName = `${moduleName.replace(/\s+/g, '_')}_Page_${pageNumber}.md`;
        downloadFile(markdownContent, fileName);
    }

    parseContent();
})();
