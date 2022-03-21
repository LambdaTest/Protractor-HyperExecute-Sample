beforeEach(function() {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
});
describe('Add todo Lists', function () {
    browser.ignoreSynchronization = true;

    it('Add Customer Test', function () {


        browser.get('https://lambdatest.github.io/sample-todo-app/');

        browser.driver.findElement(by.name('li1')).then(function (foundElement) {
            foundElement.click();
        });

        browser.driver.findElement(by.name('li2')).then(function (foundElement) {
            foundElement.click();
        });
        browser.driver.findElement(by.name('li3')).then(function (foundElement) {
            foundElement.click();
        });

        browser.driver.findElement(by.name('li4')).then(function (foundElement) {
            foundElement.click();
        });
        browser.driver.findElement(by.name('li5')).then(function (foundElement) {
            foundElement.click();
        });
        browser.driver.findElement(by.id('sampletodotext')).then(function (foundElement) {
            foundElement.clear();
            foundElement.sendKeys("Yey, Let's add it to list");
        });

        browser.driver.findElement(by.id('addbutton')).then(function (foundElement) {
            foundElement.click();
        });

        browser.driver.findElement(by.name('li6')).then(function (foundElement) {
            foundElement.click();
        });
        browser.driver.findElement(by.id('sampletodotext')).then(function (foundElement) {
            foundElement.clear();
            foundElement.sendKeys("Yey, Let's add it to list");
        });

        browser.driver.findElement(by.id('addbutton')).then(function (foundElement) {
            foundElement.click();
        });

        browser.driver.findElement(by.name('li7')).then(function (foundElement) {
            foundElement.click();
        });
        browser.driver.findElement(by.id('sampletodotext')).then(function (foundElement) {
            foundElement.clear();
            foundElement.sendKeys("Yey, Let's add it to list");
        });

        browser.driver.findElement(by.id('addbutton')).then(function (foundElement) {
            foundElement.click();
        });

        browser.driver.findElement(by.name('li8')).then(function (foundElement) {
            foundElement.click();
        });
        browser.driver.findElement(by.id('sampletodotext')).then(function (foundElement) {
            foundElement.clear();
            foundElement.sendKeys("Yey, Let's add it to list");
        });

        browser.driver.findElement(by.id('addbutton')).then(function (foundElement) {
            foundElement.click();
        });

        browser.driver.findElement(by.name('li9')).then(function (foundElement) {
            foundElement.click();
        });
        browser.driver.findElement(by.id('sampletodotext')).then(function (foundElement) {
            foundElement.clear();
            foundElement.sendKeys("Yey, Let's add it to list");
        });

        browser.driver.findElement(by.id('addbutton')).then(function (foundElement) {
            foundElement.click();
        });

        browser.driver.findElement(by.name('li10')).then(function (foundElement) {
            foundElement.click();
        });
        browser.driver.findElement(by.id('sampletodotext')).then(function (foundElement) {
            foundElement.clear();
            foundElement.sendKeys("Yey, Let's add it to list");
        });

        browser.driver.findElement(by.id('addbutton')).then(function (foundElement) {
            foundElement.click();
        });

        browser.driver.findElement(by.name('li11')).then(function (foundElement) {
            foundElement.click();
        });
        browser.driver.findElement(by.id('sampletodotext')).then(function (foundElement) {
            foundElement.clear();
            foundElement.sendKeys("Yey, Let's add it to list");
        });

        browser.driver.findElement(by.id('addbutton')).then(function (foundElement) {
            foundElement.click();
        });

        browser.driver.findElement(by.name('li12')).then(function (foundElement) {
            foundElement.click();
        });
        browser.driver.findElement(by.id('sampletodotext')).then(function (foundElement) {
            foundElement.clear();
            foundElement.sendKeys("Yey, Let's add it to list");
        });

        browser.driver.findElement(by.id('addbutton')).then(function (foundElement) {
            foundElement.click();
        });

        browser.driver.findElement(by.name('li13')).then(function (foundElement) {
            foundElement.click();
        });
        browser.driver.findElement(by.id('sampletodotext')).then(function (foundElement) {
            foundElement.clear();
            foundElement.sendKeys("Yey, Let's add it to list");
        });

        browser.driver.findElement(by.id('addbutton')).then(function (foundElement) {
            foundElement.click();
        });

        browser.driver.findElement(by.name('li14')).then(function (foundElement) {
            foundElement.click();
        });
         browser.driver.findElement(by.id('sampletodotext')).then(function (foundElement) {
            foundElement.clear();
            foundElement.sendKeys("Yey, Let's add it to list");
        });

        browser.driver.findElement(by.id('addbutton')).then(function (foundElement) {
            foundElement.click();
        });

        browser.driver.findElement(by.name('li15')).then(function (foundElement) {
            foundElement.click();
        });
        browser.driver.findElement(by.id('sampletodotext')).then(function (foundElement) {
            foundElement.clear();
            foundElement.sendKeys("Yey, Let's add it to list");
        });

        browser.driver.findElement(by.id('addbutton')).then(function (foundElement) {
            foundElement.click();
        });

        browser.driver.findElement(by.name('li16')).then(function (foundElement) {
            foundElement.click();
        });
        browser.driver.findElement(by.id('sampletodotext')).then(function (foundElement) {
            foundElement.clear();
            foundElement.sendKeys("Yey, Let's add it to list");
        });

        browser.driver.findElement(by.id('addbutton')).then(function (foundElement) {
            foundElement.click();
        });

        browser.driver.findElement(by.name('li17')).then(function (foundElement) {
            foundElement.click();
        });
        browser.driver.findElement(by.id('sampletodotext')).then(function (foundElement) {
            foundElement.clear();
            foundElement.sendKeys("Yey, Let's add it to list");
        });

        browser.driver.findElement(by.id('addbutton')).then(function (foundElement) {
            foundElement.click();
        });

        browser.driver.findElement(by.name('li18')).then(function (foundElement) {
            foundElement.click();
        });
        browser.driver.findElement(by.id('sampletodotext')).then(function (foundElement) {
            foundElement.clear();
            foundElement.sendKeys("Yey, Let's add it to list");
        });

        browser.driver.findElement(by.id('addbutton')).then(function (foundElement) {
            foundElement.click();
        });

        browser.driver.findElement(by.name('li19')).then(function (foundElement) {
            foundElement.click();
        });
        browser.driver.findElement(by.id('sampletodotext')).then(function (foundElement) {
            foundElement.clear();
            foundElement.sendKeys("Yey, Let's add it to list");
        });

        browser.driver.findElement(by.id('addbutton')).then(function (foundElement) {
            foundElement.click();
        });
        browser.driver.findElement(by.name('li20')).then(function (foundElement) {
            foundElement.click();
        });
        browser.driver.findElement(by.id('sampletodotext')).then(function (foundElement) {
            foundElement.clear();
            foundElement.sendKeys("Yey, Let's add it to list");
        });

        browser.driver.findElement(by.id('addbutton')).then(function (foundElement) {
            foundElement.click();
        });
        browser.driver.findElement(by.name('li21')).then(function (foundElement) {
            foundElement.click();
        });
        browser.driver.findElement(by.id('sampletodotext')).then(function (foundElement) {
            foundElement.clear();
            foundElement.sendKeys("Yey, Let's add it to list");
        });

        browser.driver.findElement(by.id('addbutton')).then(function (foundElement) {
            foundElement.click();
        });
        browser.driver.findElement(by.name('li22')).then(function (foundElement) {
            foundElement.click();
        });
        browser.driver.findElement(by.id('sampletodotext')).then(function (foundElement) {
            foundElement.clear();
            foundElement.sendKeys("Yey, Let's add it to list");
        });

        browser.driver.findElement(by.id('addbutton')).then(function (foundElement) {
            foundElement.click();
        });
        browser.driver.findElement(by.name('li23')).then(function (foundElement) {
            foundElement.click();
        });
        browser.driver.findElement(by.id('sampletodotext')).then(function (foundElement) {
            foundElement.clear();
            foundElement.sendKeys("Yey, Let's add it to list");
        });

        browser.driver.findElement(by.id('addbutton')).then(function (foundElement) {
            foundElement.click();
        });

        browser.driver.findElement(by.name('li24')).then(function (foundElement) {
            foundElement.click();
        });
        browser.driver.findElement(by.id('sampletodotext')).then(function (foundElement) {
            foundElement.clear();
            foundElement.sendKeys("Yey, Let's add it to list");
        });

        browser.driver.findElement(by.id('addbutton')).then(function (foundElement) {
            foundElement.click();
        });

        browser.driver.findElement(by.name('li25')).then(function (foundElement) {
            foundElement.click();
        });
        browser.driver.findElement(by.id('sampletodotext')).then(function (foundElement) {
            foundElement.clear();
            foundElement.sendKeys("Yey, Let's add it to list");
        });

        browser.driver.findElement(by.id('addbutton')).then(function (foundElement) {
            foundElement.click();
        });

        browser.driver.findElement(by.name('li26')).then(function (foundElement) {
            foundElement.click();
        });
        var foo = element(by.xpath('//html/body/div/div/div/ul/li[6]/span'));
        expect(foo.getText()).toEqual("Yey, Let's add it to list");

        browser.driver.findElement(by.name('li26')).then(function (foundElement) {
            foundElement.click();
        });
        browser.driver.findElement(by.id('sampletodotext')).then(function (foundElement) {
            foundElement.clear();
            foundElement.sendKeys("Yey, Let's add it to list");
        });

        browser.driver.findElement(by.id('addbutton')).then(function (foundElement) {
            foundElement.click();
        });

        browser.driver.findElement(by.name('li27')).then(function (foundElement) {
            foundElement.click();
        });
        browser.driver.findElement(by.id('sampletodotext')).then(function (foundElement) {
            foundElement.clear();
            foundElement.sendKeys("Yey, Let's add it to list");
        });

        browser.driver.findElement(by.id('addbutton')).then(function (foundElement) {
            foundElement.click();
        });
        browser.driver.findElement(by.name('li28')).then(function (foundElement) {
            foundElement.click();
        });
        browser.driver.findElement(by.id('sampletodotext')).then(function (foundElement) {
            foundElement.clear();
            foundElement.sendKeys("Yey, Let's add it to list");
        });

        browser.driver.findElement(by.id('addbutton')).then(function (foundElement) {
            foundElement.click();
        });
        browser.driver.findElement(by.name('li29')).then(function (foundElement) {
            foundElement.click();
        });
        browser.driver.findElement(by.id('sampletodotext')).then(function (foundElement) {
            foundElement.clear();
            foundElement.sendKeys("Yey, Let's add it to list");
        });

        browser.driver.findElement(by.id('addbutton')).then(function (foundElement) {
            foundElement.click();
        });


        browser.driver.findElement(by.name('li30')).then(function (foundElement) {
            foundElement.click();
        });
        browser.driver.findElement(by.id('sampletodotext')).then(function (foundElement) {
            foundElement.clear();
            foundElement.sendKeys("Yey, Let's add it to list");
        });

        browser.driver.findElement(by.id('addbutton')).then(function (foundElement) {
            foundElement.click();
        });
        browser.driver.findElement(by.name('li31')).then(function (foundElement) {
            foundElement.click();
        });
        browser.driver.findElement(by.id('sampletodotext')).then(function (foundElement) {
            foundElement.clear();
            foundElement.sendKeys("Yey, Let's add it to list");
        });

        browser.driver.findElement(by.id('addbutton')).then(function (foundElement) {
            foundElement.click();
        });
        browser.driver.findElement(by.name('li32')).then(function (foundElement) {
            foundElement.click();
        });
        browser.driver.findElement(by.id('sampletodotext')).then(function (foundElement) {
            foundElement.clear();
            foundElement.sendKeys("Yey, Let's add it to list");
        });

        browser.driver.findElement(by.id('addbutton')).then(function (foundElement) {
            foundElement.click();
        });
        browser.driver.findElement(by.name('li33')).then(function (foundElement) {
            foundElement.click();
        });
        browser.driver.findElement(by.id('sampletodotext')).then(function (foundElement) {
            foundElement.clear();
            foundElement.sendKeys("Yey, Let's add it to list");
        });

        browser.driver.findElement(by.id('addbutton')).then(function (foundElement) {
            foundElement.click();
        });
        browser.driver.findElement(by.name('li34')).then(function (foundElement) {
            foundElement.click();
        });
        browser.driver.findElement(by.id('sampletodotext')).then(function (foundElement) {
            foundElement.clear();
            foundElement.sendKeys("Yey, Let's add it to list");
        });

        browser.driver.findElement(by.id('addbutton')).then(function (foundElement) {
            foundElement.click();
        });
        browser.driver.findElement(by.name('li35')).then(function (foundElement) {
            foundElement.click();
        });
        browser.driver.findElement(by.id('sampletodotext')).then(function (foundElement) {
            foundElement.clear();
            foundElement.sendKeys("Yey, Let's add it to list");
        });

        browser.driver.findElement(by.id('addbutton')).then(function (foundElement) {
            foundElement.click();
        });
        browser.driver.findElement(by.name('li36')).then(function (foundElement) {
            foundElement.click();
        });
        browser.driver.findElement(by.id('sampletodotext')).then(function (foundElement) {
            foundElement.clear();
            foundElement.sendKeys("Yey, Let's add it to list");
        });

        browser.driver.findElement(by.id('addbutton')).then(function (foundElement) {
            foundElement.click();
        });

        browser.driver.findElement(by.name('li37')).then(function (foundElement) {
            foundElement.click();
        });
        browser.driver.findElement(by.id('sampletodotext')).then(function (foundElement) {
            foundElement.clear();
            foundElement.sendKeys("Yey, Let's add it to list");
        });

        browser.driver.findElement(by.id('addbutton')).then(function (foundElement) {
            foundElement.click();
        });
        browser.driver.findElement(by.name('li38')).then(function (foundElement) {
            foundElement.click();
        });
        browser.driver.findElement(by.id('sampletodotext')).then(function (foundElement) {
            foundElement.clear();
            foundElement.sendKeys("Yey, Let's add it to list");
        });

        browser.driver.findElement(by.id('addbutton')).then(function (foundElement) {
            foundElement.click();
        });
        browser.driver.findElement(by.name('li39')).then(function (foundElement) {
            foundElement.click();
        });
        browser.driver.findElement(by.id('sampletodotext')).then(function (foundElement) {
            foundElement.clear();
            foundElement.sendKeys("Yey, Let's add it to list");
        });

        browser.driver.findElement(by.id('addbutton')).then(function (foundElement) {
            foundElement.click();
        });
        browser.driver.findElement(by.name('li40')).then(function (foundElement) {
            foundElement.click();
        });
        browser.driver.findElement(by.id('sampletodotext')).then(function (foundElement) {
            foundElement.clear();
            foundElement.sendKeys("Yey, Let's add it to list");
        });

        browser.driver.findElement(by.id('addbutton')).then(function (foundElement) {
            foundElement.click();
        });


        browser.driver.findElement(by.name('li41')).then(function (foundElement) {
            foundElement.click();
        });
        browser.driver.findElement(by.id('sampletodotext')).then(function (foundElement) {
            foundElement.clear();
            foundElement.sendKeys("Yey, Let's add it to list");
        });

        browser.driver.findElement(by.id('addbutton')).then(function (foundElement) {
            foundElement.click();
        });
        browser.driver.findElement(by.name('li42')).then(function (foundElement) {
            foundElement.click();
        });
        browser.driver.findElement(by.id('sampletodotext')).then(function (foundElement) {
            foundElement.clear();
            foundElement.sendKeys("Yey, Let's add it to list");
        });

        browser.driver.findElement(by.id('addbutton')).then(function (foundElement) {
            foundElement.click();
        });
        browser.driver.findElement(by.name('li43')).then(function (foundElement) {
            foundElement.click();
        });
        browser.driver.findElement(by.id('sampletodotext')).then(function (foundElement) {
            foundElement.clear();
            foundElement.sendKeys("Yey, Let's add it to list");
        });

        browser.driver.findElement(by.id('addbutton')).then(function (foundElement) {
            foundElement.click();
        });
        browser.driver.findElement(by.name('li44')).then(function (foundElement) {
            foundElement.click();
        });
        browser.driver.findElement(by.id('sampletodotext')).then(function (foundElement) {
            foundElement.clear();
            foundElement.sendKeys("Yey, Let's add it to list");
        });

        browser.driver.findElement(by.id('addbutton')).then(function (foundElement) {
            foundElement.click();
        });
        browser.driver.findElement(by.name('li45')).then(function (foundElement) {
            foundElement.click();
        });
        browser.driver.findElement(by.id('sampletodotext')).then(function (foundElement) {
            foundElement.clear();
            foundElement.sendKeys("Yey, Let's add it to list");
        });

        browser.driver.findElement(by.id('addbutton')).then(function (foundElement) {
            foundElement.click();
        });
        browser.driver.findElement(by.name('li46')).then(function (foundElement) {
            foundElement.click();
        });
        browser.driver.findElement(by.id('sampletodotext')).then(function (foundElement) {
            foundElement.clear();
            foundElement.sendKeys("Yey, Let's add it to list");
        });

        browser.driver.findElement(by.id('addbutton')).then(function (foundElement) {
            foundElement.click();
        });
        browser.driver.findElement(by.name('li47')).then(function (foundElement) {
            foundElement.click();
        });
        browser.driver.findElement(by.id('sampletodotext')).then(function (foundElement) {
            foundElement.clear();
            foundElement.sendKeys("Yey, Let's add it to list");
        });

        browser.driver.findElement(by.id('addbutton')).then(function (foundElement) {
            foundElement.click();
        });
        browser.driver.findElement(by.name('li48')).then(function (foundElement) {
            foundElement.click();
        });
        browser.driver.findElement(by.id('sampletodotext')).then(function (foundElement) {
            foundElement.clear();
            foundElement.sendKeys("Yey, Let's add it to list");
        });

        browser.driver.findElement(by.id('addbutton')).then(function (foundElement) {
            foundElement.click();
        });
        browser.driver.findElement(by.name('li49')).then(function (foundElement) {
            foundElement.click();
        });
        browser.driver.findElement(by.id('sampletodotext')).then(function (foundElement) {
            foundElement.clear();
            foundElement.sendKeys("Yey, Let's add it to list");
        });

        browser.driver.findElement(by.id('addbutton')).then(function (foundElement) {
            foundElement.click();
        });
        browser.driver.findElement(by.name('li50')).then(function (foundElement) {
            foundElement.click();
        });
        browser.driver.findElement(by.id('sampletodotext')).then(function (foundElement) {
            foundElement.clear();
            foundElement.sendKeys("Yey, Let's add it to list");
        });

        browser.driver.findElement(by.id('addbutton')).then(function (foundElement) {
            foundElement.click();
        });
    });

});
