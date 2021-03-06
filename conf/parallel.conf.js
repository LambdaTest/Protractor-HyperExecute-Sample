username= process.env.LT_USERNAME || "<your username>",
accessKey=  process.env.LT_ACCESS_KEY || "<your accessKey>",

exports.config = {
  'specs': [ '../specs/*.js' ],

  seleniumAddress: 'https://'+username+':'+accessKey+'@hub.lambdatest.com/wd/hub',

  'commonCapabilities': {
    'build': 'protractor-selenium-sample Chrome',
    'tunnel': false
  },

  multiCapabilities: [{
    browserName: 'firefox',
    version:'latest',
    platform: 'Windows 10'
  },{
    browserName: 'Chrome',
    version:'latest',
    platform: 'macOS Mojave'
  },{
    browserName: 'MicrosoftEdge',
    version:'latest',
    platform: 'Windows 10'
  },{
    browserName: 'Firefox',
    version:'latest',
    platform: 'Windows 10'
  },{
    browserName: 'IE',
    version:'latest',
    platform: 'Windows 10'
  }],

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
    jasmine.getEnv().addReporter(myReporter);
},
  onComplete: () => {
    browser.quit();
  }

};

// Code to support common capabilities
exports.config.multiCapabilities.forEach(function(caps){
  for(var i in exports.config.commonCapabilities) caps[i] = caps[i] || exports.config.commonCapabilities[i];
});
