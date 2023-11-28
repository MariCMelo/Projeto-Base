import express, { json, Request, Response } from 'express';
import 'express-async-errors';
import httpStatus from 'http-status';
import errorHandlingMiddleware from '@/middlewares/error-handling-middleware';
import gamesRouter from '@/routers/games-router';

const app = express();

app.use(json()); // body-parser
// app.use(cors())

app.get('/health', (req: Request, res: Response) => {
  return res.status(httpStatus.OK).send("I'm ok!");
});
app.use("/games", gamesRouter)

app.use(errorHandlingMiddleware)

export default app;