# Logger

Application uses custom logger based on [Winston](https://www.npmjs.com/package/winston). 

```dotenv
APP_LOG_ERROR_FILENAME="logs/error.log"
APP_LOG_ERROR_MAX_FILES="30d"
APP_LOG_ALL_FILENAME="logs/all.log"
APP_LOG_ALL_MAX_FILES="30d"

```
- APP_LOG_ERROR_FILENAME - path to error log file
- APP_LOG_ERROR_MAX_FILES - max number of files to keep
- APP_LOG_ALL_FILENAME - path to all log file
- APP_LOG_ALL_MAX_FILES - max number of files to keep