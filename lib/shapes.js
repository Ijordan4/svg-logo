const generateLogoSvg = (text, textColor, shape, shapeColor) => {
    let shapeElement;
  
    if (shape === 'circle') {
      shapeElement = '<circle cx="150" cy="100" r="50" fill="' + shapeColor + '"></circle>';
    } else if (shape === 'triangle') {
      shapeElement = '<polygon points="150,50 100,150 200,150" fill="' + shapeColor + '"></polygon>';
    } else if (shape === 'square') {
      shapeElement = '<rect x="100" y="50" width="100" height="100" fill="' + shapeColor + '"></rect>';
    } else {
      shapeElement = '';
    }
  
    const svgTemplate = '<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">' +
      shapeElement +
      '<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="' + textColor + '">' + text + '</text>' +
      '</svg>';
  
    return svgTemplate;
  };
  
  module.exports = generateLogoSvg;