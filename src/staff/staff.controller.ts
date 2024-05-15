import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { StaffService } from './staff.service';
import { Staff } from './staff.entity';

@Controller('staff')
export class StaffController {
  constructor(private readonly staffService: StaffService) {}

  @Post()
 async create(@Body() staff: Staff) {
    return this.staffService.createStaff(staff);
  }

  @Get()
  async findAll() {
    return this.staffService.getAllStaffMembers();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.staffService.getStaffMemberById(+id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() staff: Staff) {
    return this.staffService.updateStaffMember(+id, staff);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.staffService.deleteStaffMember(+id);
  }
}