export interface QualtricsAndroidPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
