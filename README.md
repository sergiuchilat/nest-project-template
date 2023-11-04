## Description

[Nest](https://github.com/nestjs/nest) JS strarter Template with TypeORM

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
$ npm run migration:revert
```
> Will run all new migrations from ``./database/migrations/`` folder

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

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Sergiu Chilat](https://sergiu.live)
- Github Profile - [https://github.com/sergiuchilat](https://github.com/sergiuchilat)


## License

Nest is [MIT licensed](LICENSE).
