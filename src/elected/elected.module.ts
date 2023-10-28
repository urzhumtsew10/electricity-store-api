import { Module } from '@nestjs/common';
import { ElectedService } from './elected.service';
import { ElectedController } from './elected.controller';
import { Elected } from './entities/elected.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Elected])],
  controllers: [ElectedController],
  providers: [ElectedService],
})
export class ElectedModule {}
