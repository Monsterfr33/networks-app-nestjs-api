import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import config from './config/keys';

import { MongooseModule } from '@nestjs/mongoose';
import { InterestHobbiesModule } from './modules/app/interest-hobbies/interest-hobbies.module';

@Module({
  imports: [
    MongooseModule.forRoot(config.mongoURI),
    InterestHobbiesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
