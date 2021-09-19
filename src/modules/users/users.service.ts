import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateUsersDto } from 'src/dto/users/create-users.dto';
import { UpdateUsersDto } from 'src/dto/users/update-users.dto';
import { Users, UsersDocument } from 'src/schema/users.schema';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(Users.name) 
        private readonly model: Model<UsersDocument>
    ) { }

    async findAll(): Promise<Users[]> {
        return await this.model.find().exec();
    }

    async findOne(id: string): Promise<Users> {
        return await this.model.findById(id).exec();
    }

    async create(createUsersDto: CreateUsersDto): Promise<Users> {
        const users = await this.model.find().exec();
        const user = users.find(user => user.username === createUsersDto.username);

        if (!user) {
            return await new this.model({
                ...createUsersDto,
                createdAt: new Date(),
            }).save();
        }
        return null;
    }

    async update(id: string, updateUsersDto: UpdateUsersDto): Promise<Users> {
        return await this.model.findByIdAndUpdate(id, updateUsersDto).exec();
    }

    async delete(id: string): Promise<Users> {
        return await this.model.findByIdAndDelete(id).exec();
    }
}