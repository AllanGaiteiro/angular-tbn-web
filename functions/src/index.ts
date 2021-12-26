import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import {bibleAPI} from "./api/bible.api";
import {migrateAPI} from "./api/migrate.api";
admin.initializeApp();
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript


// Firebase Functions
export const bible = functions.https.onRequest(bibleAPI);
export const migrate = functions.https.onRequest(migrateAPI);


