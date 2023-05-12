import { Module } from '@nestjs/common';
import { BookingService } from './booking.service';
import { BookingController } from './booking.controller';
import { AuthModule } from 'src/auth/auth.module';
import { UsersModule } from 'src/users/users.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Booking } from './schemas/booking.schema';
import { Flight } from 'src/flights/schemas/flights.schema';

@Module({
  providers: [BookingService],
  controllers: [BookingController],
  imports: [AuthModule, UsersModule, SequelizeModule.forFeature([Booking, Flight])],
})
export class BookingModule { }
