import { MigrationInterface, QueryRunner } from "typeorm";

export class default1674669275864 implements MigrationInterface {
    name = 'default1674669275864'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "saleprice"`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "date"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "quantity" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" ADD "sale_price" double precision NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" ADD "due_date" TIMESTAMP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "due_date"`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "sale_price"`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "quantity"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "date" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" ADD "saleprice" double precision NOT NULL`);
    }

}
