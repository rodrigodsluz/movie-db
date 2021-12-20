import {
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryColumn,
    UpdateDateColumn,
  } from 'typeorm';
import { MovieGenre } from './MovieGenre';
  
  @Entity('genres')
  class Genre {
    @PrimaryColumn()
    readonly id: number;
  
    @Column()
    name: string;
  
    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn()
    updated_at: Date;

    @OneToMany(() => MovieGenre, movieGenre => movieGenre.genre)
    movieGenre: MovieGenre[]
  }
  
  export { Genre };