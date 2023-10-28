import { PartialType } from '@nestjs/mapped-types';
import { CreateElectedDto } from './create-elected.dto';

export class UpdateElectedDto extends PartialType(CreateElectedDto) {}
