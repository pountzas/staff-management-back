
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Staff } from './staff.entity';

@Injectable()
export class StaffService {
  constructor(
    @InjectRepository(Staff)
    private readonly staffRepository: Repository<Staff>,
  ) {}

  async createStaff(staff: Staff): Promise<Staff> {
    return this.staffRepository.save(staff);
  }

  async getAllStaffMembers(): Promise<Staff[]> {
    return this.staffRepository.find();
  }

  async getStaffMemberById(id: number): Promise<Staff> {
    return this.staffRepository.findOne({ where: { id } });
  }

  async updateStaffMember(id: number, staff: Staff): Promise<Staff> {
    await this.staffRepository.update(id, staff);
    return this.staffRepository.findOne({ where: { id } });
  }

  async deleteStaffMember(id: number): Promise<void> {
    await this.staffRepository.delete(id);
  }
}