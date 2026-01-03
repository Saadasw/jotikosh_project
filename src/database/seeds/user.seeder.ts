import { DataSource } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User } from '../../entities';
import { usersSeedData } from './data/users.data';

export class UserSeeder {
  constructor(private dataSource: DataSource) {}

  async run(): Promise<void> {
    const userRepository = this.dataSource.getRepository(User);

    console.log('🌱 Seeding users...');

    for (const userData of usersSeedData) {
      const existingUser = await userRepository.findOne({
        where: { email: userData.email },
      });

      if (existingUser) {
        console.log(`  ⏭️  User already exists: ${userData.email}`);
        continue;
      }

      const hashedPassword = await bcrypt.hash(userData.password, 10);

      const user = userRepository.create({
        ...userData,
        password: hashedPassword,
        isActive: userData.isActive ?? true,
      });

      await userRepository.save(user);
      console.log(`  ✅ Created user: ${userData.email} (${userData.role})`);
    }

    console.log('🌱 User seeding completed!');
  }

  async clear(): Promise<void> {
    const userRepository = this.dataSource.getRepository(User);

    console.log('🗑️  Clearing users...');
    await userRepository.clear();
    console.log('🗑️  Users cleared!');
  }

  async refresh(): Promise<void> {
    await this.clear();
    await this.run();
  }
}
