import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateProfessionalAboutDto } from 'src/dto/professional-about/create-professional-about.dto';
import { UpdateProfessionalAboutDto } from 'src/dto/professional-about/update-professional-about.dto';
import { ProfessionalAbout, ProfessionalAboutDocument } from 'src/schema/professional-about.schema';
import { UsersService } from '../users/users.service';

@Injectable()
export class ProfessionalAboutService {
    constructor(
        @InjectModel(ProfessionalAbout.name) 
        private readonly model: Model<ProfessionalAboutDocument>,
        private usersService: UsersService
    ) { }

    async findAll(): Promise<ProfessionalAbout[]> {
        return await this.model.find().exec();
    }

    async findOne(id: string): Promise<ProfessionalAbout> {
        return await this.model.findById(id).exec();
    }

    async create(createProfessionalAboutDto: CreateProfessionalAboutDto): Promise<String> {
        let user = {
            username: createProfessionalAboutDto.email,
            password: createProfessionalAboutDto.password
        }

        // creating a new user account
        let userCreation = await this.usersService.create(user);

        if (userCreation?.username) {
            // creating a new profile with detailed info 
            let request = await new this.model({
                ...createProfessionalAboutDto,
                createdAt: new Date(),
            }).save();

            if(request) {
                return "Profile created successfully."
            }
        }
        return "";
    }

    async update(id: string, updateProfessionalAboutDto: UpdateProfessionalAboutDto): Promise<ProfessionalAbout> {
        return await this.model.findByIdAndUpdate(id, updateProfessionalAboutDto).exec();
    }

    async delete(id: string): Promise<ProfessionalAbout> {
        return await this.model.findByIdAndDelete(id).exec();
    }
}
