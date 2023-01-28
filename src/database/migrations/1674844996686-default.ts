import { MigrationInterface, QueryRunner } from "typeorm";

export class default1674844996686 implements MigrationInterface {
    name = 'default1674844996686'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "exit" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "description" character varying NOT NULL, "price" double precision NOT NULL, "date" date NOT NULL, CONSTRAINT "PK_cead9adb00eadcf23fbcecbdbe8" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "exit"`);
    }

}
