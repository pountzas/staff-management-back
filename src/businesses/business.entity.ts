import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Staff } from '../staff/staff.entity'; // Import the Staff entity

export enum BusinessType {
  BAR = 'bar',
  RESTAURANT = 'restaurant',
  CLUB = 'club',
  HOTEL = 'hotel',
  CAFE = 'cafe',
}

@Entity()
export class Business {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  location: string;

  @Column({
    type: 'enum',
    enum: BusinessType,
    nullable: true,
  })
  type: BusinessType;

  @OneToMany(() => Staff, (staff) => staff.business)
  staff: Staff[];
}