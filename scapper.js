const baseUrl = "https://leetcode.com/"
const puppeteer = require('puppeteer');

async function signIn(url){
	// this is the function to perform signIn
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto(url);
	const [signIn] = await page.$x('//*[@id="landing-page-app"]/div/div[1]/div[3]/div[1]/div/div/div[2]/div/a[5]/span');
	const signInPage = page.click(signIn,'left')
	
}

scrapeLeetCode(baseUrl)