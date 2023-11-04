"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRegionTable1699110626618 = void 0;
const typeorm_1 = require("typeorm");
class CreateRegionTable1699110626618 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'regions',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                    isNullable: false,
                },
                {
                    name: 'name',
                    type: 'varchar',
                    length: '50',
                    isNullable: false,
                    isUnique: true,
                },
                {
                    name: 'code',
                    type: 'varchar',
                    length: '2',
                    isNullable: false,
                    isUnique: true,
                },
                {
                    name: 'countryId',
                    type: 'int',
                    isNullable: false,
                },
                {
                    name: 'createdBy',
                    type: 'int',
                    isNullable: false,
                },
                {
                    name: 'updatedBy',
                    type: 'int',
                    isNullable: false,
                },
                {
                    name: 'createdAt',
                    type: 'timestamp',
                    isNullable: true,
                    default: 'CURRENT_TIMESTAMP',
                },
                {
                    name: 'updatedAt',
                    type: 'timestamp',
                    isNullable: true,
                    default: 'CURRENT_TIMESTAMP',
                },
            ],
        }));
        await queryRunner.createForeignKey('regions', new typeorm_1.TableForeignKey({
            name: 'region_country_fk',
            columnNames: ['countryId'],
            referencedTableName: 'countries',
            referencedColumnNames: ['id'],
            onDelete: 'RESTRICT',
        }));
        await queryRunner.createForeignKey('regions', new typeorm_1.TableForeignKey({
            name: 'region_author_fk',
            columnNames: ['createdBy'],
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
            onDelete: 'RESTRICT',
        }));
        await queryRunner.createForeignKey('regions', new typeorm_1.TableForeignKey({
            name: 'region_editor_fk',
            columnNames: ['updatedBy'],
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
            onDelete: 'RESTRICT',
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('regions', true);
    }
}
exports.CreateRegionTable1699110626618 = CreateRegionTable1699110626618;
//# sourceMappingURL=1699110626618-CreateRegionTable.js.map