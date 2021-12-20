import createConnection from './index';
import 'dotenv/config'
import { getRepository } from 'typeorm';
import axios, { AxiosRequestConfig } from 'axios';
import { Movie } from '../models/Movie';
import { Genre } from '../models/Genre';
import { Person } from '../models/Person';
import { MoviePerson } from '../models/MoviePerson';
import { MovieGenre } from '../models/MovieGenre';

const pagesMovies = +process.env.pagesMovies

class SeederRun {
    public static async run() {
        try {
            const connection = await createConnection();
            console.log('Connection database sucessfully')

            await connection.runMigrations();
            console.log(' *** Run Migrations ***')

            const connectGenre = getRepository(Genre)
            const connectMovie = getRepository(Movie)
            const connectPerson = getRepository(Person)
            const connetMoviePerson = getRepository(MoviePerson)
            const connectMovieGenre = getRepository(MovieGenre)

            const getGenres: AxiosRequestConfig = {
                url: `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.apiKey}`,
                method:'GET',
            }

            const { data } = await axios.request(getGenres)
            const arrayGenres = []

            for (const genre of data.genres) {
                arrayGenres.push(
                    connectGenre.create({ id: genre.id, name: genre.name })
                )
            }
            await connectGenre.save(arrayGenres)
            console.log(' == Gêneros cadastrados == ')


            let getMovies: AxiosRequestConfig = {
                url: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.apiKey}`,
                method: 'GET'
            }

            for(let i=0; i<pagesMovies; i++) {
                getMovies.url = `${getMovies.url}&page=${i+1}`
                const { data } = await axios.request(getMovies)
                

                for (const movie of data.results) {

                    const modelMovie = connectMovie.create({
                        title: movie.title,
                        original_lang: movie.original_language,
                        release_date: movie.release_date,
                        description: movie.overview,
                        adult: movie.adult,
                        backdrop_path: movie.backdrop_path,
                        popularity: movie.popularity,
                        poster_path: movie.poster_path,
                        vote_average: movie.vote_average,
                        vote_count: movie.vote_count
                    })
                    await connectMovie.save(modelMovie)

                    // Genres
                    if (movie.genre_ids.length > 0){
                        for (const genre of movie.genre_ids) {
                            const modelMovieGenre = connectMovieGenre.create({ id_movie: modelMovie.id, id_genre: genre })
                            await connectMovieGenre.save(modelMovieGenre)
                        }
                        console.log(' == Gênero associado == ')
                    }
                    
                    // Person
                    let getPersons: AxiosRequestConfig = {
                        url: `https://api.themoviedb.org/3/movie/${movie.id}/credits?&api_key=${process.env.apiKey}&language=en-US`,
                        method: 'GET'
                    }

                    const res = await axios.request(getPersons)

                    for (const person of res.data.cast) {
                        const modelPerson = connectPerson.create({
                            gender: person.gender,
                            biography: person.biography,
                            character: person.character,
                            name: person.name,
                            popularity: person.popularity,
                            profile_path: person.profile_path
                        })
                        await connectPerson.save(modelPerson)
                        console.log(' Person cadastrado ')

                        const modelMoviePerson = connetMoviePerson.create({ id_movie: modelMovie.id, id_person: modelPerson.id })
                        await connetMoviePerson.save(modelMoviePerson)
                        console.log(' == Person associado == ')
                    }
                }
                console.log(' == Filme cadastrado == ')

            }
        } catch (error) {
            console.log('Error connection database', error)
        }
    }

    
}

SeederRun.run()
