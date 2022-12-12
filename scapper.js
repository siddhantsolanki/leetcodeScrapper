const baseUrl = "https://leetcode.com/accounts/login/"
const puppeteer = require('puppeteer');
const userName = "testUser"
const password = "testPassword"

async function signIn(url){
	const browser = await puppeteer.launch({headless : false});
	const page = await browser.newPage();
	await page.goto(url);
	await page.waitForSelector('.input__2o8B')
	const [userNameField] = await page.$x('//*[@id="id_login"]')
	await userNameField.type(userName)
	const [passwordField] = await page.$x('//*[@id="id_password"]')
	await passwordField.type(password)
	
	await page.evaluate(() => {
		document.querySelector('#signin_btn > div').click();
	});
	await page.waitForSelector('#navbar-right-container > div:nth-child(3) > a')
	const streakValue = await page.evaluate(() => document.querySelector('#navbar-right-container > div:nth-child(3) > a > span').innerHTML)
	console.log(streakValue) // streak value printed
}

signIn(baseUrl)