function generateLicence(licence){
  if(licence == 'None'){
    return 'No licence'
  }
  if(licence == 'MIT licence'){
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'

  }
  if(licence == 'Apache Licence 2.0'){
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'

  }
  if(licence == 'GNU GPL v2'){
    return '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'
    
  }
}


function toc() {
  return `## TableOfContent
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
  `;
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  const tableOfContents = data.includeTableOfContent ? toc() : '';  
  const licence = data.licence;  

  return `
  
# ${data.title}

${generateLicence(licence)}

## Description
${data.description}  


${tableOfContents}


## Installation
${data.installation}


## Usage Information
${data.usage}


## Licence
${generateLicence(licence)}

## How to Contribute
${data.contribution}

## Tests
${data.tests}

## Questions
[My Github](https://github.com/${data.github})

Contact me via ${data.contact} at ${data.contactInfo}
`;
};

module.exports = generateMarkdown;