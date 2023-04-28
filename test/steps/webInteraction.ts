import { Then } from '@cucumber/cucumber';

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
