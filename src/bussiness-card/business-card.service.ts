import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BusinessCardDto } from './business-card.dto';
import { BusinessCard, BusinessCardDocument } from './business-card.schema';

@Injectable()
export class BusinessCardService {
  constructor(
    @InjectModel(BusinessCard.name)
    private bcModel: Model<BusinessCardDocument>,
  ) {}

  getBusinessCards(): Promise<BusinessCard[]> {
    return this.bcModel.find().exec();
  }
  createBusinessCard(businessCard: BusinessCardDto) {
    const savedBusinessCard = new this.bcModel(businessCard);
    return savedBusinessCard.save();
  }

  updateBusinessCard(id: string, businessCard: any) {
    // connect to DB and update
  }

  deleteMany(del: any) {
    this.bcModel.deleteMany(del);
  }

  deleteBusinessCard(id: string) {
    // delete business card
  }
}
