"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTableCompanies1699110656417 = void 0;
const typeorm_1 = require("typeorm");
class CreateTableCompanies1699110656417 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'companies',
            columns: [
                new typeorm_1.TableColumn({
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                    isNullable: false,
                }),
                new typeorm_1.TableColumn({
                    name: 'name',
                    type: 'varchar',
                    length: '50',
                    isNullable: false,
                }),
                new typeorm_1.TableColumn({
                    name: 'address',
                    type: 'varchar',
                    length: '255',
                    isNullable: false,
                }),
            ],
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('companies');
    }
}
exports.CreateTableCompanies1699110656417 = CreateTableCompanies1699110656417;
//# sourceMappingURL=1699110656417-CreateCompanyTable.js.map