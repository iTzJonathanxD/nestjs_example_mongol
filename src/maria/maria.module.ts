
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MariaSchema } from './schema/maria.schem';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: 'marias',
        useFactory: () => MariaSchema,
      },
    ]),
  ],
  controllers: [],
  providers: [],
})
export class MariaModule {}