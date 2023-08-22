export class Config {
  readonly project: string | undefined;
  readonly stage: string;
  readonly browserCloudFrontDistrbutionArn: string;
  readonly stacBrowserDistPath: string;

  constructor() {
    if (!process.env.STAGE) throw Error("Must provide STAGE");
    this.stage = process.env.STAGE;
    if (!process.env.BROWSER_CLOUDFRONT_DISTRIBUTION_ARN) throw Error("Must provide BROWSER_CLOUDFRONT_DISTRIBUTION_ARN");
    this.browserCloudFrontDistrbutionArn = process.env.BROWSER_CLOUDFRONT_DISTRIBUTION_ARN!;
    if (!process.env.STAC_BROWSER_DIST_PATH) throw Error("Must provide STAC_BROWSER_DIST_PATH");
    this.stacBrowserDistPath = process.env.STAC_BROWSER_DIST_PATH!;

    this.project = process.env.PROJECT;
     
  }

  /**
   * Helper to generate id of stack
   * @param serviceId Identifier of service
   * @returns Full id of stack
   */
  buildStackName = (serviceId: string): string =>
    `${this.project}-STAC-${this.stage}-${serviceId}`;
}
