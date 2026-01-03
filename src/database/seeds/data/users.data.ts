import { UserRole } from '../../../entities';

/**
 * ============================================
 * SAMPLE USER DATA
 * ============================================
 *
 * Replace this array with your own data as needed.
 * Each user object should match the UserSeedData interface.
 *
 * Note: Passwords should be plain text here - they will be
 * hashed during the seeding process.
 */

export interface UserSeedData {
  email: string;
  password: string;
  name: string;
  role: UserRole;
  phone?: string;
  isActive?: boolean;
}

export const usersSeedData: UserSeedData[] = [
  // ==================== ADMIN USERS ====================
  {
    email: 'admin@jotikosh.com',
    password: 'Admin@123',
    name: 'System Administrator',
    role: UserRole.ADMIN,
    phone: '+1-555-0100',
    isActive: true,
  },
  {
    email: 'manager@jotikosh.com',
    password: 'Manager@123',
    name: 'Clinic Manager',
    role: UserRole.ADMIN,
    phone: '+1-555-0101',
    isActive: true,
  },

  // ==================== DOCTOR USERS ====================
  {
    email: 'dr.smith@jotikosh.com',
    password: 'Doctor@123',
    name: 'Dr. John Smith',
    role: UserRole.DOCTOR,
    phone: '+1-555-0200',
    isActive: true,
  },
  {
    email: 'dr.johnson@jotikosh.com',
    password: 'Doctor@123',
    name: 'Dr. Sarah Johnson',
    role: UserRole.DOCTOR,
    phone: '+1-555-0201',
    isActive: true,
  },
  {
    email: 'dr.williams@jotikosh.com',
    password: 'Doctor@123',
    name: 'Dr. Michael Williams',
    role: UserRole.DOCTOR,
    phone: '+1-555-0202',
    isActive: true,
  },

  // ==================== STAFF USERS ====================
  {
    email: 'nurse.davis@jotikosh.com',
    password: 'Staff@123',
    name: 'Emily Davis',
    role: UserRole.STAFF,
    phone: '+1-555-0300',
    isActive: true,
  },
  {
    email: 'receptionist@jotikosh.com',
    password: 'Staff@123',
    name: 'Jessica Brown',
    role: UserRole.STAFF,
    phone: '+1-555-0301',
    isActive: true,
  },
  {
    email: 'lab.tech@jotikosh.com',
    password: 'Staff@123',
    name: 'Robert Wilson',
    role: UserRole.STAFF,
    phone: '+1-555-0302',
    isActive: true,
  },

  // ==================== PATIENT USERS ====================
  {
    email: 'patient1@example.com',
    password: 'Patient@123',
    name: 'Alice Thompson',
    role: UserRole.PATIENT,
    phone: '+1-555-0400',
    isActive: true,
  },
  {
    email: 'patient2@example.com',
    password: 'Patient@123',
    name: 'Bob Martinez',
    role: UserRole.PATIENT,
    phone: '+1-555-0401',
    isActive: true,
  },
  {
    email: 'patient3@example.com',
    password: 'Patient@123',
    name: 'Carol Anderson',
    role: UserRole.PATIENT,
    phone: '+1-555-0402',
    isActive: true,
  },
  {
    email: 'patient4@example.com',
    password: 'Patient@123',
    name: 'David Lee',
    role: UserRole.PATIENT,
    phone: '+1-555-0403',
    isActive: true,
  },
  {
    email: 'patient5@example.com',
    password: 'Patient@123',
    name: 'Eva Garcia',
    role: UserRole.PATIENT,
    phone: '+1-555-0404',
    isActive: true,
  },

  // ==================== INACTIVE USERS (for testing) ====================
  {
    email: 'inactive.doctor@jotikosh.com',
    password: 'Doctor@123',
    name: 'Dr. James Miller (Inactive)',
    role: UserRole.DOCTOR,
    phone: '+1-555-0500',
    isActive: false,
  },
  {
    email: 'inactive.patient@example.com',
    password: 'Patient@123',
    name: 'Frank White (Inactive)',
    role: UserRole.PATIENT,
    phone: '+1-555-0501',
    isActive: false,
  },
];
