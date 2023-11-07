## Description

[Nest JS](https://github.com/nestjs/nest) strarter Template with TypeORM

## Installation

```bash
$ npm install
```

## Running migrations
> Before runing migration need to launch the app in dev mode or build it in order to create ``./dist/`` folder used by migration commands

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

## Run data seeds

### Run one specified seed
```bash
$ npm run seed --name=SEED_NAME
```

### Run one specified seed an clean seeded table first
```bash
$ npm run seed:clean --name=SEED_NAME
```

> SEED_NAME must be registered in ``src/database/seeds/seed.service.ts``. 

## Install application
### Install
Execute all migrations and seeders
```bash
$ npm run app:install
```

### Clean install
Clean all seeded tables then execute all migrations and seeders
```bash
$ npm run app:install:clean
```

### Cleans install an create admin user
Clean all seeded tables then execute all migrations and seedersthen create admin user with credentials from the app config
```bash
$ npm run app:install:create_admin_user
```

## Running the app

```bash
# development(v1)
$ npm run start

# development(v1)
$ nest start

# watch mode(v1)
$ npm run start:dev

# watch mode(v2)
$ nest start --watch

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

# Detailed project documentation
 - [.env structure](readme/readme.env.md)
  - [Migrations](readme/readme.migration.env.md)
 - [Seeders](readme/readme.seeder.env.md)
 - [CRUD modules](readme/readme.crud.env.md)
 - [Authentification](readme/readme.auth.env.md)
 - [Sockets](readme/readme.socket.env.md)


## Stay in touch

Author: Sergiu Chilat
- Personal website: [Sergiu Chilat](https://sergiu.live) 
- Github Profile [https://github.com/sergiuchilat](https://github.com/sergiuchilat)

Contributors:
- Vlad Verestiuc [https://github.com/vvlad](https://github.com/vlad)
- Corina Cernolev [https://github.com/CernolevCorina](https://github.com/CernolevCorina)


## License

Nest is [MIT licensed](LICENSE).
