// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment: IEnvironment = {
  production: false,
  recordUrl: 'https://tracking.choiceform.io/api/records',
  host: 'https://osapi.choiceform.io',
  wsHost: 'wss://osapi.choiceform.io',
  cdnHost: 'https://media.choiceform.io',
  oldIconHost: 'https://cform-files.b0.upaiyun.com/UploadFiles/UploadSvg',
  publicHost: 'https://public.choiceform.io',
  sentryKey: 'https://15f81d0f358545a586747834c943bd88@sentry.choiceform.io/7',
  dictUrl:
    'https://media.choiceform.com/os-editor/assets/UploadFiles/Dictionary/Dictionary.js'
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
