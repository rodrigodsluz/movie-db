import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatePerson1639947373034 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"persons",
                columns: [
                    {
                        name: 'id',
                        type: 'serial',
                        isPrimary: true
                    },
                    {
                        name: 'gender',
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'popularity',
                        type: 'real',
                        isNullable: true
                    },
                    {
                        name: 'profile_path',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'character',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'biography',
                        type: 'text',
                        isNullable: true
                    },
                    {
                        name: 'birthday',
                        type: 'timestamp',
                        isNullable: true
                    },
                    {
                        name: 'place_of_birth',
                        type: 'varchar',
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
        await queryRunner.dropTable("person");
    }

}
