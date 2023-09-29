const inquirer = require('inquirer');
const fs = require('fs');
const generateLogoSvg = require('./lib/shapes');

const promptUser = () => {
  inquirer
    .prompt([
      {
        name: 'text',
        message: 'Please enter up to three characters for the logo text',
        validate: (input) => {
          if (input.length > 3) {
            return 'Please only enter up to three characters.';
          }
          return true;
        },
      },
    
      {
        name: 'textColor',
        message: 'Please enter the color of your choosing for the logo text (or a hexadecimal number)',
        default: 'white',
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Please choose a shape for the logo:',
        choices: ['circle', 'triangle', 'square'],
      },
      {
        name: 'shapeColor',
        message: 'Please enter the color for the desired shape of your choosing (keyword or hexadecimal):',
        default: 'black',
      },
    ])
    .then((answers) => {
      const { text, textColor, shape, shapeColor } = answers;
      const svgTemplate = generateLogoSvg(text, textColor, shape, shapeColor);
      saveSvgToFile(svgTemplate);
    })
    .catch((error) => {
      console.log('An error occurred:', error);
    });
};

const saveSvgToFile = (svgTemplate) => {
  fs.writeFile('logo.svg', svgTemplate, (err) => {
    if (err) {
      console.log('Error while saving SVG file', err);
    } else {
      console.log('Generated logo.svg');
    };
  });
};

promptUser();