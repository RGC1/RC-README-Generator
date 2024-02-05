// function to generate markdown for README
function generateMarkdown(data) {
  return `
  
# ${data.title}
![Static Badge](https://img.shields.io/badge/License-grey?label=${data.license}&labelColor=green)

## Description

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

##License

${data.license}
![Static Badge](https://img.shields.io/badge/License-grey?label=${data.license}&labelColor=green)

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

* My GitHub: [${data.githubUsername}](https://github.com/${data.githubUsername})
* Email: ${data.email}

`;
}

module.exports = generateMarkdown;
