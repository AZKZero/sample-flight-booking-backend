import { Request, Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { BookingService } from './booking.service';

@Controller('booking')
export class BookingController {
    constructor(
        private readonly bookingService:BookingService
        ) { }
    

    @UseGuards(JwtAuthGuard)
    @Post("create_booking")
    async createTicketForFlight(@Request() req, @Body() body) {
        return this.bookingService.create(req.user, body.flightId)
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    async getTickets(@Request() req) {
        return {
            tickets: await this.bookingService.get(req.user)
        }
    }
}
