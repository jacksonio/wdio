import type { Options } from '@wdio/types'
import { getAbsoluteRoute } from '../test/helper'

export const conf: Options.Testrunner = {
    runner: 'local',
    autoCompileOpts: {
        tsNodeOpts: {
            project: getAbsoluteRoute('/tsconfig.json'),
        },
    },
    specs: [getAbsoluteRoute('/test/features/**/*.feature')],
    exclude: [],
    framework: 'cucumber',
    cucumberOpts: {
        require: [getAbsoluteRoute('/test/steps/*.ts')],
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
}
