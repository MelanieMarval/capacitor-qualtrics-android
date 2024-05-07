import { registerPlugin } from '@capacitor/core';

import type { QualtricsAndroidPlugin } from './definitions';

const QualtricsAndroid = registerPlugin<QualtricsAndroidPlugin>('QualtricsAndroid', {
    web: () => import('./web').then(m => new m.QualtricsAndroidWeb())
});

export * from './definitions';
export { QualtricsAndroid };
