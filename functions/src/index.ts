import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import {bibleAPI} from "./api/bible.api";
import {migrateAPI} from "./api/migrate.api";
admin.initializeApp();
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript


// Firebase Functions
exports.bible = functions.https.onRequest(bibleAPI);
exports.migrate = functions.https.onRequest(migrateAPI);


