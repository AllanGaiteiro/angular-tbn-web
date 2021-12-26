import * as express from "express";
import {Request, Response} from "express";
import {logger} from "firebase-functions/v1";
import * as bibleHandler from "../handler/bible.handler";

export const bibleAPI = express();
bibleAPI.use(express.json());

bibleAPI.get("/boocks", (req: Request, res: Response) => {
  bibleHandler.getBoocks()
      .then((boocks) => res.json(boocks))
      .catch((err) => res.send("error: " + err));
});

bibleAPI.get("/versicles", (req: Request, res: Response) => {
  let params: {
    version: string
    abbrev?: string; // gn-1:2
    boockAbbrev?: string; // gn
    chapterNumber?: number;// 1
    verse?: string; // dsadasda
    verseNumber?: number; // 2
  };
  if (!req?.query) {
    res.send("error");
  } else {
    if (typeof req.query === "string") {
      params = JSON.parse(req.query);
    } else {
      params = JSON.parse(JSON.stringify(req.query));
    }
    logger.log(params);
    bibleHandler.getVersicles(params)
        .then((versicles) => res.json(versicles))
        .catch((err) => res.send("error: " + err));
  }
});
