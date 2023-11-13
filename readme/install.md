# App installation

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

### Cleans install and create admin user
Clean all seeded tables then execute all migrations and seedersthen create admin user with credentials from the app config
```bash
$ npm run app:install:create_admin_user
```