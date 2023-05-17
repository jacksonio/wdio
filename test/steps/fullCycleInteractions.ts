import { When, Then } from '@cucumber/cucumber';
import { getElementByQuery } from '../helper';

When(/User login to the site/, async function () {
    const loginField = await getElementByQuery('input[id=user-name]');
    const passwordField = await getElementByQuery('input[id=password]');
    const submitButton = await getElementByQuery('input[id=login-button]');

    await loginField.setValue(process.env.USER_LOGIN);
    await passwordField.setValue(process.env.USER_PASSWORD);
    await submitButton.click();
});


