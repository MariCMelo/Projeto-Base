import { invalidIdError } from "@/errors/invalid-id-error";
import { gamesService } from "@/services/games-service";
import { Game } from "@prisma/client";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function getGames(req: Request, res: Response) {
  const games = await gamesService.getGames();
  return res.status(httpStatus.OK).send(games);
}

export async function getGameById(req: Request, res: Response) {
  const id = Number(req.params.id);
  if (!id || isNaN(id) || id < 1) throw invalidIdError();

  const game = await gamesService.getGameById(id);
  return res.status(httpStatus.OK).send(game);
}

export async function createGame(req: Request, res: Response) {
  const { name } = req.body as Omit<Game, "id">;
  console.log(name)

  const game = await gamesService.createGame(name);
  res.status(httpStatus.CREATED).send(game);
}

export async function editGame(req: Request, res: Response) {
  const { name } = req.body as Omit<Game, "id">;

  const id = Number(req.params.id);
  if (!id || isNaN(id) || id < 1) throw invalidIdError();

  const game = await gamesService.editGame(id, name);
  res.status(httpStatus.OK).send(game);
}

export async function deleteGame(req: Request, res: Response) {
  const id = Number(req.params.id);
  if (!id || isNaN(id) || id < 1) throw invalidIdError();

  const game = await gamesService.deleteGame(id);
  res.status(httpStatus.OK).send(game);
}