"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCountryTable1664539696219 = void 0;
const typeorm_1 = require("typeorm");
class CreateCountryTable1664539696219 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "countries",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isNullable: false,
                    isGenerated: true,
                    generationStrategy: "increment"
                },
                {
                    name: "name",
                    type: "varchar",
                    length: "100",
                    isNullable: false
                },
                {
                    name: "code",
                    type: "varchar",
                    length: "3",
                    isNullable: false
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "CURRENT_TIMESTAMP"
                },
                {
                    name: "created_by",
                    type: "int",
                    isNullable: false
                },
                {
                    name: "updated_at",
                    type: "timestamp",
                    default: "CURRENT_TIMESTAMP"
                },
                {
                    name: "updated_by",
                    type: "int",
                    isNullable: true
                },
                {
                    name: "deleted_at",
                    type: "timestamp",
                    isNullable: true
                }
            ]
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('countries');
    }
}
exports.CreateCountryTable1664539696219 = CreateCountryTable1664539696219;
//# sourceMappingURL=1664539696219-CreateCountryTable.js.map