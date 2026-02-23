import database from '@/config/database';
import User from './User';
import Test from './Test';
import TestPackage from './TestPackage';
import Booking from './Booking';
import Report from './Report';
import Admin from './Admin';
import BlogPost from './BlogPost';

// Define associations
User.hasMany(Booking, { foreignKey: 'userId', as: 'bookings' });
Booking.belongsTo(User, { foreignKey: 'userId', as: 'user' });

Booking.hasMany(Report, { foreignKey: 'bookingId', as: 'reports' });
Report.belongsTo(Booking, { foreignKey: 'bookingId', as: 'booking' });

User.hasMany(Report, { foreignKey: 'userId', as: 'userReports' });
Report.belongsTo(User, { foreignKey: 'userId', as: 'user' });

Test.hasMany(Report, { foreignKey: 'testId', as: 'reports' });
Report.belongsTo(Test, { foreignKey: 'testId', as: 'test' });

Admin.hasMany(BlogPost, { foreignKey: 'authorId', as: 'blogPosts' });
BlogPost.belongsTo(Admin, { foreignKey: 'authorId', as: 'author' });

export { default as User } from './User';
export { default as Test } from './Test';
export { default as TestPackage } from './TestPackage';
export { default as Booking } from './Booking';
export { default as Report } from './Report';
export { default as Admin } from './Admin';
export { default as BlogPost } from './BlogPost';
export { default as database } from '@/config/database';

export const syncDatabase = async () => {
  try {
    await database.authenticate();
    console.log('Database connection established');
    await database.sync({ alter: process.env.NODE_ENV === 'development' });
    console.log('Database synchronized successfully');
  } catch (error) {
    console.error('Database sync failed:', error);
    throw error;
  }
};
