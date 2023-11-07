# .env file description

## Application 
- `APP_PORT=3000` - the port on which the application will run
- `APP_REQUEST_TIMEOUT=1000` - the maximum request timeout. On timeout will be generated an `RequestTimeoutException`

## Database
- `DB_DRIVER="postgres"` - used database driver. One of `[mysql, postgres, sqlite, mssql, mongodb]`
- `DB_HOST="localhost"` - database host.
- `DB_PORT=5432` - database port
- `DB_USER="test"` - database username
- `DB_PASSWORD="test"` - database password
- `DB_NAME="test-typeorm"` - database name

## JWT

- `JWT_TOKEN_EXPIRES_IN=3600` - token expiration time
- `JWT_SECRET_KEY="secret"` - JWT secret key used to encode the token

## Documentation (swagger)
- `DOCS_GENERATE=true` - documentation will be generated if `true`
- `DOCS_PATH="docs"` - the patch to access Swagger documentation `https://application.host/docs`
- `DOCS_VERSION="1.0.0"` - documentation version
- `DOCS_TITLE="Sample project API documentation"` - the doumentation title
- `DOCS_DESCRIPTION="Sample project API documentation description"` - the documentation description
- `DOCS_AUTH_NAME="Bearer token"` - auth name

> The configuration will be validated when the application starts. If there is an invalid value, then an exception will be thrown and the application will not start

> The same configuration can be stored in a JSON file. An example is located in the file `src/config/json-config.json`