import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StaffService } from './staff.service';
import { StaffController } from './staff.controller';
import { Staff } from './staff.entity';
import { BusinessModule } from 'src/businesses/business.module';
import { Business } from '../businesses/business.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Staff, Business]), BusinessModule],
  providers: [StaffService],
  controllers: [StaffController],
  exports: [StaffService]
})
export class StaffModule { }
