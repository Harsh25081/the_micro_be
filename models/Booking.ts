import { DataTypes, Model } from 'sequelize';
import database from '@/config/database';

class Booking extends Model {
  public id!: string;
  public bookingNumber!: string;
  public userId!: string;
  public testIds!: string[];
  public packageIds!: string[];
  public totalAmount!: number;
  public discountAmount!: number | null;
  public finalAmount!: number;
  public collectionType!: string;
  public collectionDate!: Date;
  public collectionTime!: string | null;
  public collectionAddress!: string | null;
  public city!: string;
  public state!: string;
  public pincode!: string;
  public paymentStatus!: string;
  public paymentMethod!: string | null;
  public razorpayOrderId!: string | null;
  public razorpayPaymentId!: string | null;
  public bookingStatus!: string;
  public notes!: string | null;
  public createdAt!: Date;
  public updatedAt!: Date;
}

Booking.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    bookingNumber: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
    },
    testIds: {
      type: DataTypes.JSON,
      allowNull: false,
      defaultValue: [],
    },
    packageIds: {
      type: DataTypes.JSON,
      allowNull: false,
      defaultValue: [],
    },
    totalAmount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    discountAmount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
    },
    finalAmount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    collectionType: {
      type: DataTypes.ENUM('home', 'center'),
      allowNull: false,
    },
    collectionDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    collectionTime: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    collectionAddress: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pincode: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    paymentStatus: {
      type: DataTypes.ENUM('pending', 'paid', 'failed', 'refunded'),
      defaultValue: 'pending',
    },
    paymentMethod: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    razorpayOrderId: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
    },
    razorpayPaymentId: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
    },
    bookingStatus: {
      type: DataTypes.ENUM('pending', 'confirmed', 'collected', 'completed', 'cancelled'),
      defaultValue: 'pending',
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    sequelize: database,
    tableName: 'bookings',
    timestamps: true,
  }
);

export default Booking;
