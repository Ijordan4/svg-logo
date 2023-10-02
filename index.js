const inquirer = require('inquirer');
const fs = require('fs');

const generateLogo = require('./lib/shapes');

const getUserInput = async () => {
  try {
    const userInput = await inquirer.prompt([
      {
        name: 'logoText',
        message: 'Enter up to three characters for your logo text:',
        validate: (input) => input.length <= 3 || 'Please enter up to three characters.',
      },
      {
        name: 'textColor',
        message: 'Choose a color for the logo text (color name or hexadecimal code):',
        default: 'white',
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Select a shape for your logo:',
        choices: ['circle', 'triangle', 'square'],
      },
      {
        name: 'shapeColor',
        message: 'Enter the color for your chosen shape (color name or hexadecimal code):',
        default: 'black',
      },
    ]);

    const { logoText, textColor, shape, shapeColor } = userInput;
    const logoSvg = generateLogo(logoText, textColor, shape, shapeColor);
    saveSvgToFile(logoSvg);
  } catch (error) {
    console.error('An error occurred:', error);
  }
};

const saveSvgToFile = (svgTemplate) => {
  fs.writeFile('logo.svg', svgTemplate, (err) => {
    if (err) {
      console.error('Error while saving the SVG file:', err);
    } else {
      console.log('Logo saved as logo.svg');
    }
  });
};

getUserInput();