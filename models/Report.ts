import { DataTypes, Model } from 'sequelize';
import database from '@/config/database';

class Report extends Model {
  public id!: string;
  public bookingId!: string;
  public userId!: string;
  public testId!: string;
  public reportStatus!: string;
  public reportFile!: string | null;
  public testResults!: object | null;
  public normalRanges!: object | null;
  public interpretations!: string | null;
  public doctorNotes!: string | null;
  public reportGeneratedAt!: Date | null;
  public createdAt!: Date;
  public updatedAt!: Date;
}

Report.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    bookingId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'bookings',
        key: 'id',
      },
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
    },
    testId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'tests',
        key: 'id',
      },
    },
    reportStatus: {
      type: DataTypes.ENUM('pending', 'completed', 'reviewed', 'rejected'),
      defaultValue: 'pending',
    },
    reportFile: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    testResults: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    normalRanges: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    interpretations: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    doctorNotes: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    reportGeneratedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    sequelize: database,
    tableName: 'reports',
    timestamps: true,
  }
);

export default Report;
