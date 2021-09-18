import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type InterestHobbyDocument = InterestHobby & Document;

@Schema()
export class InterestHobby {
  @Prop({ required: true })
  text: string;
}

export const InterestHobbySchema = SchemaFactory.createForClass(InterestHobby);