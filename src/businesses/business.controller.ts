import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { BusinessService } from './business.service';
import { Business } from './business.entity';

@Controller('businesses')
export class BusinessController {
  constructor(private readonly businessService: BusinessService) { }

  @Post()
  async create(@Body() business: Business) {
    return this.businessService.createBusiness(business);
  }

  @Get()
  async findAll() {
    return this.businessService.getAllBusinesses();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.businessService.getBusinessById(+id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() business: Business) {
    return this.businessService.updateBusiness(+id, business);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.businessService.deleteBusiness(+id);
  }
}