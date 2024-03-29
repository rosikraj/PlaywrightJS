const { Builder, Key, Id, By } = require("selenium-webdriver");
var should = require("chai").should();

//describe block 
describe("add another todo tests", function () {
    //it block
    it("sucessfully adds another todo to application", async function () {
        //launch the browser
        let driver = await new Builder().forBrowser("chrome").build();

        //navigate to our application
        await driver.get("https://lambdatest.github.io/sample-todo-app/");

        //add  a todo
        await driver.findElement(By.id("sampletodotext")).sendKeys("Selenium", Key.RETURN);

        //assert
        let todoText = await driver.findElement(By.xpath("//li[last()]")).getText().then(function (value) {
            // we use .getText.then(function) with return, that value and store that in todoText 
            return value
        });
        //assert using chai should
        todoText.should.equal("Selenium");

        await driver.sleep(5000);

        //close the browser
        await driver.quit();

    });
    

});