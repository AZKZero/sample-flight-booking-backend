import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Booking } from './schemas/booking.schema';
import { Flight } from 'src/flights/schemas/flights.schema';
import { InjectModel } from '@nestjs/sequelize';
import { User } from 'src/users/schemas/users.schema';

@Injectable()
export class BookingService {
    constructor(
        @InjectModel(Booking)
        private bookingModel: typeof Booking,
        @InjectModel(Flight)
        private flightModel: typeof Flight,) { }


    async get(user: User) {
        return await this.bookingModel.findAll(
            {
                where: { userId: user.userId },
                include: [
                    Flight,
                    {
                        model:User,
                        attributes:{exclude:['password', 'blocked', 'isAdmin']}
                    }
                ]
            })
    }

    async create(user: User, flightId: string) {
        var flight = await this.flightModel.findOne({ where: { flightId: flightId } })
        if (flight) {
            console.log(flight.flightId);

            if (flight.bookings) {
                if (flight.bookings.length < flight.flightTotalSeats)
                    return await this.bookingModel.create({
                        flightId: flight.flightId,
                        userId: user.userId
                    })
                else {
                    throw new HttpException("Flight Full", HttpStatus.BAD_REQUEST);
                }
            } else {
                return await this.bookingModel.create({
                    flightId: flight.flightId,
                    userId: user.userId
                })
            }

        } else {
            throw new HttpException("Flight Not Found", HttpStatus.BAD_REQUEST);
        }
    }
}
