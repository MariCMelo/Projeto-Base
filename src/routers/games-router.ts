import { Router } from 'express';
import { createGame, deleteGame, editGame, getGameById, getGames } from '@/controllers/games-controller';
import { validateSchemaMiddleware } from '@/middlewares/validate-schema-middleware';
import { gameInputSchema } from '@/schemas/games-schema';

const gamesRouter = Router();

gamesRouter.get('/', getGames);
gamesRouter.get('/:id', getGameById);
gamesRouter.post('/', validateSchemaMiddleware(gameInputSchema), createGame);
gamesRouter.put('/:id', validateSchemaMiddleware(gameInputSchema), editGame);
gamesRouter.delete('/:id', deleteGame);

export default gamesRouter;
