import { DataTypes, Model } from 'sequelize';
import database from '@/config/database';

class Test extends Model {
  public id!: string;
  public name!: string;
  public description!: string;
  public category!: string;
  public price!: number;
  public basePrice!: number;
  public discountPercentage!: number | null;
  public turnaroundTime!: string;
  public homeCollectionAvailable!: boolean;
  public sampleType!: string;
  public preparationInstructions!: string | null;
  public resultsAvailableIn!: string;
  public image!: string | null;
  public isActive!: boolean;
  public createdAt!: Date;
  public updatedAt!: Date;
}

Test.init(
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
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      index: true,
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
    turnaroundTime: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    homeCollectionAvailable: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    sampleType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    preparationInstructions: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    resultsAvailableIn: {
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
    tableName: 'tests',
    timestamps: true,
  }
);

export default Test;
