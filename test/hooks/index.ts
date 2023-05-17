import { BeforeStep } from '@cucumber/cucumber';
import { CustomWorld } from '../worlds/CustomWorld';

BeforeStep<CustomWorld>(function () {
    this.testId = browser.options.testId;
});
