import {WinstonModule} from 'nest-winston';
import {format, transports} from 'winston';
import 'winston-daily-rotate-file';
import AppConfig from '@/config/app-config';

const logger: any = WinstonModule.createLogger({
  transports: [
    // let's log errors into its own file
    new transports.DailyRotateFile({
      filename: AppConfig.app.log.error.filename,
      level: 'error',
      format: format.combine(format.timestamp(), format.json()),
      datePattern: 'YYYY-MM-DD',
      zippedArchive: false, // don't want to zip our logs
      maxFiles: AppConfig.app.log.error.maxFiles, // will keep log until they are older than 30 days

    }),
    // logging all level
    new transports.DailyRotateFile({
      filename: AppConfig.app.log.all.filename,
      format: format.combine(format.timestamp(), format.json()),
      datePattern: 'YYYY-MM-DD',
      zippedArchive: false, // don't want to zip our logs
      maxFiles: AppConfig.app.log.all.maxFiles, // will keep log until they are older than 30 days
    }),
    // we also want to see logs in our console
    new transports.Console({
      format: format.combine(
        format.cli(),
        format.splat(),
        format.timestamp(),
        format.colorize({
          all: true,
          message: true,
        }),
        format.printf((info) => {
          return `${info.timestamp} ${info.level}: ${info.message}`;
        }),
      ),
    }),
  ],
});

export default logger;