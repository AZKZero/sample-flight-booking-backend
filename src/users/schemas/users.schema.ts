import { InferAttributes, InferCreationAttributes } from "sequelize";
import { HasMany, AutoIncrement, Column, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Booking } from "src/booking/schemas/booking.schema";

@Table({tableName:'user',createdAt:true, updatedAt:true})
export class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
    @PrimaryKey
    @AutoIncrement
    @Column({ field: 'id'})
    userId: number;
    
    @Column({field:'name'})
    name:string;
    
    @Column({field:'password'})
    password:string;
    
    @Column({field:'email'})
    email:string;
    
    @Column({field:'is_admin'})
    isAdmin:boolean;

    @HasMany(() => Booking)
    bookings: Booking[];
}