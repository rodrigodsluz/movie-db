import { getRepository, Repository } from "typeorm"
import { Movie } from "../models/Movie"
import { MovieGenre } from "../models/MovieGenre";
import { MoviePerson } from "../models/MoviePerson";


class MovieService {
    private connectMovie: Repository<Movie>;
    private connectMoviePerson: Repository<MoviePerson>;
    private connetMovieGenre: Repository<MovieGenre>;

    constructor() {
        this.connectMovie = getRepository(Movie)
        this.connectMoviePerson = getRepository(MoviePerson)
        this.connetMovieGenre = getRepository(MovieGenre)
    }

    async getPageMovies(page: number, sort_by: string) {
        try {
            // return await this.connectMovie.createQueryBuilder('movies')
            // .select('*')
            // .orderBy('popularity', 'DESC')
            // .limit(20)
            // .getRawMany()
            const limit = 20
            return await this.connectMovie.find({ 
                order: { popularity : 'DESC' },
                skip: page * limit - limit,
                take: limit
            })
        } catch (error) {
            throw new Error(error)
        }
    }

    async getMoviePerson(idMovie: number) {
        try {
            
            return await this.connectMoviePerson.find({
                where: { id_movie: idMovie },
                relations: ['person']
            })
        } catch (error) {
            throw new Error(error)
        }
    }
    
    async getMovieGenre(idMovie: number) {
        try {
            
            return await this.connetMovieGenre.find({
                where: { id_movie: idMovie },
                relations: ['genre']
            })
        } catch (error) {
            throw new Error(error)
        }
    }
}

export { MovieService }