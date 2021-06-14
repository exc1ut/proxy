const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  for(let i=0;i<517;i++){
      console.log('here',i);
      await page.goto('https://www.olx.uz/d/obyavlenie/novyy-hp-elitebook-830-g7-i7-10510u-16gb-ddr4-256gb-pcie-ssd-ID2pv6W.html');
  }

  await browser.close();
})();