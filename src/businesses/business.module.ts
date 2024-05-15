import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BusinessService } from './business.service';
import { BusinessController } from './business.controller';
import { Business } from './business.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Business])],
  providers: [BusinessService],
  controllers: [BusinessController],
  exports: [BusinessService],
})
export class BusinessModule {}
