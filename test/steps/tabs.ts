import { Then } from '@cucumber/cucumber';

Then(/Navigate to the browser tab with title "(.*)"/, async function (tabTitle) {
    await browser.switchWindow(tabTitle);

    expect(await browser.getTitle()).toEqual(tabTitle);
});

Then(/Close current browser tab/, async function () {
    await browser.closeWindow();
});

Then(/Should be "(.*)" open tabs/, async function (tabCount) {
    expect((await browser.getWindowHandles()).length).toEqual(+tabCount);
});
