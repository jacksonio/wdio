import {Then, When} from '@cucumber/cucumber';
import {getAllElementsByQuery, getElementByQuery} from '../helper';
import path from 'path';

Then(
    /Non selected option values with parent "(.*)" should match "(.*)"/,
    async function (parentQuery, expectedNonSelectedValues) {
        const actualNonSelectedValuesArr = [];
        const values = await $$(`${parentQuery} > option:not(:checked)`);

        for (let i = 0; i < values.length; i++) {
            const value = await values[i].getText();

            actualNonSelectedValuesArr.push(value);
        }

        expect(actualNonSelectedValuesArr.join(', ')).toEqual(expectedNonSelectedValues);
    },
);

Then(/Select all elements with query "(.*)"/, async function (query) {
    const elems = await getAllElementsByQuery(query);

    for (let i = 0; i < elems.length; i++) {
        const el = elems[i];

        if (!await el.isSelected()) {
            await el.click();
        }
    }
})

Then(/All elements with query "(.*)" should be selected/, async function (query) {
    const elems = await getAllElementsByQuery(query);

    const actualArr = [];

    for (let i = 0; i < elems.length; i++) {
        const el = elems[i];

        if (!await el.isSelected()) actualArr.push(el);
    }

    expect(actualArr.length).toBe(0);
})

Then(/Upload file with name "(.*)" to input by query "(.*)"/, async function (fileName: string, query) {
    const elem = await getElementByQuery(query);

    await elem.addValue(path.join(process.cwd(), 'data', 'fileUpload', fileName));
})

Then(/Select iframe by query "(.*)" switch to it/, async function (query) {
    const elem = await $(query);

    await browser.switchToFrame(elem);
});
