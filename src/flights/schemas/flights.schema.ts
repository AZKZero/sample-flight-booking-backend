import { BelongsTo, Column, ForeignKey, Model, PrimaryKey } from "sequelize-typescript";
import { Airline } from "./airlines.schema";

export class Flight extends Model {
    @PrimaryKey
    @Column({ field: 'flight_id' })
    flightId: string;

    @Column({ field: 'flight_name' })
    flightName: string;

    @Column({ field: 'flight_plane_number' })
    flightNumber: string;

    @Column({ field: 'flight_arrival_time' })
    flightArrivalTime: Date;

    @Column({ field: 'flight_departure_time' })
    flightDepartureTime: Date;

    @Column({ field: 'flight_depart_location' })
    flightDepartLocation: string;

    @Column({ field: 'flight_arrival_location' })
    flightArrivalLocation: string;

    @Column({ field: 'flight_total_seats' })
    flightTotalSeats: number;

    @ForeignKey(() => Airline)
    @Column({ field: 'airline_id' })
    airlineId: string;

    @BelongsTo(() => Airline)
    airline: Airline
}