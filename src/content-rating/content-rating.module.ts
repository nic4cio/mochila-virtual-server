import { Module } from '@nestjs/common';
import { ContentRatingController } from './content-rating.controller';
import { ContentRatingService } from './content-rating.service';

@Module({
  controllers: [ContentRatingController],
  providers: [ContentRatingService]
})
export class ContentRatingModule {}
