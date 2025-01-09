import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { MariaModule } from './maria/maria.module';
import { JordyModule } from './jordy/jordy.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI), MariaModule, JordyModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
