const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');
const chrome = require('selenium-webdriver/chrome');
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

describe('Google Search Test', function () {
    let driver;
    
    // Visit & Login ke web Saucedemo 
    it('Visit & Login SauceDemo', async function () {
        driver = await new Builder().forBrowser('chrome').build();
        await driver.get('https://www.saucedemo.com');
        
        //Input field untuk Login
        let inputUsername = await driver.findElement(By.css('[data-test="username"]'))
        let inputPassword = await driver.findElement(By.xpath('//*[@data-test="password"]'))
        let buttonLogin = await driver.findElement(By.className('submit-button btn_action'))
        
        //Action untuk Login
        await inputUsername.sendKeys('standard_user')
        await inputPassword.sendKeys('secret_sauce')
        await buttonLogin.click()

        //menampilkan elemen 
        let buttonCart = await driver.wait(
            until.elementLocated(By.xpath('//*[@data-test="shopping-cart-link"]')), 
            10000
        );
        await driver.wait(until.elementIsVisible(buttonCart), 500000, 'Berhasil Login Shopping cart tampil');

        // Assert
        await buttonCart.isDisplayed()
    })

    //Sort Z to A
    it('Sort Z-A', async function () {
        //Sort Z-A
        let Header1 = await driver.findElement(By.xpath('//*[@id="header_container"]/div[2]/div/span'))
        let Header2 = await driver.findElement(By.xpath('//*[@id="header_container"]/div[2]/div/span/select')) 
        let dropdownSortAtoZ = await driver.findElement(By.xpath('//*[@id="header_container"]/div[2]/div/span/select/option[2]'))
            
        //Action Sort
        await Header1.click()
        await Header2.click()
        await dropdownSortAtoZ.click()    
        await delay(1000) // Jeda 1 detik
    })

    //Sort A to Z
    it('Sort A-Z', async function () {
        let Header1 = await driver.findElement(By.xpath('//*[@id="header_container"]/div[2]/div/span'))
        let Header2 = await driver.findElement(By.xpath('//*[@id="header_container"]/div[2]/div/span/select')) 
        let dropdownSortAtoZ = await driver.findElement(By.xpath('//*[@id="header_container"]/div[2]/div/span/select/option[1]'))
            
        //Action Sort
        await Header1.click()
        await Header2.click()
        await dropdownSortAtoZ.click()    
        await delay(1000) // Jeda 1 detik
        await driver.quit();
    })

});