import {
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';
import { MovieGenre } from './MovieGenre';
import { MoviePerson } from './MoviePerson';
  
  @Entity('movies')
  class Movie {
    @PrimaryGeneratedColumn()
    readonly id: number;
    
    @Column()
    title: string;
  
    @Column()
    original_lang: string;

    @Column()
    release_date: Date;

    @Column()
    description: string;

    @Column()
    popularity: number;

    @Column()
    poster_path: string;

    @Column()
    backdrop_path: string;

    @Column()
    vote_average: number;

    @Column()
    vote_count: number;

    @Column()
    adult: boolean;

    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn()
    updated_at: Date;

    @OneToMany(() => MoviePerson, moviePerson => moviePerson.movie)
    moviePerson: MoviePerson[]

    @OneToMany(() => MovieGenre, movieGenre => movieGenre.movie)
    movieGenre: MovieGenre[]
  }
  
  export { Movie };