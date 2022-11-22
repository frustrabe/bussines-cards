import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BusinessCardModule } from './bussiness-card/business-card.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/businesscards-test'),
    BusinessCardModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class TestModule {}
