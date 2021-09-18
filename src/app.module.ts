import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import config from './config/keys';

import { MongooseModule } from '@nestjs/mongoose';
import { InterestHobbiesModule } from './modules/interest-hobbies/interest-hobbies.module';
import { ProfessionalAboutModule } from './modules/professional-about/professional-about.module';

@Module({
  imports: [
    MongooseModule.forRoot(config.mongoURI),
    InterestHobbiesModule,
    ProfessionalAboutModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
