// function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}
![License](https://img.shields.io/badge/license-${data.license}-blue.svg)

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

This project is under the license of:
${data.license}



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
