import * as functions from "firebase-functions";
import {boockAPI} from "./api/boock.api";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript

export const boock = functions.https.onRequest(boockAPI);
