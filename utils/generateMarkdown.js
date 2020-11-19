// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description

${data.description}

## Table of Contents 


* [UserStory](#User Story)

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [WhatIsTheAppFor](#What is the app for)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## User Story

    ${data.UserStory}
    
## Installation

  ${data.install}


## Usage

  ${data.usage}

  ## License

  ${data.License}


## What is the app for

  ${data.Whatis4}
  
## Contributing

  ${data.contributions}

## Tests

  ${data.test}


## Questions

  ${data.questions}


    
    

`;
}

module.exports = generateMarkdown;
