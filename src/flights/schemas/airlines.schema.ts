import { Column, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Flight } from "./flights.schema";

@Table({ tableName: 'airline', createdAt: true, updatedAt: true })
export class Airline extends Model {
    @PrimaryKey
    @Column({ field: 'airline_id' })
    airlineId: number;

    @Column({ field: 'airline_name' })
    airlineName: string;

    @HasMany(() => Flight)
    flights: Flight[]
}