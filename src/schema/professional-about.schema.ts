import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProfessionalAboutDocument = ProfessionalAbout & Document;

// ------ Education Schema ------
@Schema()
export class Education {
  @Prop()
  image: string;

  @Prop()
  universityName: string;

  @Prop()
  degree: string;

  @Prop()
  startDate: Date;

  @Prop()
  endDate: Date;
}

// Generate a Mongoose Schema before use as Subdocument
const EducationSchema = SchemaFactory.createForClass(Education);

// ------ Experience Schema ------
@Schema()
export class Experience {
  @Prop()
  image: string;

  @Prop()
  designation: string;

  @Prop()
  companyName: string;

  @Prop()
  startDate: Date;

  @Prop()
  endDate: Date;
}

// Generate a Mongoose Schema before use as Subdocument
const ExperienceSchema = SchemaFactory.createForClass(Experience);

// ------ Certification Schema ------
@Schema()
export class Certification {
  @Prop()
  image: string;

  @Prop()
  certification: string;

  @Prop()
  companyName: string;

  @Prop()
  startDate: Date;

  @Prop()
  endDate: Date;
}

// Generate a Mongoose Schema before use as Subdocument
const CertificationSchema = SchemaFactory.createForClass(Certification);

// ------ Skill Schema ------
@Schema()
export class Skill {
  @Prop()
  name: string;
}

// Generate a Mongoose Schema before use as Subdocument
const SkillSchema = SchemaFactory.createForClass(Skill);

// Parent Schema 
@Schema()
export class ProfessionalAbout {
  @Prop({ required: true })
  title: string;

  @Prop()
  about: string;

  @Prop()
  email: string;

  @Prop()
  contact: string;

  @Prop()
  address: string;

  @Prop()
  website: string;

  // Use the generated Education Schema as type.
  @Prop({ type: [EducationSchema] })
  educations: Education[]

  // Use the generated Experience Schema as type.
  @Prop({ type: [ExperienceSchema] })
  experiences: Experience[]

  // Use the generated Certification Schema as type.
  @Prop({ type: [CertificationSchema] })
  certifications: Certification[]

  // Use the generated Skill Schema as type.
  @Prop({ type: [SkillSchema] })
  skills: Skill[]
}

export const ProfessionalAboutSchema = SchemaFactory.createForClass(ProfessionalAbout);