#!/usr/bin/env node

const theme = require('./index.js');
const resume = require('./resume.json');
const fs = require('fs');

console.log('Generating HTML...');
const html = theme.render(resume);

fs.writeFileSync('resume.html', html, 'utf-8');
console.log('HTML generated: resume.html');
console.log(`Size: ${(html.length / 1024).toFixed(2)} KB`);
