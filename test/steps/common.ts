import {Given, Then, When} from '@cucumber/cucumber';
import {getAllElementsByQuery, getElementByQuery} from '../helper';

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

Then(/Click on element by query "(.*)"/, async function (query) {
    const elem = await getElementByQuery(query);
    if (elem) await elem.click();
});

Then(/Add text "(.*)" to element by query "(.*)"/, async function (text, query) {
    const elem = await getElementByQuery(query);
    if (elem) await elem.addValue(text);

    expect(elem).toHaveText(text);
});


Then(/Press keys "(.*)"/, async function (keys) {
    await browser.keys(keys.split(','));
});

Then(/Should be "(.*)" items on the page by selector "(.*)"/, async function (itemsCount, selector) {
    const itemsArr = await getAllElementsByQuery(selector);

    expect(itemsArr.length).toEqual(+itemsCount);
});
