// composables/useMockAuth.ts
import { MOCK_USERS, getMockUserByCredentials, type MockUser } from '~/config/mock-users';
import { isSlicingMode } from '~/config/app-mode';

/**
 * Mock Authentication System
 * Handles static login for demo purposes
 */
export const useMockAuth = () => {
  
  /**
   * Mock login function
   * @param email User email
   * @param password User password  
   * @returns Promise with user data or error
   */
  const mockLogin = async (email: string, password: string) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const user = getMockUserByCredentials(email, password);
    
    if (!user) {
      throw new Error('Invalid credentials');
    }
    
    // Store user in localStorage untuk persistence
    if (process.client) {
      localStorage.setItem('mock_user', JSON.stringify(user));
      localStorage.setItem('mock_token', `mock_token_${user.id}_${Date.now()}`);
    }
    
    return {
      status: true,
      message: 'Login successful',
      data: user,
      token: `mock_token_${user.id}_${Date.now()}`
    };
  };

  /**
   * Mock logout function
   */
  const mockLogout = async () => {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    if (process.client) {
      localStorage.removeItem('mock_user');
      localStorage.removeItem('mock_token');
    }
    
    return {
      status: true,
      message: 'Logout successful'
    };
  };

  /**
   * Get current mock user from storage
   */
  const getCurrentMockUser = (): MockUser | null => {
    if (!process.client) return null;
    
    const userStr = localStorage.getItem('mock_user');
    if (!userStr) return null;
    
    try {
      return JSON.parse(userStr);
    } catch (error) {
      return null;
    }
  };

  /**
   * Check if user has mock token
   */
  const hasMockToken = (): boolean => {
    if (!process.client) return false;
    return !!localStorage.getItem('mock_token');
  };

  /**
   * Mock fetch user data (simulate /auth/me endpoint)
   */
  const mockFetchUser = async () => {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const user = getCurrentMockUser();
    const hasToken = hasMockToken();
    
    if (!user || !hasToken) {
      return {
        status: false,
        message: 'Unauthorized',
        data: null
      };
    }
    
    return {
      status: true,
      message: 'User data fetched successfully',
      data: user
    };
  };

  /**
   * Quick login functions untuk demo
   */
  const quickLoginAs = {
    admin: () => mockLogin("admin@traspac.co.id", "admin123"),
    hr: () => mockLogin("hr@traspac.co.id", "hr123"), 
    interviewer: () => mockLogin("interviewer1@traspac.co.id", "interviewer123"),
    pelamar: () => mockLogin("pelamar1@gmail.com", "pelamar123")
  };

  return {
    mockLogin,
    mockLogout,
    getCurrentMockUser,
    hasMockToken,
    mockFetchUser,
    quickLoginAs
  };
};
