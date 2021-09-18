import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
} from '@nestjs/common';
import { CreateInterestHobbyDto } from 'src/dto/interest-hobbies/create-interest-hobbies.dto';
import { UpdateInterestHobbyDto } from 'src/dto/interest-hobbies/update-interest-hobbies.dto';
import { InterestHobbiesService } from './interest-hobbies.service';

@Controller('interest-hobbies')
export class InterestHobbiesController {

    constructor(private readonly service: InterestHobbiesService) { }

    @Get()
    async index() {
        return await this.service.findAll();
    }

    @Get(':id')
    async find(@Param('id') id: string) {
        return await this.service.findOne(id);
    }

    @Post()
    async create(@Body() createTodoDto: CreateInterestHobbyDto) {
        return await this.service.create(createTodoDto);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() updateTodoDto: UpdateInterestHobbyDto) {
        return await this.service.update(id, updateTodoDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return await this.service.delete(id);
    }
}
