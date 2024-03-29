const{Builder, Key, By, until} = require('selenium-webdriver');
 // const is constant we will not change any thing
// const{Builder, Key, By, until} means import these/the classes(builder,key) 
// from selenium-webdriver i am import builder , key and by..,

//async(is keyword) makes a function return a promise
// promise is a object , represents the event completion or
   //failure or sucess of an asyn operation and its resulting value in object format
//await (operator) function wait for a promise 
// writing the asyn function 
(async function example(){
    // declare/installing  the driver
    let driver =  await new Builder().forBrowser('chrome').build();

    // launch the brower
    try {
    await driver.manage().setTimeouts({implicit:10000});  

    await driver.get("https://www.google.com");
    
    const textarea = driver.findElement(By.name('q'));

    textarea.sendKeys('youtube.com');

    const form = await textarea.findElement(By.xpath('ancestor::form'));
    
    await form.submit();


    await driver.sleep(5000);

    } finally {
        await driver.quit();
    }

})();

