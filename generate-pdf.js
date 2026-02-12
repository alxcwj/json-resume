#!/usr/bin/env node

const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

async function generatePDF() {
  const htmlPath = path.join(__dirname, 'resume.html');
  
  // Check if HTML file exists
  if (!fs.existsSync(htmlPath)) {
    console.error('Error: resume.html not found. Please generate it first.');
    process.exit(1);
  }

  console.log('Reading HTML file...');
  const html = fs.readFileSync(htmlPath, 'utf-8');

  console.log('Launching browser...');
  const browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  
  // Intercept font requests and serve from local files
  await page.route('**/fonts/**', async (route) => {
    const url = route.request().url();
    const fontName = url.split('/fonts/').pop();
    const fontPath = path.join(__dirname, 'public', 'fonts', fontName);
    
    if (fs.existsSync(fontPath)) {
      const fontData = fs.readFileSync(fontPath);
      await route.fulfill({
        status: 200,
        contentType: 'font/otf',
        body: fontData
      });
    } else {
      console.warn(`Warning: Font file not found: ${fontName}`);
      await route.abort();
    }
  });
  
  console.log('Setting content...');
  // Set base URL to current directory so font paths resolve correctly
  await page.goto(`file://${htmlPath}`, {
    waitUntil: 'networkidle'
  });

  console.log('Generating PDF...');
  const pdfPath = path.join(__dirname, 'Alex Chow - Resume.pdf');
  
  await page.pdf({
    path: pdfPath,
    format: 'Letter',
    printBackground: true,
    margin: {
      top: '0.5in',
      right: '0.5in',
      bottom: '0.5in',
      left: '0.5in'
    }
  });

  await browser.close();

  console.log(`\nPDF generated successfully!`);
  console.log(`Output: ${pdfPath}`);
  
  // Get file size
  const stats = fs.statSync(pdfPath);
  console.log(`Size: ${(stats.size / 1024).toFixed(2)} KB`);
}

generatePDF().catch(error => {
  console.error('Error generating PDF:', error);
  process.exit(1);
});
