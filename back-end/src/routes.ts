import { Request, Response, Router } from "express";
import { MovieController } from "./controllers/MovieController";

const router = Router();

const movieController = new MovieController();

router.get('/', (req: Request, resp: Response) =>
  resp.status(200).json({ message: 'Welcome api-movie' }),
);

router.get('/movies', movieController.getPageMovies)
router.get('/movie-person', movieController.getMoviePerson)
router.get('/movie-genre', movieController.getMovieGenre)

export { router }