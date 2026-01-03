import { DataSource } from 'typeorm';
import { User } from '../../entities';
import { UserSeeder } from './user.seeder';

/**
 * ============================================
 * DATABASE SEEDER
 * ============================================
 *
 * Usage:
 *   npm run seed          - Seed data (skip existing)
 *   npm run seed:refresh  - Clear and re-seed all data
 *
 * To modify sample data, edit the files in:
 *   src/database/seeds/data/
 */

const dataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432', 10),
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_NAME || 'jotikosh',
  entities: [User],
  synchronize: true,
});

async function seed() {
  const isRefresh = process.argv.includes('--refresh');

  try {
    console.log('📦 Connecting to database...');
    await dataSource.initialize();
    console.log('📦 Database connected!\n');

    const userSeeder = new UserSeeder(dataSource);

    if (isRefresh) {
      console.log('🔄 Refreshing all seed data...\n');
      await userSeeder.refresh();
    } else {
      await userSeeder.run();
    }

    console.log('\n✨ Seeding completed successfully!');
  } catch (error) {
    console.error('❌ Seeding failed:', error);
    process.exit(1);
  } finally {
    await dataSource.destroy();
  }
}

seed();
