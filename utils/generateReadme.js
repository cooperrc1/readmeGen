function generateReadme(answers){
    const { projName, projDesc, inst, usage, lic, contrib , gitUser, email} = answers
    return `


    
# ${projName}
> ${projDesc}


## Table of Contents
* [General Info](#general-information)
* [Installation](#installation)
* [Usage](#usage)
* [Contributors](#contributors)
* [Contact](#contact)
<!-- * [License](#license) -->


## General Information π
- A quick description of the project - > ${projDesc}


## Usage  π» 
How does one go about using it?
* ${usage}


## Installation πΎ
* ${inst}


## Contributors πͺ
* ${contrib}


## Contact βοΈ
Find me on Github @ [${gitUser}](http://github.com/${gitUser})
* βοΈFor questions about this project please contact me @: ${email}.



 ## License
This project is open source and available under the ${lic}


    `;
}

module.exports = generateReadme;

