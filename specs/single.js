describe('TestMu AI Selenium Playground', function () {

    it('should enter a message and verify it', function () {

        browser.waitForAngularEnabled(false);

        browser.get('https://testmuai.com/selenium-playground/simple-form-demo');

        var EC = protractor.ExpectedConditions;

        var input = element(by.id('user-message'));

        browser.wait(
            EC.visibilityOf(input),
            10000,
            'Input box not visible'
        );

        input.sendKeys('Hello TestMu AI');

        var button = element(by.xpath("//button[contains(text(),'Get Checked Value')]"));

        button.click();

        var output = element(by.id('message'));

        browser.wait(
            EC.textToBePresentInElement(output, 'Hello TestMu AI'),
            10000,
            'Message not displayed'
        );

        expect(output.getText()).toEqual('Hello TestMu AI');
    });

});