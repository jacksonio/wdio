import type { Options } from '@wdio/types';

import { conf } from './wdio.conf.ts';

process.env.TEST_ENV_WEB = 'true';
process.env.TEST_ENV = 'WEB';

export const config: Options.Testrunner = {
    ...conf,
    capabilities: [
        {
            maxInstances: 1,
            browserName: 'chrome',
            acceptInsecureCerts: true,
            'goog:chromeOptions': {
                args: ['--window-size=1920,1080', '--enable-javascript'],
                excludeSwitches: ['--enable-logging'],
            },
        },
    ],
    baseUrl: 'http://localhost',
    services: ['chromedriver'],
};
