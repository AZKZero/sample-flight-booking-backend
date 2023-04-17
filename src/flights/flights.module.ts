import { Module } from '@nestjs/common';
import { FlightsService } from './flights.service';
import { FlightsController } from './flights.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Flight } from './schemas/flights.schema';
import { Airline } from './schemas/airlines.schema';

@Module({
  imports:[SequelizeModule.forFeature([Airline, Flight])],
  exports: [SequelizeModule],
  providers: [FlightsService],
  controllers: [FlightsController]
})
export class FlightsModule {}
