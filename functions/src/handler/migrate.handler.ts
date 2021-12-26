import * as firebase from "firebase-admin";
import * as _ from "lodash";
import * as fs from "fs";
import {Boock} from "../models/boock";

const dataBaseStr = (version: string): string => {
  return `./bd/bible/json/pt_${version}.json`;
};

// criate Collection


interface Versicle {
  abbrev: string; // gn-1:2
  boockAbbrev: string; // gn
  chapterNumber: number;// 1
  verse: string; // dsadasda
  verseNumber: number; // 2
}

interface Biblia {
  abbrev: string;
  chapters: string[][];
}

export const migrateBoocks = async (): Promise<void> => {
  const boocksRef = firebase.firestore().collection("boocks");
  const d = fs.readFileSync(dataBaseStr("aa"));
  const data = d.toString().replace(/^\ufeff/g, "");
  const {books} = JSON.parse(data) as { books: Boock[] };
  console.log(books);
  await Promise.all(books.map(
      async (b) => await boocksRef.doc(b.abbrev).set(b, {merge: true})

  ));
};

export const migrateVersicles = async (version: string): Promise<void> => {
  const bibleRef = firebase.firestore().collection("bible").doc(version);
  const verseRef = bibleRef.collection("versicles");
  const d = fs.readFileSync(dataBaseStr(version));
  const data = d.toString().replace(/^\ufeff/g, "");
  const {biblia} = JSON.parse(data) as { books: Boock[]; biblia: any };
  const versicles: Versicle[] = _.flatMap(Object.keys(biblia)
      .map((boockName) =>
        _.flatMap((biblia[boockName] as Biblia).chapters.map(
            (c, ci) => c.map(
                (verse, vi) => ({
                  abbrev: `${biblia[boockName].abbrev}-${ci + 1}:${vi + 1}`,
                  boockAbbrev: biblia[boockName].abbrev,
                  chapterNumber: ci + 1,
                  verse,
                  verseNumber: vi + 1,
                }))))
      )).filter((v, i) => i >= 18000 );
  await Promise.all(versicles.map(
      async (v) => await verseRef.doc(v.abbrev).set(v, {merge: true})
  ));
};
