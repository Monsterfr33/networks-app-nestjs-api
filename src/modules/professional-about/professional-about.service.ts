import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateProfessionalAboutDto } from 'src/dto/professional-about/create-professional-about.dto';
import { UpdateProfessionalAboutDto } from 'src/dto/professional-about/update-professional-about.dto';
import { ProfessionalAbout, ProfessionalAboutDocument } from 'src/schema/professional-about.schema';

@Injectable()
export class ProfessionalAboutService {
    constructor(@InjectModel(ProfessionalAbout.name) private readonly model: Model<ProfessionalAboutDocument>) {
    }

    async findAll(): Promise<ProfessionalAbout[]> {
        return await this.model.find().exec();
    }

    async findOne(id: string): Promise<ProfessionalAbout> {
        return await this.model.findById(id).exec();
    }

    async create(createProfessionalAboutDto: CreateProfessionalAboutDto): Promise<ProfessionalAbout> {
        return await new this.model({
            ...createProfessionalAboutDto,
            createdAt: new Date(),
        }).save();
    }

    async update(id: string, updateProfessionalAboutDto: UpdateProfessionalAboutDto): Promise<ProfessionalAbout> {
        return await this.model.findByIdAndUpdate(id, updateProfessionalAboutDto).exec();
    }

    async delete(id: string): Promise<ProfessionalAbout> {
        return await this.model.findByIdAndDelete(id).exec();
    }
}
