import { Given, Then, When } from '@cucumber/cucumber';
import { getElementByQuery } from '../helper';

Given(/Open page with provided url "(.*)"/, async function (url) {
    await browser.url(url);
});

When(/^Find the input by query "(.*)" and enter value "(.*)"$/, async function (query, value) {
    const elem = await getElementByQuery(query);

    for (let i = 0; i < value.length; i++) {
        await browser.pause(500);
        await elem.addValue(value[i]);
    }
});

When(/^Find the select by query "(.*)" and select value "(.*)"$/, async function (query, value) {
    const elem = await getElementByQuery(query);

    await elem.selectByAttribute('value', value);
});

Then(/Element by query "(.*)" should has value "(.*)"/, async function (query, valueToCompare) {
    const elem = await getElementByQuery(query);

    const elemValue = await elem.getValue();

    expect(elemValue).toEqual(valueToCompare);
});

Then(
    /Element by query "(.*)" should has inner text "(.*)"/,
    async function (query, valueToCompare) {
        const elem = await getElementByQuery(query);

        const elemValue = await elem.getText();

        expect(elemValue).toEqual(valueToCompare);
    },
);

Then(/Current tab should has title "(.*)"/, async function (tabTitle) {
    expect(await browser.getTitle()).toEqual(tabTitle);
});
