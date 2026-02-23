import { DataTypes, Model } from 'sequelize';
import database from '@/config/database';
import bcrypt from 'bcrypt';

class Admin extends Model {
  public id!: string;
  public email!: string;
  public passwordHash!: string;
  public firstName!: string;
  public lastName!: string;
  public role!: string;
  public permissions!: string[];
  public isActive!: boolean;
  public lastLoginAt!: Date | null;
  public createdAt!: Date;
  public updatedAt!: Date;
}

Admin.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    passwordHash: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM('admin', 'manager', 'lab_technician'),
      defaultValue: 'admin',
    },
    permissions: {
      type: DataTypes.JSON,
      defaultValue: [],
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    lastLoginAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    sequelize: database,
    tableName: 'admins',
    timestamps: true,
    hooks: {
      beforeCreate: async (admin) => {
        if (admin.passwordHash) {
          admin.passwordHash = await bcrypt.hash(admin.passwordHash, 10);
        }
      },
      beforeUpdate: async (admin) => {
        if (admin.changed('passwordHash') && admin.passwordHash) {
          admin.passwordHash = await bcrypt.hash(admin.passwordHash, 10);
        }
      },
    },
  }
);

export default Admin;
