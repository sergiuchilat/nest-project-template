import { MigrationInterface, QueryRunner } from "typeorm";
export declare class AlterCountryTableAddSoftDeleteFields1699110888456 implements MigrationInterface {
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
