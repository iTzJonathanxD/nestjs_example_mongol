import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { MariaModule } from './maria/maria.module';
import { JordyModule } from './jordy/jordy.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [DatabaseModule, MariaModule, JordyModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
