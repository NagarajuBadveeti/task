import { createLogger, format, transports } from 'winston';// Import required modules  
const { combine, timestamp, printf, colorize } = format;// Import required formatters 

// Define a custom log format
const logFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} [${level}]: ${message}`;
});

// Create the logger
const logger = createLogger({
  level: 'info',
  format: combine(
    colorize(),
    timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    logFormat
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: 'error.log' })
  ]
});

export default logger;
