import { Module } from '@nestjs/common';
import { BusinessCardController } from './business-card.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BusinessCard, BusinessCardSchema } from './business-card.schema';
import { BusinessCardService } from './business-card.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: BusinessCard.name,
        schema: BusinessCardSchema,
      },
    ]),
  ],
  controllers: [BusinessCardController],
  providers: [BusinessCardService],
  exports: [BusinessCardService],
})
export class BusinessCardModule {}
