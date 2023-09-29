const generateLogoSvg = require('./shapes');

describe('Shape rendering', () =>{
  test('Triangle render method should generate the correct SVG code', () => {
    const svgCode = generateLogoSvg('Triangle', 'blue', 'triangle', 'blue');
    expect(svgCode).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

});
test('Circle render method should generate the correct SVG code', () => {
  const svgCode = generateLogoSvg('Circle', 'red', 'circle', 'red');
  expect(svgCode).toEqual('<circle cx="150" cy="100" r="50" fill="red" />');
});
test('Square render method should generate the correct SVG code', () => {
  const svgCode = generateLogoSvg('Square', 'green', 'square', 'green');
  expect(svgCode).toEqual('<rect x="100" y="50" width="100" height="100" fill="green" />');
});
});