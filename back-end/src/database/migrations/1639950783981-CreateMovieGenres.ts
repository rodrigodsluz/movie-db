import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateMovieGenres1639950783981 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "movie_genre",
                columns: [
                    {
                        name: 'id',
                        type: 'serial',
                        isPrimary: true 
                    },
                    {
                        name: 'id_movie',
                        type: 'int',
                    },
                    {
                        name: 'id_genre',
                        type: 'int',
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()',
                    }
                ],
                foreignKeys: [
                    {
                        name: 'FKMovie',
                        referencedTableName: 'movies',
                        referencedColumnNames: ['id'],
                        columnNames: ['id_movie'],
                        onDelete: 'CASCADE',
                        onUpdate: 'CASCADE'
                    },
                    {
                        name: 'FKGenre',
                        referencedTableName: 'genres',
                        referencedColumnNames: ['id'],
                        columnNames: ['id_genre'],
                        onDelete: 'CASCADE',
                        onUpdate: 'CASCADE'
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('movie_genre')
    }

}
