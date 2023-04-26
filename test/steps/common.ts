import { Given, Then, When } from '@cucumber/cucumber';

Given(/Open page with provided url "(.*)"/, async function (url) {
    await browser.url(url);
});

When(/^Find the input by query "(.*)" and enter value "(.*)"$/, async function (query, value) {
    const elem = await $(query);

    if (!elem) throw new Error('No such element in the page OR wrong query');

    for (let i = 0; i < value.length; i++) {
        await browser.pause(500);
        await elem.addValue(value[i]);
    }
});

Then(/Element by query "(.*)" should has value "(.*)"/, async function (query, valueToCompare) {
    const elem = await $(query);

    if (!elem) throw new Error('No such element in the page OR wrong query');

    const elemValue = await elem.getValue();

    expect(elemValue).toEqual(valueToCompare);
});
