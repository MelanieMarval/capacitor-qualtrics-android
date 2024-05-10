import { WebPlugin } from '@capacitor/core';

import type { QualtricsAndroidPlugin } from './definitions';
import { QualtricsSurveyResponse } from './definitions';
import { QualtricsAndroid } from './index';

export class QualtricsAndroidWeb extends WebPlugin implements QualtricsAndroidPlugin {

    initializeQualtricsWithParams(data: {brandId: String, projectId: String}): void {
        // send params to android
        console.log('initializeQualtricsWithParams');
        console.log(data.brandId);
        console.log(data.projectId);
        QualtricsAndroid.initializeQualtricsWithParams(data);
    }

    openSurvey(data: {interceptId: String}): Promise<QualtricsSurveyResponse> {
        console.log('openSurvey');
        console.log(data.interceptId);
        return QualtricsAndroid.openSurvey(data)
        // return new Promise(resolve =>
        //     resolve({success: false, message: 'it\'s a test web'})
        // );
    }
}
