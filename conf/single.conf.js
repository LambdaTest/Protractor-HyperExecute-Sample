username= process.env.LT_USERNAME || "<your username>",
accessKey=  process.env.LT_ACCESS_KEY || "<your accessKey>",
browserparam = process.argv[3].substring(10,process.argv[3].length),

console.log('--------------------------------------', browserparam),
jasmineReporters = require('jasmine-reporters');


exports.config = {

    'specs': ["../specs/single.js" , "../specs/fileupload.js"],

  seleniumAddress: 'https://'+ username +':'+ accessKey  +'@hub.lambdatest.com/wd/hub',

  'capabilities': {
    'build': 'protractor-LambdaTest-Single-build',
    'browserName': browserparam,
    'version':'latest-1',
    'platform': 'Windows 10',
  },
  onPrepare: () => {

    myReporter = {
        specStarted: function(result) {
          specStr= result.id
          spec_id = parseInt(specStr[specStr.length -1])
          browser.getProcessedConfig().then(function (config) {
            var fullName = config.specs[spec_id];
            browser.executeScript("lambda-name="+fullName.split(/(\\|\/)/g).pop())
          });
        },
        specDone: function(result) {
          browser.executeScript("lambda-status="+result.status);
        }
      };
      jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
      consolidateAll: true,
      savePath: './',
      filePrefix: 'xmlresults'
      }));
  },
  onComplete: () => {
    var browserName, browserVersion;
     var capsPromise = browser.getCapabilities();

     capsPromise.then(function (caps) {
        browserName = caps.get('browserName');
        browserVersion = caps.get('version');
        platform = caps.get('platform');

        var HTMLReport = require('protractor-html-reporter-2');

        testConfig = {
            reportTitle: 'Protractor Test Execution Report',
            outputPath: './',
            outputFilename: 'ProtractorTestReport',
            screenshotPath: './screenshots',
            testBrowser: browserName,
            browserVersion: browserVersion,
            modifiedSuiteName: false,
            screenshotsOnlyOnFailure: true,
            testPlatform: platform
        };
        new HTMLReport().from('xmlresults.xml', testConfig);
    });
    browser.quit();
  }

};
