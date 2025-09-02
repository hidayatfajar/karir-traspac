// config/mock-users.ts
/**
 * Mock users data untuk testing dan demo
 * Data ini akan digunakan untuk simulasi login di development mode
 */

export interface MockUser {
  id: number;
  name: string;
  email: string;
  password: string; // Password statis untuk demo
  user_group_id: string;
  role_name: string;
  avatar?: string;
  department?: string;
  position?: string;
  phone?: string;
  created_at: string;
  updated_at: string;
}

/**
 * Database mock users untuk semua role
 */
export const MOCK_USERS: MockUser[] = [
  // ADMIN USERS
  {
    id: 1,
    name: "Admin Super",
    email: "admin@traspac.co.id",
    password: "admin123",
    user_group_id: "00",
    role_name: "Super Admin",
    avatar: "https://ui-avatars.com/api/?name=Admin+Super&background=0ea5e9&color=fff",
    department: "IT Department",
    position: "System Administrator",
    phone: "+62 812-3456-7890",
    created_at: "2024-01-01T08:00:00.000Z",
    updated_at: "2024-01-01T08:00:00.000Z"
  },
  
  // HR USERS  
  {
    id: 2,
    name: "Sarah Wijaya",
    email: "hr@traspac.co.id", 
    password: "hr123",
    user_group_id: "01",
    role_name: "HR Manager",
    avatar: "https://ui-avatars.com/api/?name=Sarah+Wijaya&background=10b981&color=fff",
    department: "Human Resources",
    position: "HR Manager",
    phone: "+62 813-4567-8901",
    created_at: "2024-01-15T09:00:00.000Z",
    updated_at: "2024-01-15T09:00:00.000Z"
  },
  {
    id: 3,
    name: "Budi Santoso",
    email: "hr.recruitment@traspac.co.id",
    password: "hr123", 
    user_group_id: "01",
    role_name: "HR Recruitment",
    avatar: "https://ui-avatars.com/api/?name=Budi+Santoso&background=10b981&color=fff",
    department: "Human Resources",
    position: "Recruitment Specialist",
    phone: "+62 814-5678-9012",
    created_at: "2024-02-01T09:00:00.000Z",
    updated_at: "2024-02-01T09:00:00.000Z"
  },

  // INTERVIEWER USERS
  {
    id: 4,
    name: "Dr. Ahmad Fauzi", 
    email: "interviewer1@traspac.co.id",
    password: "interviewer123",
    user_group_id: "02", 
    role_name: "Senior Interviewer",
    avatar: "https://ui-avatars.com/api/?name=Ahmad+Fauzi&background=f59e0b&color=fff",
    department: "Engineering",
    position: "Technical Lead",
    phone: "+62 815-6789-0123",
    created_at: "2024-01-20T10:00:00.000Z",
    updated_at: "2024-01-20T10:00:00.000Z"
  },
  {
    id: 5,
    name: "Siti Nurhaliza",
    email: "interviewer2@traspac.co.id", 
    password: "interviewer123",
    user_group_id: "02",
    role_name: "HR Interviewer", 
    avatar: "https://ui-avatars.com/api/?name=Siti+Nurhaliza&background=f59e0b&color=fff",
    department: "Human Resources",
    position: "HR Business Partner",
    phone: "+62 816-7890-1234",
    created_at: "2024-02-10T10:00:00.000Z", 
    updated_at: "2024-02-10T10:00:00.000Z"
  },

  // PELAMAR USERS
  {
    id: 6,
    name: "John Doe",
    email: "pelamar1@gmail.com",
    password: "pelamar123", 
    user_group_id: "03",
    role_name: "Job Applicant",
    avatar: "https://ui-avatars.com/api/?name=John+Doe&background=6366f1&color=fff",
    department: null,
    position: "Frontend Developer (Applied)",
    phone: "+62 817-8901-2345",
    created_at: "2024-08-01T11:00:00.000Z",
    updated_at: "2024-08-01T11:00:00.000Z"
  },
  {
    id: 7,
    name: "Jane Smith",
    email: "pelamar2@gmail.com", 
    password: "pelamar123",
    user_group_id: "03",
    role_name: "Job Applicant",
    avatar: "https://ui-avatars.com/api/?name=Jane+Smith&background=6366f1&color=fff", 
    department: null,
    position: "UI/UX Designer (Applied)",
    phone: "+62 818-9012-3456",
    created_at: "2024-08-15T12:00:00.000Z",
    updated_at: "2024-08-15T12:00:00.000Z"
  },
  {
    id: 8,
    name: "Michael Johnson", 
    email: "pelamar3@gmail.com",
    password: "pelamar123",
    user_group_id: "03", 
    role_name: "Job Applicant",
    avatar: "https://ui-avatars.com/api/?name=Michael+Johnson&background=6366f1&color=fff",
    department: null,
    position: "Backend Developer (Applied)", 
    phone: "+62 819-0123-4567",
    created_at: "2024-09-01T13:00:00.000Z",
    updated_at: "2024-09-01T13:00:00.000Z"
  }
];

/**
 * Get user by email and password
 */
export const getMockUserByCredentials = (email: string, password: string): MockUser | null => {
  return MOCK_USERS.find(user => 
    user.email === email && user.password === password
  ) || null;
};

/**
 * Get user by ID
 */
export const getMockUserById = (id: number): MockUser | null => {
  return MOCK_USERS.find(user => user.id === id) || null;
};

/**
 * Get users by role/group
 */
export const getMockUsersByGroup = (groupId: string): MockUser[] => {
  return MOCK_USERS.filter(user => user.user_group_id === groupId);
};

/**
 * Get all mock users
 */
export const getAllMockUsers = (): MockUser[] => {
  return MOCK_USERS;
};

/**
 * Demo credentials for easy testing
 */
export const DEMO_CREDENTIALS = {
  admin: { email: "admin@traspac.co.id", password: "admin123" },
  hr: { email: "hr@traspac.co.id", password: "hr123" },
  interviewer: { email: "interviewer1@traspac.co.id", password: "interviewer123" },
  pelamar: { email: "pelamar1@gmail.com", password: "pelamar123" }
};

/**
 * Role descriptions untuk UI
 */
export const ROLE_DESCRIPTIONS = {
  "00": "Super Admin - Full system access",
  "01": "Human Resources - Manage recruitment process", 
  "02": "Interviewer - Conduct interviews and assessments",
  "03": "Job Applicant - Apply for positions and track applications"
};
