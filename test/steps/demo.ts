import { Then, When } from '@cucumber/cucumber'
import * as chai from 'chai'

When(/Search with (.*)/, async function (searchValue) {
    const elem = await $(`[name=q]`)
    await elem.setValue(searchValue)
    await browser.keys('Enter')
})

Then(/Click on the (.*)/, async function (linkAddress) {
    console.log('linkAddress', linkAddress);
    await browser.pause(100);
    const query = `a[href*="${linkAddress}"]`;
    const elem = await $(query);
    if (elem) await elem.click()
})

Then(/Url should match (.*)/, async function (linkAddress) {
    const siteUrl = await browser.getUrl();
    chai.expect(siteUrl).to.equal(linkAddress);
})
