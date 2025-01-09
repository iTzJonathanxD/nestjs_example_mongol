
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JordySchem } from './schema/jordy.schem';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: 'jordy-yusmeli',
        useFactory: () => JordySchem,
      },
    ]),
  ],
  controllers: [],
  providers: [],
})
export class JordyModule {}