import { InferAttributes, InferCreationAttributes } from "sequelize";
import { Column, Model, PrimaryKey, Table } from "sequelize-typescript";

@Table({tableName:'user',createdAt:true, updatedAt:true})
export class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
    @PrimaryKey
    @Column({ field: 'id' })
    userId: number;
    
    @Column({field:'name'})
    name:string;
    
    @Column({field:'password'})
    password:string;
    
    @Column({field:'email'})
    email:string;
}