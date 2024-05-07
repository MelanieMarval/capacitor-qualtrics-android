import { WebPlugin } from '@capacitor/core';

import type { QualtricsAndroidPlugin } from './definitions';

export class QualtricsAndroidWeb extends WebPlugin implements QualtricsAndroidPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
