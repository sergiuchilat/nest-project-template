# Migrations

### Create migration

```bash
# Create new migration
$ npm run migration:create --name=MigrationName
```
> Migration file will be added in ``./database/migrations/`` folder

### Run migration

```bash
# Run new migration files
$ npm run migration:run
```
> Will run all new migrations from ``./database/migrations/`` folder

### Revert migration

```bash
# Revert last executed migration
$ npm run migration:rollback
```
> Will revert last executed migration from from ``./database/migrations/`` folder