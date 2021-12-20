import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Movie } from "./Movie";
import { Person } from "./Person";


@Entity('movie_person')
class MoviePerson {
    @PrimaryGeneratedColumn()
    readonly id: number
    
    @Column()
    readonly id_person: number

    @Column()
    readonly id_movie: number

    @CreateDateColumn()
    created_at: Date

    @ManyToOne(() => Movie, (movies) => movies.moviePerson)
    @JoinColumn([{ name: "id_movie", referencedColumnName: "id" }])
    movie: Movie;
    
    @ManyToOne(() => Person, (persons) => persons.moviePerson)
    @JoinColumn([{ name: "id_person", referencedColumnName: "id" }])
    person: Person;
}

export { MoviePerson }