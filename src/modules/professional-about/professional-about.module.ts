import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProfessionalAboutController } from './professional-about.controller';
import { ProfessionalAboutService } from './professional-about.service';
import { ProfessionalAbout, ProfessionalAboutSchema } from 'src/schema/professional-about.schema';
import { UsersService } from '../users/users.service';
import { Users, UsersSchema } from 'src/schema/users.schema';

@Module({
  controllers: [
    ProfessionalAboutController
  ],
  providers: [
    ProfessionalAboutService, 
    UsersService
  ],
  imports: [
    MongooseModule.forFeature([
      { name: ProfessionalAbout.name, schema: ProfessionalAboutSchema },
      { name: Users.name, schema: UsersSchema }
    ]),
  ],
})
export class ProfessionalAboutModule {}
