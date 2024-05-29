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
    initializeQualtricsWithParams(data: { brandId: String, projectId: String, extraRefId: String }): void

    /**
     * openSurvey
     * Send the idIntercept of the survey that should be opened
     * @param data {
     *    interceptId - to open,
     *    callbackParamsQualtrics - Claro user parameters in base64
     *  }
     * @return {QualtricsSurveyResponse} - true if the survey is opened success
     */
    openSurvey(data: { interceptId: String, callbackParamsQualtrics: string }): Promise<QualtricsSurveyResponse>
}

export interface QualtricsSurveyResponse {
    success: boolean,
    message: string
}
