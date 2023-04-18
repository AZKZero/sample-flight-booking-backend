import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { Airline } from './schemas/airlines.schema';
import { Flight } from './schemas/flights.schema';
import { WhereOptions, InferAttributes, Op } from 'sequelize';
import { endOfDay, startOfDay } from 'date-fns';
import { FlightsService } from './flights.service';
import { AdminGuard } from 'src/auth/guards/admin-jwt-auth.guard';

@Controller('flights')
export class FlightsController {
    constructor(
        @InjectModel(Airline)
        private airlineModel: typeof Airline,
        @InjectModel(Flight)
        private flightModel: typeof Flight,
        private readonly flightService: FlightsService
    ) { }
    @UseGuards(JwtAuthGuard)
    @Get()
    async getFlights(
        @Query('airline') airline?: string,
        @Query('from') from?: string,
        @Query('to') to?: string,
        @Query('departure_date') departure?: Date,
        @Query('arrival_date') arrival?: Date,
    ) {
        var flights = []
        console.log(`${from} ${to}`)
        flights = await this.flightModel.findAll(
            {
                where:
                {
                    airlineId: airline,
                    flightSource: from,
                    flightDestination: to,
                    flightDepartureTime: departure ? { [Op.between]: [startOfDay(departure), endOfDay(departure)] } : null,
                    flightArrivalTime: arrival ? { [Op.between]: [startOfDay(arrival), endOfDay(arrival)] } : null
                }
            });


        console.log(`${flights}`)
        return {
            flights: flights
        }
    }

    @UseGuards(JwtAuthGuard, AdminGuard)
    @Post()
    async addFlight(
        @Body() body: Flight) {
        return this.flightService.createFlight(body)
    }
}
