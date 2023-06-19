import mongoose from 'mongoose';
import app from './app';
import config from './config';
import { errorLogger, infoLogger } from './share/logger';

async function main() {
  await mongoose.connect(config.database_url as string);
  infoLogger.info('Connected to database');
  app.listen(config.port, () => {
    errorLogger.error(`Server running at port ${config.port}`);
  });
}
main();
