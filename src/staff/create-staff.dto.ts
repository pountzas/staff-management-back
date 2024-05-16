import { Position } from './staff.entity';

export class CreateStaffDto {
  email: string;
  first_name: string;
  last_name: string;
  position: Position;
  phone_number: string;
  business_id: number;
}