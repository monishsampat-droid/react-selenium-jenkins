const { Builder, By } = require('selenium-webdriver');
const { expect } = require('chai');

describe('React Selenium Tests', function () {
    this.timeout(30000);

    let driver;

    before(async function () {
        driver = await new Builder()
            .forBrowser('chrome')
            .build();
    });

    after(async function () {
        if (driver) {
            await driver.quit();
        }
    });

    it('should display the React application title', async function () {
        await driver.get('http://localhost:3000');

        const heading = await driver.findElement(By.tagName('h1'));
        const text = await heading.getText();

        expect(text).to.equal('React Selenium Jenkins');
    });

    it('should display and click the button', async function () {
        await driver.get('http://localhost:3000');

        const button = await driver.findElement(By.xpath("//button[text()='Click Me']"));

        expect(await button.isDisplayed()).to.be.true;

        await button.click();
    });
});