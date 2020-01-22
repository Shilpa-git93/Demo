var utils=require("../../node_modules/bibhuti-framework/Utils.js");
var baseLib=require("../../node_modules/bibhuti-framework/BaseLib.js");
var validation=require("../../node_modules/bibhuti-framework/Validations.js");
var webdrivermethod=require("../../node_modules/bibhuti-framework/WebdriverioV4GenericMethods.js");
var exceptionvar=require("../../node_modules/bibhuti-framework/ScriptReusableMethods.js");
var homePage=require("../../pom/BlueStoneHomePO.js");
var coinPage=require("../../pom/CoinPO.js");

describe("module-3",function () {
    var flag;
    var err;
    beforeEach(function () {
        flag = true
        try {
            baseLib.loadUrl(utils.propertiesReading("./properties/config.properties", "url"))
            validation.expectValidation(utils.propertiesReading("./properties/config.properties", "url"), webdrivermethod.gettingUrl())
            validation.expectValidation(utils.jsonRead("./json/TestData.json", "TC_001")[0], webdrivermethod.gettingTitle())


        }
        catch (e) {
            flag = false;
            err = e;


        }
    })
    it(utils.excelReadBasedOnTestCaseID("./excel/TestScriptScenario.xlsx", "Scenario", "TC_003")[1], function () {
        // utils.propertiesReading("./properties/config.properties","url")
        exceptionvar.exception(flag, err);
        webdrivermethod.moveToElement(homePage.getEleCoinsLink);
        webdrivermethod.clicking(coinPage.getEle2gramlink);


    })
})

