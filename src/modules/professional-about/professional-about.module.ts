import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProfessionalAboutController } from './professional-about.controller';
import { ProfessionalAboutService } from './professional-about.service';
import { ProfessionalAbout, ProfessionalAboutSchema } from 'src/schema/professional-about.schema';

@Module({
  controllers: [ProfessionalAboutController],
  providers: [ProfessionalAboutService],
  imports: [
    MongooseModule.forFeature([{ name: ProfessionalAbout.name, schema: ProfessionalAboutSchema }]),
  ],
})
export class ProfessionalAboutModule {}
