const puppeteer = require('puppeteer');

async function getNews(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(url);
    const h1 = await page.evaluate(() => {
        return document.querySelector('h1.header-title').innerText;
    });

    const body = await page.evaluate(() => {
        return document.querySelector('section.body').innerText;
    });

    await browser.close();

    console.log(h1);
    console.log(body);
}
getNews('https://www.expressnews.com/food/recipes-cooking/article/Cooking-with-Paul-Deco-District-H-E-B-has-a-14998760.php')
