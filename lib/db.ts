import { syncDatabase } from '@/models';

let dbInitialized = false;

export async function initializeDatabase() {
  if (dbInitialized) {
    return;
  }

  try {
    await syncDatabase();
    dbInitialized = true;
  } catch (error) {
    console.error('Failed to initialize database:', error);
    throw error;
  }
}

export { default as database } from '@/config/database';
