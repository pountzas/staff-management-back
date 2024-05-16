import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { StaffService } from './staff.service';
import { Staff } from './staff.entity';
import { CreateStaffDto } from './create-staff.dto';

@Controller('staff')
export class StaffController {
  constructor(private readonly staffService: StaffService) { }

  @Post()
  async create(@Body() staffDto: CreateStaffDto) {
    return this.staffService.createStaff(staffDto);
  }

  @Get()
  async findAll() {
    return this.staffService.getAllStaffMembers();
  }

  @Get('business/:businessId')
  async findByBusinessId(@Param('businessId') businessId: number) {
    return this.staffService.getStaffMemberByBusinessId(+businessId);
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.staffService.getStaffMemberById(+id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() staff: Staff) {
    return this.staffService.updateStaffMember(+id, staff);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.staffService.deleteStaffMember(+id);
  }
}