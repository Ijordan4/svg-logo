const createLogoSvg = require('./shapes');

describe('Logo Rendering Tests', () => {
  const logoConfigs = [
    {
      name: 'Triangle',
      textColor: 'blue',
      shape: 'triangle',
      shapeColor: 'blue',
      expectedSvg: '<polygon points="150,18 244,182 56,182" fill="blue" />',
    },
    {
      name: 'Circle',
      textColor: 'red',
      shape: 'circle',
      shapeColor: 'red',
      expectedSvg: '<circle cx="150" cy="100" r="50" fill="red" />',
    },
    {
      name: 'Square',
      textColor: 'green',
      shape: 'square',
      shapeColor: 'green',
      expectedSvg: '<rect x="100" y="50" width="100" height="100" fill="green" />',
    },
  ];

  logoConfigs.forEach((config) => {
    test(`${config.name} logo should render correctly`, () => {
      const logoSvg = createLogoSvg(config.name, config.textColor, config.shape, config.shapeColor);
      expect(logoSvg).toEqual(config.expectedSvg);
    });
  });
});