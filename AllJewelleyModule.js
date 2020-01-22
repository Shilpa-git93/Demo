var utils=require("../../node_modules/bibhuti-framework/Utils.js");
var baseLib=require("../../node_modules/bibhuti-framework/BaseLib.js");
var validation=require("../../node_modules/bibhuti-framework/Validations.js");
var webdrivermethod=require("../../node_modules/bibhuti-framework/WebdriverioV4GenericMethods.js");
var exceptionvar=require("../../node_modules/bibhuti-framework/ScriptReusableMethods.js");
var homePage=require("../../pom/BlueStoneHomePO.js");
var kadapage=require("../../pom/KadaPO.js")



describe("module-2",function () {
    var flag;
    var err;
    beforeEach(function () {
        flag = true
        try {
            baseLib.loadUrl(utils.propertiesReading("./properties/config.properties", "url"))
           validation.expectValidation(utils.propertiesReading("./properties/config.properties", "url"), webdrivermethod.gettingUrl())
            validation.expectValidation(utils.jsonRead("./json/TestData.json", "TC_001")[0], webdrivermethod.gettingTitle())
            console.log("--------------------------------------------------------------------")
           webdrivermethod.scrollBy("//span[.='JEWELLERY GUIDE']",33);
            browser.pause(1000)


        }
        catch (e) {
            flag = false;
            err = e;


        }
    })
    xit(utils.excelReadBasedOnTestCaseID("./excel/TestScriptScenario.xlsx", "Scenario", "TC_002")[1], function () {
       // utils.propertiesReading("./properties/config.properties","url")
        exceptionvar.exception(flag,err);
        webdrivermethod.moveToElement(homePage.getEleAllJewelleryLink);
        browser.pause(2000)
        webdrivermethod.clicking(homePage.getEleKadasLink)
        browser.pause(2000)
        webdrivermethod.clicking(kadapage.getEleBangleImg)
        browser.pause(2000)
       // var wh= webdrivermethod.getWindowHandles()
       //  console.log(wh);
        webdrivermethod.switchToWindow(1);
        browser.pause(5000);
        console.log( webdrivermethod.gettingTitle())
        webdrivermethod.clicking(kadapage.getEleBuyNowBtn)

        browser.pause(3000);
        var buyTitle=webdrivermethod.gettingTitle()
        validation. expectValidation(utils.propertiesReading("./properties/config.properties","buyNowTitle"),buyTitle)
    })
    xit(utils.excelReadBasedOnTestCaseID("./excel/TestScriptScenario.xlsx", "Scenario", "TC_002")[1], function () {
        utils.propertiesReading("./properties/config.properties","url")
        exceptionvar.exception(flag,err);
        webdrivermethod.moveToElement(homePage.getEleAllJewelleryLink);
        browser.pause(2000)
        webdrivermethod.clicking(homePage.getEleKadasLink)
        browser.pause(2000)
        webdrivermethod.clicking(kadapage.getEleBangleImg)
        browser.pause(2000)
        console.log("**********************")
        var wh= webdrivermethod.getWindowHandles()
         console.log(wh);
       browser.switchTab(wh.value[1])

       // webdrivermethod.switchToWindow(2);
        browser.pause(5000);
        console.log( webdrivermethod.gettingTitle())
        webdrivermethod.clicking(kadapage.getEleSelectSizeButton)
        webdrivermethod.clicking(kadapage.getEleSelectSize)
        webdrivermethod.clicking(kadapage.getEleBuyNowBtn)
        browser.pause(3000);
        var buyTitle=webdrivermethod.gettingTitle()
        validation. expectValidation(utils.propertiesReading("./properties/config.properties","buyNowTitle"),buyTitle)
 })
})