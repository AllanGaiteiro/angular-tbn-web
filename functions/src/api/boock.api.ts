import * as express from "express";
import {Request, Response} from "express";

export const boockAPI = express();
boockAPI.use(express.json());

boockAPI.get("/", (req: Request, res: Response) => {
  res.json({message: "get All boock"});
});
