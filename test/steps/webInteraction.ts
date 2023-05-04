import { Then } from '@cucumber/cucumber';
import { getAllElementsByQuery } from "../helper";

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

Then (/Select all elements with query "(.*)"/, async function(query) {
  const elems = await getAllElementsByQuery(query);

  for (let i = 0; i < elems.length; i++) {
    const el = elems[i];

    if (!await el.isSelected()) {
      await el.click();
    }
  }
})

Then (/All elements with query "(.*)" should be selected/, async function(query) {
  const elems = await getAllElementsByQuery(query);

  const actualArr = [];

  for (let i = 0; i < elems.length; i++) {
    const el = elems[i];

    if (!await el.isSelected()) actualArr.push(el);
  }

  expect(actualArr.length).toBe(0);
})
