const pupperteer = require('puppeteer');

(async () => {
    console.log('lanzamos navegador');
    const browser = await pupperteer.launch({headless:false, executablePath: '/usr/bin/chromium-browser'});
    const page = await browser.newPage();
    await page.goto('https://es.wikipedia.org/wiki/Node.js');
    let title1 = await page.evaluate(()=>{
        const h1 = document.querySelector('h1');
        console.log(h1.innerHTML);
    })
    console.log('Cerramos navegador...');
    /* browser.close(); */
    console.log('Navegador cerrado');
})();