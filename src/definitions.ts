export interface QualtricsAndroidPlugin {

    /**
     * initializeQualtricsWithParams
     * Must be called when starting the ionic application without forgetting the qualtrics parameters
     *
     * @param data {
     *    brandId - from de qualtrics platform (XM),
     *    projectId - from de qualtrics platform (XM),
     *    extraRefId - it is the user's ban extracted from Mi Claro App
     * }
     * @return {void}
     */
    initializeQualtricsWithParams(data: { brandId: string, projectId: string, extraRefId: string }): void

    /**
     * openSurvey
     * Send the idIntercept of the survey that should be opened
     * @param data {
     *    interceptId - to open,
     *    flag - by platform
     *    callbackParamsQualtrics - Claro user parameters in base64
     *  }
     * @return {QualtricsSurveyResponse} - true if the survey is opened success
     */
    openSurvey(data: { interceptId: string, flag: string, callbackParamsQualtrics: string }): Promise<QualtricsSurveyResponse>
}

export interface QualtricsSurveyResponse {
    success: boolean,
    message: string
}
