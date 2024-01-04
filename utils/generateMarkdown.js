// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

function toc(){
  return `## TableOfContent
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
  `;
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  const tableOfContents  = data.includeTableOfContent ? toc() : '';

  return `# ${data.title}


## Description
${data.description}  


${tableOfContents}


## Installation
${data.installation}


## Usage
${data.usage}


## Credits
${data.contribution}

## Licence


## Badges


## Features


## How to Contribute


## Tests

`;
}

module.exports = generateMarkdown;