import { setWorldConstructor } from '@cucumber/cucumber';

export class CustomWorld {
    testId: string = '';

    constructor() {}
}

setWorldConstructor(CustomWorld);
