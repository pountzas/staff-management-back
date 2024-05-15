import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Business } from '../businesses/business.entity';

export enum Position {
  KITCHEN = 'kitchen',
  SERVICE = 'service',
  PR = 'PR',
}

@Entity()
export class Staff {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column({
    type: 'enum',
    enum: Position,
  })
  position: Position;

  @Column({ nullable: true })
  phone_number: string;

  @ManyToOne(() => Business, (business) => business.staff, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'business_id' })
  business: Business;
}
