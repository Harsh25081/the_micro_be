import { DataTypes, Model } from 'sequelize';
import database from '@/config/database';

class User extends Model {
  public id!: string;
  public phone!: string;
  public email!: string | null;
  public firstName!: string | null;
  public lastName!: string | null;
  public age!: number | null;
  public gender!: string | null;
  public address!: string | null;
  public city!: string | null;
  public state!: string | null;
  public pincode!: string | null;
  public otp!: string | null;
  public otpExpiresAt!: Date | null;
  public isVerified!: boolean;
  public sessionToken!: string | null;
  public lastLoginAt!: Date | null;
  public createdAt!: Date;
  public updatedAt!: Date;
}

User.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    phone: {
      type: DataTypes.STRING(15),
      unique: true,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    gender: {
      type: DataTypes.ENUM('M', 'F', 'Other'),
      allowNull: true,
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    pincode: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
    otp: {
      type: DataTypes.STRING(6),
      allowNull: true,
    },
    otpExpiresAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    isVerified: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    sessionToken: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
    },
    lastLoginAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    sequelize: database,
    tableName: 'users',
    timestamps: true,
  }
);

export default User;
