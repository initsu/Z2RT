const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

// Input and output file paths
const inputFilePath = path.join(__dirname, '../dist/index.html');
const outputFilePath = path.join(__dirname, '../dist/index.html');

// Read the original HTML file
fs.readFile(inputFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the input file:', err);
    return;
  }

  // Load the HTML into cheerio
  const $ = cheerio.load(data);

  // Move the script tag to the bottom of the body
  const scriptTag = $('script[type="module"]');
  scriptTag
    .removeAttr('type')
    .removeAttr('crossorigin')
    .attr('src', scriptTag.attr('src').replace('/assets/', 'assets/'))
    .appendTo('body');

  // Remove crossorigin from the stylesheet link and adjust the path
  const linkTag = $('link[rel="stylesheet"]');
  linkTag
    .removeAttr('crossorigin')
    .attr('href', linkTag.attr('href').replace('/assets/', 'assets/'));

  // Save the modified HTML
  fs.writeFile(outputFilePath, $.html(), 'utf8', (err) => {
    if (err) {
      console.error('Error writing the output file:', err);
      return;
    }
    console.log('HTML file has been successfully updated and saved to', outputFilePath);
  });
});
