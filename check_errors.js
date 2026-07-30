import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  
  page.on('console', msg => {
    if (msg.type() === 'error') {
      console.log('BROWSER ERROR CONSOLE:', msg.text());
    }
  });
  page.on('pageerror', err => console.log('BROWSER PAGEERROR:', err.toString()));
  
  try {
    console.log("Navigating to http://localhost:5174 ...");
    await page.goto('http://localhost:5174', { waitUntil: 'networkidle2', timeout: 5000 });
  } catch (e) {
    console.log("Failed 5174, trying 5173 ...");
    try {
      await page.goto('http://localhost:5173', { waitUntil: 'networkidle2', timeout: 5000 });
    } catch (e2) {
      console.log("Failed 5173 too:", e2.toString());
    }
  }
  
  await new Promise(r => setTimeout(r, 2000));
  
  // Try to simulate hover on the first advantage to trigger the error if it's on hover
  try {
    await page.evaluate(() => {
      const els = document.querySelectorAll('.group.relative.rounded-xl.p-5');
      if(els.length > 1) {
         els[1].dispatchEvent(new MouseEvent('mouseenter', {bubbles: true}));
      }
    });
    await new Promise(r => setTimeout(r, 1000));
  } catch(e) {}
  
  await browser.close();
})();
