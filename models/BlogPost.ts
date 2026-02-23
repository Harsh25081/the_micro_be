import { DataTypes, Model } from 'sequelize';
import database from '@/config/database';

class BlogPost extends Model {
  public id!: string;
  public title!: string;
  public slug!: string;
  public content!: string;
  public excerpt!: string;
  public authorId!: string;
  public category!: string;
  public tags!: string[];
  public image!: string | null;
  public isPublished!: boolean;
  public publishedAt!: Date | null;
  public views!: number;
  public createdAt!: Date;
  public updatedAt!: Date;
}

BlogPost.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    slug: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    excerpt: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    authorId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'admins',
        key: 'id',
      },
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tags: {
      type: DataTypes.JSON,
      allowNull: false,
      defaultValue: [],
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    isPublished: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    publishedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    views: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },
  {
    sequelize: database,
    tableName: 'blog_posts',
    timestamps: true,
  }
);

export default BlogPost;
