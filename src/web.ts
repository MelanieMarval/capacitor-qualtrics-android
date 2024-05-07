import { WebPlugin } from '@capacitor/core';

import type { QualtricsAndroidPlugin } from './definitions';
import { QualtricsSurveyResponse } from './definitions';
import * as console from 'console';

export class QualtricsAndroidWeb extends WebPlugin implements QualtricsAndroidPlugin {

    initializeQualtricsWithParams(brandId: String, projectId: String): void {
        // send params to android
        console.log('initializeQualtricsWithParams');
        console.log(brandId);
        console.log(projectId);
    }

    openSurvey(interceptId: String): Promise<QualtricsSurveyResponse> {
        console.log('openSurvey');
        console.log(interceptId);
        return new Promise(resolve =>
            resolve({success: false, message: 'it\'s a test web'})
        );
    }
}
