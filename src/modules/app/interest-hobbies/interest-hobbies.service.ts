import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateInterestHobbyDto } from 'src/dto/interest-hobbies/create-interest-hobbies.dto';
import { UpdateInterestHobbyDto } from 'src/dto/interest-hobbies/update-interest-hobbies.dto';
import { InterestHobby, InterestHobbyDocument } from 'src/schema/interest-hobbies.schema';

@Injectable()
export class InterestHobbiesService {
    constructor(@InjectModel(InterestHobby.name) private readonly model: Model<InterestHobbyDocument>) {
    }

    async findAll(): Promise<InterestHobby[]> {
        return await this.model.find().exec();
    }

    async findOne(id: string): Promise<InterestHobby> {
        return await this.model.findById(id).exec();
    }

    async create(createTodoDto: CreateInterestHobbyDto): Promise<InterestHobby> {
        return await new this.model({
            ...createTodoDto,
            createdAt: new Date(),
        }).save();
    }

    async update(id: string, updateTodoDto: UpdateInterestHobbyDto): Promise<InterestHobby> {
        return await this.model.findByIdAndUpdate(id, updateTodoDto).exec();
    }

    async delete(id: string): Promise<InterestHobby> {
        return await this.model.findByIdAndDelete(id).exec();
    }
}
