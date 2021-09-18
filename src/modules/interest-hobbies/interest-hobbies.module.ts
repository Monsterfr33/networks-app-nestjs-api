import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { InterestHobbiesService } from './interest-hobbies.service';
import { InterestHobbiesController } from './interest-hobbies.controller';
import { InterestHobby, InterestHobbySchema } from 'src/schema/interest-hobbies.schema';

@Module({
  providers: [InterestHobbiesService],
  controllers: [InterestHobbiesController],
  imports: [
    MongooseModule.forFeature([{ name: InterestHobby.name, schema: InterestHobbySchema }]),
  ],
})
export class InterestHobbiesModule {}
