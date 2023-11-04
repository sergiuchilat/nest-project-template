"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateLocationTable1699110634432 = void 0;
const typeorm_1 = require("typeorm");
class CreateLocationTable1699110634432 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'locations',
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
                    name: 'regionId',
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
        await queryRunner.createForeignKey('locations', new typeorm_1.TableForeignKey({
            name: 'location_region_fk',
            columnNames: ['regionId'],
            referencedTableName: 'regions',
            referencedColumnNames: ['id'],
            onDelete: 'RESTRICT',
        }));
        await queryRunner.createForeignKey('locations', new typeorm_1.TableForeignKey({
            name: 'location_author_fk',
            columnNames: ['createdBy'],
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
            onDelete: 'RESTRICT',
        }));
        await queryRunner.createForeignKey('locations', new typeorm_1.TableForeignKey({
            name: 'location_editor_fk',
            columnNames: ['updatedBy'],
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
            onDelete: 'RESTRICT',
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('locations', true);
    }
}
exports.CreateLocationTable1699110634432 = CreateLocationTable1699110634432;
//# sourceMappingURL=1699110634432-CreateLocationTable.js.map