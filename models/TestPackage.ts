import { DataTypes, Model } from 'sequelize';
import database from '@/config/database';

class TestPackage extends Model {
  public id!: string;
  public name!: string;
  public description!: string;
  public price!: number;
  public basePrice!: number;
  public discountPercentage!: number | null;
  public testIds!: string[];
  public packageType!: string;
  public image!: string | null;
  public isActive!: boolean;
  public createdAt!: Date;
  public updatedAt!: Date;
}

TestPackage.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    basePrice: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    discountPercentage: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    testIds: {
      type: DataTypes.JSON,
      allowNull: false,
      defaultValue: [],
    },
    packageType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    sequelize: database,
    tableName: 'test_packages',
    timestamps: true,
  }
);

export default TestPackage;
