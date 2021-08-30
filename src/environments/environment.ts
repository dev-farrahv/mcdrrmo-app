/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase : {
    apiKey: "AIzaSyDIhBH0Px4FZQV61AjXB_Hr95mlH0wJe6M",
    authDomain: "mcdrrmo-app.firebaseapp.com",
    projectId: "mcdrrmo-app",
    storageBucket: "mcdrrmo-app.appspot.com",
    messagingSenderId: "614122742031",
    appId: "1:614122742031:web:7116dab2f9be3c1d2d5e7a",
    measurementId: "G-2R1QEK5J45"
  }
};
















// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDIhBH0Px4FZQV61AjXB_Hr95mlH0wJe6M",
//   authDomain: "mcdrrmo-app.firebaseapp.com",
//   projectId: "mcdrrmo-app",
//   storageBucket: "mcdrrmo-app.appspot.com",
//   messagingSenderId: "614122742031",
//   appId: "1:614122742031:web:7116dab2f9be3c1d2d5e7a",
//   measurementId: "G-2R1QEK5J45"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);