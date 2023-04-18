import { Injectable } from '@nestjs/common';
import { Flight } from './schemas/flights.schema';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class FlightsService {

    constructor(
        @InjectModel(Flight)
        private flightModel: typeof Flight,
    ) {}

    async createFlight(flight: Flight): Promise<Flight> {
        var createdFlight = await this.flightModel.create(flight)
        console.log(createdFlight);

        return await this.flightModel.findOne(
            {
                where: { flightId: createdFlight.flightId }
            }
        )
    }
}
