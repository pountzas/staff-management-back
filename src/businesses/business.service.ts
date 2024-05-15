
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Business } from './business.entity';

@Injectable()
export class BusinessService {
  constructor(
    @InjectRepository(Business)
    private readonly businessRepository: Repository<Business>,
  ) {}

  async createBusiness(business: Business): Promise<Business> {
    return this.businessRepository.save(business);
  }

  async getAllBusinesses(): Promise<Business[]> {
    return this.businessRepository.find();
  }

  async getBusinessById(id: number): Promise<Business> {
    return this.businessRepository.findOne({ where: { id } });
  }

  async updateBusiness(id: number, business: Business): Promise<Business> {
    await this.businessRepository.update(id, business);
    return this.businessRepository.findOne({ where: { id } });
  }

  async deleteBusiness(id: number): Promise<void> {
    await this.businessRepository.delete(id);
  }
}