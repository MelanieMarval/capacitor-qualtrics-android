export interface QualtricsAndroidPlugin {

  /**
   * initializeQualtricsWithParams
   * Must be called when starting the ionic application without forgetting the qualtrics parameters
   *
   * @param data
   * brandId from de qualtrics platform (XM)
   * projectId from de qualtrics platform (XM)
   *
   * @return void
   */
  initializeQualtricsWithParams(data: { brandId: String, projectId: String }): void

  /**
   * openSurvey
   * Send the idIntercept of the survey that should be opened
   * @param data
   * interceptId to update
   * @return boolean true if the survey is opened success
   */
  openSurvey(data: {interceptId: String}): Promise<QualtricsSurveyResponse>
}

export interface QualtricsSurveyResponse {
  success: boolean,
  message: string
}
