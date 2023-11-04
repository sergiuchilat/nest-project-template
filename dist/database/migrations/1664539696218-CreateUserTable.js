"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserTable1664539696218 = void 0;
const typeorm_1 = require("typeorm");
class CreateUserTable1664539696218 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'users',
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
                },
                {
                    name: 'email',
                    type: 'varchar',
                    length: '50',
                    isNullable: false,
                },
                {
                    name: 'password',
                    type: 'varchar',
                    length: '64',
                    isNullable: false,
                },
                {
                    name: 'role',
                    type: 'enum',
                    enum: ['user', 'admin'],
                    isNullable: false,
                },
                {
                    name: 'verified',
                    type: 'int',
                    isNullable: true,
                    default: 0,
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
        }), true);
    }
    async down(queryRunner) {
        await queryRunner.dropTable('users');
    }
}
exports.CreateUserTable1664539696218 = CreateUserTable1664539696218;
//# sourceMappingURL=1664539696218-CreateUserTable.js.map