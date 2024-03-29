const{Builder, Key, Id, By} = require("selenium-webdriver");
const assert = require ("assert");
// built in node.js assertion (to validate the todo)
var should = require("chai").should();

//assertion : validate the state of our application
// to check the url is changed when sucessfully login or , check the item is sucessfull added to the cart 
// our eg: our todo list has added to the list or contain the correct text
// assertions: to confirm if a text passes or failes if our todo has been added or text is incorrect 
// our test will fail 
// if the todo has been added and text is has been expected then OUR TEST WILL PASS 

async function example(){
    //launch the browser
    let driver = await new Builder().forBrowser("chrome").build();

    //navigate to our application
    await driver.get("https://lambdatest.github.io/sample-todo-app/");

    //add  a todo
    await driver.findElement(By.id("sampletodotext")).sendKeys("Selenium", Key.RETURN);

    //assert
   let todoText =  await driver.findElement(By.xpath("//li[last()]")).getText().then(function(value){
    // we use .getText.then(function) with return, that value and store that in todoText 
        return value
    });

    //assert using node assertion
    assert.strictEqual(todoText,"Selenium");

    //assert using chai should
    todoText.should.equal("Selenium");

    await driver.sleep(5000);

    //close the browser
    await driver.quit();
};
example();
