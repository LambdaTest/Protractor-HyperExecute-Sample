var path = require('path'),
    remote = require('selenium-webdriver/remote');
const { element } = require('protractor');

describe("File upload test", function () {
    beforeEach(function () {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
        browser.waitForAngularEnabled(false)
        browser.setFileDetector(new remote.FileDetector());
        browser.get("https://lambdatest.github.io/sample-todo-app/");

    });

    it("should upload an image", function () {
        browser.get("https://demo.guru99.com/test/upload/");

        var input = element(by.css("#uploadfile_0")),
            uploadedThumbnail = $("#uploadfile_0");

        // no image displayed
        expect(uploadedThumbnail.isDisplayed()).toBe(true);

        // assuming you have "test.jpg" right near the spec itself
        input.sendKeys(path.resolve('sonGoku.jpg'));

        // there is a little uploaded image displayed
        expect(uploadedThumbnail.isDisplayed()).toBe(true);


    });
});