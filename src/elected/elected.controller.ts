import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ElectedService } from './elected.service';
import { CreateElectedDto } from './dto/create-elected.dto';
import { UpdateElectedDto } from './dto/update-elected.dto';

@Controller('elected')
export class ElectedController {
  constructor(private readonly electedService: ElectedService) {}

  @Post()
  create(@Body() createElectedDto: CreateElectedDto) {
    return this.electedService.create(createElectedDto);
  }

  @Get()
  findAll() {
    return this.electedService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.electedService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateElectedDto: UpdateElectedDto) {
    return this.electedService.update(+id, updateElectedDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.electedService.remove(+id);
  }
}
