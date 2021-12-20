import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateMoviePerson1639950772862 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "movie_person",
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
                        name: 'id_person',
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
                        name: 'FKPerson',
                        referencedTableName: 'persons',
                        referencedColumnNames: ['id'],
                        columnNames: ['id_person'],
                        onDelete: 'CASCADE',
                        onUpdate: 'CASCADE'
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('movie_person')
    }

}
