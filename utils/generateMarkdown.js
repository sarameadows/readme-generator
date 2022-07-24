// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return ``;
  } else if (license === 'MIT') {
    return `https://img.shields.io/badge/License-MIT-yellow.svg`;
  } else if (license === 'GNU GPLv3') {
    return `https://img.shields.io/badge/License-GPLv3-blue.svg`;
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return ``;
  } else if (license === 'MIT') {
    return `https://opensource.org/licenses/MIT`;
  } else if (license === 'GNU GPLv3') {
    return `https://www.gnu.org/licenses/gpl-3.0.en.html`;
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return ``;
  } else if (license) {
    let licenseBadge = renderLicenseBadge(license);
    let licenseLink = renderLicenseLink(license);
    return `
    ## License
    [![License: ${license}](${licenseBadge})](${licenseLink})
    `
  };
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributing
  ${data.contribution}

  ## Tests
  ${data.tests}

  ## Questions
  Github: ${data.username}
  Email: ${data.email}
`;
};

module.exports = generateMarkdown;
