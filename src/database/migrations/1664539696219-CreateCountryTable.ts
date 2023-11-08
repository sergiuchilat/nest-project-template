import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateCountryTable1664539696219 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'countries',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isNullable: false,
            isGenerated: true,
            generationStrategy: 'increment'
          },
          {
            name: 'name',
            type: 'varchar',
            length: '100',
            isNullable: false
          },
          {
            name: 'code',
            type: 'varchar',
            length: '3',
            isNullable: false,
            isUnique: true
          },
          {
            name: 'createdAt',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP'
          },
          {
            name: 'createdBy',
            type: 'int',
            isNullable: false
          },
          {
            name: 'updatedAt',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP'
          },
          {
            name: 'updatedBy',
            type: 'int',
            isNullable: true
          }
        ]
      })
    );

  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('countries');
  }

}
