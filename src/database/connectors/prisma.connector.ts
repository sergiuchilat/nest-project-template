import { PrismaClient } from '@prisma/client';
import {generateDatabaseUrl} from '@/config/services/db.service';
import AppConfig from '@/config/app-config';
const prisma = new PrismaClient({
  datasourceUrl: generateDatabaseUrl(AppConfig.db)
});
export default prisma;
