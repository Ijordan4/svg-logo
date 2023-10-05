const createLogoSvg = (text, textColor, shape, shapeColor) => {
  const shapeMap = {
    circle: () => `<circle cx="120" cy="80" r="60" fill="${shapeColor}"></circle>`,
    triangle: () => `<polygon points="120,30 60,150 180,150" fill="${shapeColor}"></polygon>`,
    square: () => `<rect x="90" y="50" width="120" height="120" fill="${shapeColor}"></rect>`,
  };

  const shapeElementGenerator = shapeMap[shape] || (() => '');

  const svgTemplate = `
    <svg width="240" height="160" xmlns="http://www.w3.org/2000/svg">
      ${shapeElementGenerator()}
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>
  `;

  return svgTemplate;
};

module.exports = createLogoSvg;