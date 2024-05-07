
export interface QualtricsAndroidPlugin {

  /**
   * initializeQualtricsWithParams
   * Must be called when starting the ionic application without forgetting the qualtrics parameters
   *
   * @param brandId from de qualtrics platform (XM)
   * @param projectId from de qualtrics platform (XM)
   *
   * @return void
   */
  initializeQualtricsWithParams(brandId: String, projectId: String): void

  /**
   * openSurvey
   * Send the idIntercept of the survey that should be opened
   * @param interceptId
   * @return boolean true if the survey is opened success
   */
  openSurvey(interceptId: String): Promise<QualtricsSurveyResponse>
}

export interface QualtricsSurveyResponse {
  success: boolean,
  message: string
}
