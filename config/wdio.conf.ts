import type { Options } from '@wdio/types';
import { getAbsoluteRoute, getExecutionRouteFile, getExecutionRouteFolder } from '../test/helper';
import * as dotenv from 'dotenv';
import { HookFunctionExtension } from '@wdio/cucumber-framework/build/types';

dotenv.config();

export const conf: Options.Testrunner & HookFunctionExtension = {
    runner: 'local',
    autoCompileOpts: {
        tsNodeOpts: {
            project: getAbsoluteRoute('/tsconfig.json'),
        },
    },
    specs: [
        getAbsoluteRoute(
            `/test/features/${getExecutionRouteFolder()}/${getExecutionRouteFile()}.feature`,
        ),
    ],
    exclude: [],
    framework: 'cucumber',
    cucumberOpts: {
        require: [
            getAbsoluteRoute('/test/steps/*.ts'),
            getAbsoluteRoute('/test/hooks/*.ts'),
            getAbsoluteRoute('/test/worlds/*.ts'),
        ],
        timeout: 60000000,
    },
    maxInstances: 1,
    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 8,
    reporters: [
        'spec',
        [
            'allure',
            {
                outputDir: 'allure-results',
                disableWebdriverStepsReporting: true,
                disableWebdriverScreenshotsReporting: false,
                useCucumberStepReporter: true,
            },
        ],
    ],
    outputDir: 'results',
    capabilities: [],
    beforeScenario: async function (world) {
        const arr = world.pickle.name.split(':');

        if (arr.length < 2) throw new Error(`Wrong Feature name for: ${world.pickle.name}`);

        browser.options.testId = arr[0];
    },
};
