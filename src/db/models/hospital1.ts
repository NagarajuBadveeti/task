// models/Hospital1.ts
import { DataTypes, Model, Optional } from "sequelize";
import sequelizeConnection from "../config";

interface Hospital1Attributes {
  id: number;
  name: string;

  latitude: number;
  longitude: number;
}

export interface Hospital1Input extends Optional<Hospital1Attributes, 'id'> {}
export interface Hospital1Output extends Required<Hospital1Attributes> {}

class Hospital1 extends Model<Hospital1Attributes, Hospital1Input> implements Hospital1Attributes {
  public id!: number;
  public name!: string;
 
  public latitude!: number;
  public longitude!: number;

  public readonly createdAt?: Date;
  public readonly updatedAt?: Date;
  public readonly deletedAt?: Date;
}

Hospital1.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  
    latitude: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    longitude: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    paranoid: true,
    sequelize: sequelizeConnection,
  }
);

export default Hospital1;
