const createLogoSvg = (text, textColor, shape, shapeColor) => {
  const shapeMap = {
    circle: `<circle cx="150" cy="100" r="50" fill="${shapeColor}"></circle>`,
    triangle: `<polygon points="150,50 100,150 200,150" fill="${shapeColor}"></polygon>`,
    square: `<rect x="100" y="50" width="100" height="100" fill="${shapeColor}"></rect>`,
  };

  const shapeElement = shapeMap[shape] || '';

  const svgTemplate = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${shapeElement}
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>
  `;

  return svgTemplate;
};

module.exports = createLogoSvg;