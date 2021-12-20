import { Request, Response } from "express";
import { MovieService } from "../services/MovieService";

class MovieController {
    async getPageMovies(request: Request, response: Response) {
        const { page, sort_by } = request.body;

        try {
            const movieService = new MovieService()
            const allMovies = await movieService.getPageMovies(+page, sort_by)
            return response.json(allMovies)
        } catch (error) {
            throw new Error(error)
        }
    }

    async getMoviePerson(request: Request, response: Response) {
        const { id } = request.body;

        try {
            const movieService = new MovieService()
            const movieDetail = await movieService.getMoviePerson(+id)
            return response.json(movieDetail)
        } catch (error) {
            throw new Error(error);
            
        }
    }
    
    async getMovieGenre(request: Request, response: Response) {
        const { id } = request.body;

        try {
            const movieService = new MovieService()
            const movieDetail = await movieService.getMovieGenre(+id)
            return response.json(movieDetail)
        } catch (error) {
            throw new Error(error);
            
        }
    }

}

export { MovieController }