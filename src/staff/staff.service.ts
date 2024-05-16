import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Staff } from './staff.entity';
import { Business } from '../businesses/business.entity';

@Injectable()
export class StaffService {
  constructor(
    @InjectRepository(Staff)
    private readonly staffRepository: Repository<Staff>,
    @InjectRepository(Business)
    private readonly businessRepository: Repository<Business>,
  ) { }

  async createStaff(staffData: any): Promise<Staff> {
    if (!staffData.business_id) {
      throw new Error('Business ID must be provided');
    }

    const business = await this.businessRepository.findOne({
      where: {
        id: staffData.business_id,
      },
    });

    if (!business) {
      throw new Error('Business not found');
    }

    const staff = new Staff();
    staff.email = staffData.email;
    staff.first_name = staffData.first_name;
    staff.last_name = staffData.last_name;
    staff.position = staffData.position;
    staff.phone_number = staffData.phone_number;
    staff.business = business;

    return this.staffRepository.save(staff);
  }

  async getAllStaffMembers(): Promise<Staff[]> {
    return this.staffRepository.find();
  }

  async getStaffMemberByBusinessId(businessId: number): Promise<Staff[]> {
    return this.staffRepository
      .createQueryBuilder('staff')
      .innerJoin('staff.business', 'business')
      .where('business.id = :businessId', { businessId })
      .getMany();
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
