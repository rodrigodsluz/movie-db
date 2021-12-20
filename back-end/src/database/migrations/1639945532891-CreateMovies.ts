import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateMovies1639945532891 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "movies",
                columns: [
                    {
                        name: 'id',
                        type: 'serial',
                        isPrimary: true
                    },
                    {
                        name: 'title',
                        type: 'varchar'
                    },
                    {
                        name: 'original_lang',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'release_date',
                        type: 'timestamp',
                        isNullable: true
                    },
                    {
                        name: 'description',
                        type: 'text',
                        isNullable: true
                    },
                    {
                        name: 'popularity',
                        type: 'real',
                        isNullable: true
                    },
                    {
                        name: 'poster_path',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'backdrop_path',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'vote_average',
                        type: 'real',
                        isNullable: true
                    },
                    {
                        name: 'vote_count',
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'adult',
                        type: 'boolean',
                        isNullable: true
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()'
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("movies");
    }

}
