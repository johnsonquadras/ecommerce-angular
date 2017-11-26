// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCqyM5e75PLejrXqujg2LGHEApBrpZdk1k",
    authDomain: "ng-ecom.firebaseapp.com",
    databaseURL: "https://ng-ecom.firebaseio.com",
    projectId: "ng-ecom",
    storageBucket: "",
    messagingSenderId: "135723705235"
  }
};
