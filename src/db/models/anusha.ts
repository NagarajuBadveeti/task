 import { DataTypes,Model,Optional } from "sequelize";
 import sequelizeConnection from "../config";

 interface AnushaAttributes {
    id: number;
    name: string;
    address: string;
    contact: number;
 }
 export interface AnushaInput extends Optional<AnushaAttributes, 'id'>{}
 export interface AnushaOutput extends Required<AnushaAttributes>{}
 class Anusha extends Model<AnushaAttributes, AnushaInput> implements AnushaAttributes {
    public id!: number;
    public name!: string;
    public address!: string;
    public contact!: number;
    public readonly createdAt?: Date;
    public readonly updatedAt?: Date;
    public readonly deletedAt?: Date;
 }
 Anusha.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique:true
        },
        name: DataTypes.STRING,
        address: DataTypes.STRING,
        contact: DataTypes.INTEGER,
    },
    {
        timestamps: true,
        paranoid: true,
        sequelize: sequelizeConnection,
    });
    export default Anusha;

