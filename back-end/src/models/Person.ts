import {
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';
import { MoviePerson } from './MoviePerson';
  
  @Entity('persons')
  class Person {
    @PrimaryGeneratedColumn()
    readonly id: number;
    
    @Column()
    gender: number;
  
    @Column()
    name: string;

    @Column ()
    popularity: number;
  
    @Column()
    profile_path: string;
    
    @Column()
    character: string;

    @Column()
    biography: string;

    @Column()
    birthday: string;

    @Column()
    place_of_birth: string;
  
    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn()
    updated_at: Date;

    @OneToMany(() => MoviePerson, moviePerson => moviePerson.person)
    moviePerson: MoviePerson[]
  }
  
  export { Person };