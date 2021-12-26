import * as firebase from "firebase-admin";
import * as _ from "lodash";
import {Boock} from "../models/boock";

export const getBoocks = async () => {
  const docs = (await firebase.firestore().collection("boocks").get());
  if (!docs.empty) {
    return docs.docs.map((d) => d.data() as Boock);
  } else {
    throw new Error("Get Boocks - Error ocurred");
  }
};

export const getVersicles = async (
    {
      version,
      abbrev,
      boockAbbrev,
      chapterNumber,
      verse,
      verseNumber,
    }: {
        version: string
        abbrev?: string; // gn-1:2
        boockAbbrev?: string; // gn
        chapterNumber?: number;// 1
        verse?: string; // dsadasda
        verseNumber?: number; // 2
    }) => {
  const bibleRef = firebase.firestore().collection("bible").doc(version);
  const verseRef = bibleRef.collection("versicles");

  if (abbrev) {
    const versiclesDoc = (await verseRef.doc(abbrev).get());
    if (versiclesDoc.exists) {
      return versiclesDoc.data() as any;
    } else {
      throw new Error("Get Vercicles - Error ocurred");
    }
  } else if (boockAbbrev && chapterNumber) {
    const docs = (await verseRef
        .where("boockAbbrev", "==", boockAbbrev)
        .where("chapterNumber", "==", Number(chapterNumber))
        .limit(400)
        .get());
    if (!docs.empty) {
      return docs.docs.map((d) => d.data() as Boock);
    } else {
      throw new Error("Get Vercicles - Error ocurred");
    }
  }
};
