"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlterCountryTableAddSoftDeleteFields1699110888456 = void 0;
const typeorm_1 = require("typeorm");
class AlterCountryTableAddSoftDeleteFields1699110888456 {
    async up(queryRunner) {
        await queryRunner.addColumns('countries', [
            new typeorm_1.TableColumn({
                name: 'deletedAt',
                type: 'timestamp',
                isNullable: true,
                default: null,
            }),
            new typeorm_1.TableColumn({
                name: 'deletedBy',
                type: 'int',
                isNullable: true,
                default: null,
            }),
        ]);
        await queryRunner.createForeignKey('countries', new typeorm_1.TableForeignKey({
            name: 'country_destroyer_fk',
            columnNames: ['deletedBy'],
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
            onDelete: 'RESTRICT',
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropForeignKey('countries', 'country_destroyer_fk');
        await queryRunner.dropColumns('countries', ['deletedAt', 'deletedBy']);
    }
}
exports.AlterCountryTableAddSoftDeleteFields1699110888456 = AlterCountryTableAddSoftDeleteFields1699110888456;
//# sourceMappingURL=1699110888456-AlterCountryTableAddSoftDeleteFields.js.map