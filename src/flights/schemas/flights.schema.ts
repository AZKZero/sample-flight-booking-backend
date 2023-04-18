import { BelongsTo, Column, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Airline } from "./airlines.schema";
import { InferAttributes, InferCreationAttributes } from "sequelize";

@Table({tableName:'flight',createdAt:true, updatedAt:true})
export class Flight extends Model<InferAttributes<Flight>, InferCreationAttributes<Flight>> {
    @PrimaryKey
    @Column({ field: 'flight_id' })
    flightId: number;

    @Column({ field: 'flight_name' })
    flightName: string;

    @Column({ field: 'flight_plane_number' })
    flightNumber: string;

    @Column({ field: 'flight_arrival_time' })
    flightArrivalTime: Date;

    @Column({ field: 'flight_departure_time' })
    flightDepartureTime: Date;

    @Column({ field: 'flight_source' })
    flightSource: string;

    @Column({ field: 'flight_destination' })
    flightDestination: string;

    @Column({ field: 'flight_total_seats' })
    flightTotalSeats: number;

    @ForeignKey(() => Airline)
    @Column({ field: 'airline_id' })
    airlineId: string;

    @BelongsTo(() => Airline)
    airline: Airline
}