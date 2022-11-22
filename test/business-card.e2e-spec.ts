import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { TestModule } from './../src/test.module';
import { BusinessCardDto } from './../src/bussiness-card/business-card.dto';
import { BusinessCardService } from './../src/bussiness-card/business-card.service';

describe('Business Card Controller (e2e)', () => {
  let app: INestApplication;
  let bcService: BusinessCardService;

  beforeEach(async () => {
    await bcService.deleteMany({}); // to delete all business cards.
  });

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [TestModule],
    }).compile();

    bcService = moduleFixture.get(BusinessCardService);
    // added validation manually from Christians class example from "main.ts" file
    app.useGlobalPipes(new ValidationPipe());
    app = moduleFixture.createNestApplication();
    await app.init();
  });

  describe('Post BusinessCard controller', () => {
    it('should create a new valid business card', async () => {
      //Arrange
      const bc = new BusinessCardDto(
        'Lukas',
        'Student',
        'lukas@gmail.com',
        'Haj',
        'Dont make me do it',
      );
      //Act
      const result = await request(app.getHttpServer())
        .post('/businesscards')
        .send(bc)
        .expect(201);
      //Assert
      const res = result.body;
      expect(res._id).toBeDefined();
      expect(res.__v).toEqual(0);
    });
  });

  describe('Get BusinessCard controller', () => {
    it('should get all businesscards', async () => {
      // ARRANGE
      const bc1 = new BusinessCardDto(
        'Christian',
        'Lektor',
        'kirsch@cphbuzznes.dk',
        'HEY',
        'Lets do it',
      );
      const bc2 = new BusinessCardDto(
        'Mathias',
        'Adjunkt',
        'matnil@cphbuzznes.dk',
        'HOLA',
        'Oh we are definitely doing it',
      );
      await bcService.createBusinessCard(bc1);
      await bcService.createBusinessCard(bc2);
    });
    // ACT
    // Call the endpoint to get all business cards

    // ASSERT (expect)
    // Tests that I get what I should get

    // Closing app after all tests => not hanging.
    afterAll(() => {
      app.close();
    });
  });
});
