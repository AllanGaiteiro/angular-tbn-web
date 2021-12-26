import * as express from "express";
import {Request, Response} from "express";
import * as migrateHandler from "../handler/migrate.handler";

export const migrateAPI = express();
migrateAPI.use(express.json());

migrateAPI.post("/boock", (req: Request, res: Response) => {
  migrateHandler.migrateBoocks()
      .then(() => {
        res.json({message: "migrate books"});
      })
      .catch(() => res.send("error"));
});

migrateAPI.post("/versicle", (req: Request, res: Response) => {
  const {version} = req.body;
  if (!version) {
    res.send("error");
  } else {
    console.log(version);
    migrateHandler.migrateVersicles(version)
        .then(() => {
          res.json({message: "migrate versicles "});
        })
        .catch(() => res.send("error"));
  }
});
