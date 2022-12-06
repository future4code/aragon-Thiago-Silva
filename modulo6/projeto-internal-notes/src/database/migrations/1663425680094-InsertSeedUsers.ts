import {MigrationInterface, QueryRunner} from "typeorm";

export class InsertSeedUsers1663425680094 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("INSERT INTO public.usuarios (user) VALUES ('thiago');");
        await queryRunner.query("INSERT INTO public.usuarios (user) VALUES ('lorenzo');");
        await queryRunner.query("INSERT INTO public.usuarios (user) VALUES ('pietro');");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('TRUNCATE TABLE public.users;');
    }

}