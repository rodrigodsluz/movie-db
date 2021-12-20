import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Movie } from "./Movie";
import { Genre } from "./Genre";


@Entity('movie_genre')
class MovieGenre {
    @PrimaryGeneratedColumn()
    readonly id: number
    
    @Column()
    readonly id_genre: number

    @Column()
    readonly id_movie: number

    @CreateDateColumn()
    created_at: Date

    @ManyToOne(() => Movie, (movies) => movies.movieGenre)
    @JoinColumn([{ name: "id_movie", referencedColumnName: "id" }])
    movie: Movie;
    
    @ManyToOne(() => Genre, (genres) => genres.movieGenre)
    @JoinColumn([{ name: "id_genre", referencedColumnName: "id" }])
    genre: Genre;
}

export { MovieGenre }