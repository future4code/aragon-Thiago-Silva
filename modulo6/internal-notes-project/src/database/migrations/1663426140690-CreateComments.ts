import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateComments1663426140690 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'comentarios',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'texto',
                        type: 'varchar',
                        length: '777'
                    },
                    {
                        name: 'usuario_id',
                        type: 'uuid'
                    },
                    {
                        name: 'postagem_id',
                        type: 'uuid'
                    },
                    {
                        name: 'data_criacao',
                        type: 'timestamp',
                        default: 'now()',
                      },
                      {
                        name: 'data_atualizacao',
                        type: 'timestamp',
                        default: 'now()',
                      },
                ]
            })
        )

        await queryRunner.createForeignKey(
            'comentarios',
            new TableForeignKey({
              name: 'comentarios_usuario',
              columnNames: ['usuario_id'],
              referencedColumnNames: ['id'],
              referencedTableName: 'usuarios',
              onDelete: 'CASCADE',
            }),
        );

        await queryRunner.createForeignKey(
            'comentarios',
            new TableForeignKey({
              name: 'comentarios_postagem',
              columnNames: ['postagem_id'],
              referencedColumnNames: ['id'],
              referencedTableName: 'postagens',
              onDelete: 'CASCADE',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('comentarios')
    }

}