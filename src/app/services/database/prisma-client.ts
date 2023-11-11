import {Injectable} from '@nestjs/common';
import PrismaClient from '@/database/connectors/prisma.connector';

@Injectable()
export class PrismaRepository {
  protected db = PrismaClient;
}