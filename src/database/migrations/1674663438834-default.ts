import { MigrationInterface, QueryRunner } from "typeorm";

export class default1674663438834 implements MigrationInterface {
    name = 'default1674663438834'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "products" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "price" double precision NOT NULL, "saleprice" double precision NOT NULL, "date" TIMESTAMP NOT NULL, CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "products"`);
    }

}
