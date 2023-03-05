import { MigrationInterface, QueryRunner } from "typeorm";

export class default1677947888088 implements MigrationInterface {
    name = 'default1677947888088'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "products" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "price" double precision NOT NULL, "quantity" integer NOT NULL, "sale_price" double precision NOT NULL, "due_date" date NOT NULL, CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "exit" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "description" character varying NOT NULL, "price" double precision NOT NULL, "date" date NOT NULL, CONSTRAINT "PK_cead9adb00eadcf23fbcecbdbe8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "sale" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "price" double precision NOT NULL, "quantity" integer NOT NULL, "date" date NOT NULL, CONSTRAINT "PK_d03891c457cbcd22974732b5de2" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "sale"`);
        await queryRunner.query(`DROP TABLE "exit"`);
        await queryRunner.query(`DROP TABLE "products"`);
    }

}
