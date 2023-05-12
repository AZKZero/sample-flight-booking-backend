import { InferAttributes, InferCreationAttributes } from "sequelize";
import { BelongsTo, Table, PrimaryKey, Column, ForeignKey, Model } from "sequelize-typescript";
import { Flight } from "src/flights/schemas/flights.schema";
import { User } from "src/users/schemas/users.schema";

@Table({ tableName: 'booking', timestamps: true })
export class Booking extends Model<InferAttributes<Booking>, InferCreationAttributes<Booking>> {
    @PrimaryKey
    @Column({ field: 'booking_id', autoIncrement: true })
    ticketId: number;

    @ForeignKey(() => Flight)
    @Column({ field: 'flight_id' })
    flightId: number;

    @ForeignKey(() => User)
    @Column({ field: 'id' })
    userId: number;

    @BelongsTo(() => Flight)
    flight: Flight;

    @BelongsTo(() => User)
    user: User;
}