import { Then } from '@cucumber/cucumber';
import { getElementByQuery } from '../helper';
import { CustomWorld } from '../worlds/CustomWorld';

Then<CustomWorld>(/Collect all table data by query "(.*)"/, async function (query) {
    const table = await getElementByQuery(query);
    const titles = await table.$$('thead tr th');
    const rows = await table.$$('tbody tr');
    const titlesArr = [];
    const tableData = [];

    for (let i = 0; i < titles.length; i++) {
        titlesArr.push(await titles[i].getText());
    }

    for (let i = 0; i < rows.length; i++) {
        const tds = await rows[i].$$('td');
        const rowData = {};

        for (let j = 0; j < titlesArr.length; j++) {
            rowData[titlesArr[j]] = await tds[j].getText();
        }

        tableData.push(rowData);
    }

    expect(titles.length).toEqual(titlesArr.length);
    expect(rows.length).toEqual(tableData.length);
    expect(Object.keys(tableData[0]).length).toEqual(titlesArr.length);
});
