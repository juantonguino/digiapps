// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig:{
    apiKey: "AIzaSyBVX9_I8iCiez8AH_bfuw5t6rHezIzogkQ",
    authDomain: "digiapps-51eb8.firebaseapp.com",
    databaseURL: "https://digiapps-51eb8.firebaseio.com",
    projectId: "digiapps-51eb8",
    storageBucket: "digiapps-51eb8.appspot.com",
    messagingSenderId: "sender-id",
  },
  redirectSite: "www.google.com",
  redirectSiteLogin:"http://ec2-54-81-245-250.compute-1.amazonaws.com/escuela/"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
