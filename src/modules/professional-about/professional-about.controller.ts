import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    UseGuards,
} from '@nestjs/common';
import { CreateProfessionalAboutDto } from 'src/dto/professional-about/create-professional-about.dto';
import { UpdateProfessionalAboutDto } from 'src/dto/professional-about/update-professional-about.dto';
import { ProfessionalAboutService } from './professional-about.service';

@Controller('professional-about')
export class ProfessionalAboutController {
    constructor(private readonly service: ProfessionalAboutService) { }

    @Get()
    async index() {
        return await this.service.findAll();
    }

    @Get(':id')
    async find(@Param('id') id: string) {
        return await this.service.findOne(id);
    }

    @Post()
    async create(@Body() createProfessionalAboutDto: CreateProfessionalAboutDto) {
        return await this.service.create(createProfessionalAboutDto);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() updateProfessionalAboutDto: UpdateProfessionalAboutDto) {
        return await this.service.update(id, updateProfessionalAboutDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return await this.service.delete(id);
    }
}
