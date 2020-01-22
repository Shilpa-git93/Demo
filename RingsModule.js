var utils=require("../../node_modules/bibhuti-framework/Utils.js");

var baseLib=require("../../node_modules/bibhuti-framework/BaseLib.js");
var validation=require("../../node_modules/bibhuti-framework/Validations.js");
var webdrivermethod=require("../../node_modules/bibhuti-framework/WebdriverioV4GenericMethods.js");
var exceptionvar=require("../../node_modules/bibhuti-framework/ScriptReusableMethods.js");
var homePage=require("../../pom/BlueStoneHomePO.js");
var diamondPage=require("../../pom/DiamonPO.js");


describe("module-1",function () {
    var flag;
    var err;
    beforeEach(function () {
        flag=true
        try{
             baseLib.loadUrl(utils.propertiesReading("./properties/config.properties","url"))
             validation.expectValidation(utils.propertiesReading("./properties/config.properties","url"),webdrivermethod.gettingUrl())
            validation.expectValidation(utils.jsonRead("./json/TestData.json","TC_001")[0],webdrivermethod.gettingTitle())


        }
        catch(e)
        {
            flag=false;
            err=e;


        }
    })
    it(utils.excelReadBasedOnTestCaseID("./excel/TestScriptScenario.xlsx","Scenario","TC_001")[1],function () {

        var text=[];
        var ringsTextArray=[];
        var originalPrice=[];
        var originalPriceArray=[];
        var sortedPriceArray=[];
        exceptionvar.exception(flag,err);
        webdrivermethod.moveToElement(homePage.getEleRingsLink);
        browser.pause(2000);
        webdrivermethod.clicking(homePage.getEleDiamondLink);
        browser.pause(2000)
        //validation.expectValidation(utils.jsonRead("./json/TestData.json","TC_001")[1],webdrivermethod.gettingTitle())
        webdrivermethod.moveToElement(diamondPage.getElePopularLink);
        webdrivermethod.clicking(diamondPage.getElePriceLowToHighLink);
        // console.log(diamondPage.getElementsAfterLowToHigh);

        var allRings=diamondPage.getElementsAfterLowToHigh;
        // console.log(allRings);

         var ringsCount=allRings.value.length;
         console.log(ringsCount)

        for (var i=0;i<ringsCount;i++)
         {
             var text=allRings.value[i].getText();
             var  ringText=text.replace(",","")
             ringsTextArray[i]=ringText.replace("RS. ","")
         }
        // console.log(ringsTextArray)
        for (var i=0;i<ringsTextArray.length;i++)
        {
            originalPrice[i]=Number(ringsTextArray[i]);
            originalPriceArray[i]=Number(ringsTextArray[i])

        }

        // console.log(originalPrice);

         function mySort(a,b) {
             return a-b;
         }
          var sortedPrice=originalPrice.sort(mySort);
         console.log(sortedPrice)
        //  var rev=sortedPrice.reverse();
        //  console.log("*****************************************************")
        //  console.log(rev);
        //
        // console.log(originalPriceArray);
         for (var i=0;i<ringsTextArray.length;i++)
         {
             validation.expectValidation(String(sortedPriceArray[i]),String(originalPriceArray[i]));

            }
    })

    xit('Verification',function () {
        console.log("Welcome");
        var x=[1,2,3];
        var y=[1,2,3];
        validation.expectValidation(x,y)


    })
})