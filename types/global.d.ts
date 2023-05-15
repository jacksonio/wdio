import { Testrunner, WebdriverIO } from '@wdio/types/build/Options';

declare var browser: WebdriverIO.Browser & {
    options:
        | (WebdriverIO & { testId: string })
        | (Testrunner & {
              testId: string;
          });
};
