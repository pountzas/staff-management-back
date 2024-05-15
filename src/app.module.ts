import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Business } from './businesses/business.entity';
import { Staff } from './staff/staff.entity';
import { StaffModule } from './staff/staff.module';
import { BusinessModule } from './businesses/business.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'a31122012',
      database: 'postgres',
      synchronize: true,
      entities: [Business,
        Staff,],
      // synchronize: true,
    }),
    StaffModule,
    BusinessModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
