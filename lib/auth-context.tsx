'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type UserRole = 'CITIZEN' | 'OFFICER' | 'ADMIN';

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  phone?: string;
  aadhaarNumber?: string;
  role: UserRole;
  state?: string;
  district?: string;
  department?: string;
  designation?: string;
  token?: string;
}

interface AuthContextType {
  user: UserProfile | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (credentials: { identifier: string; password?: string; role?: UserRole }) => Promise<{ success: boolean; message?: string }>;
  register: (data: Partial<UserProfile> & { password?: string }) => Promise<{ success: boolean; message?: string }>;
  logout: () => void;
  sendResetOtp: (identifier: string) => Promise<{ success: boolean; otp?: string; message?: string }>;
  resetPassword: (identifier: string, otp: string, newPassword: string) => Promise<{ success: boolean; message?: string }>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  isLoading: true,
  login: async () => ({ success: false }),
  register: async () => ({ success: false }),
  logout: () => {},
  sendResetOtp: async () => ({ success: false }),
  resetPassword: async () => ({ success: false }),
});

export const DEMO_USERS: Record<UserRole, UserProfile> = {
  CITIZEN: {
    id: 'CITIZEN-8912',
    name: 'Rajesh Kumar Sharma',
    email: 'rajesh.sharma@example.com',
    phone: '+91 98765 43210',
    aadhaarNumber: 'XXXX-XXXX-8912',
    role: 'CITIZEN',
    state: 'Uttar Pradesh',
    district: 'Gautam Buddha Nagar'
  },
  OFFICER: {
    id: 'OFFICER-4402',
    name: 'Dr. Anita Deshmukh',
    email: 'anita.deshmukh@gov.in',
    phone: '+91 98111 22334',
    role: 'OFFICER',
    department: 'Ministry of Agriculture & Farmers Welfare',
    designation: 'Tehsildar & Nodal Scheme Officer',
    state: 'Maharashtra',
    district: 'Pune'
  },
  ADMIN: {
    id: 'ADMIN-001',
    name: 'System Administrator (MeitY)',
    email: 'admin@jansahay.gov.in',
    phone: '+91 98000 11223',
    role: 'ADMIN',
    department: 'National Informatics Centre',
    state: 'National Portal',
    district: 'New Delhi'
  }
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Restore session from localStorage on client mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const stored = localStorage.getItem('jansahay_auth_user');
        if (stored) {
          setUser(JSON.parse(stored));
        }
      } catch (err) {
        console.error('Error loading stored session:', err);
      }
      setIsLoading(false);
    }
  }, []);

  const login = async (credentials: { identifier: string; password?: string; role?: UserRole }) => {
    // Determine user role
    const chosenRole = credentials.role || 'CITIZEN';
    let profile: UserProfile = DEMO_USERS[chosenRole];

    // If custom email provided, build customized profile
    if (credentials.identifier && !credentials.identifier.includes('demo')) {
      profile = {
        ...profile,
        email: credentials.identifier.includes('@') ? credentials.identifier : `${credentials.identifier}@citizen.in`,
        name: credentials.identifier.split('@')[0] || profile.name,
        role: chosenRole
      };
    }

    setUser(profile);
    if (typeof window !== 'undefined') {
      localStorage.setItem('jansahay_auth_user', JSON.stringify(profile));
    }

    return { success: true, message: 'Signed in successfully!' };
  };

  const register = async (data: Partial<UserProfile> & { password?: string }) => {
    const role = data.role || 'CITIZEN';
    const newProfile: UserProfile = {
      id: `USER-${Math.floor(100000 + Math.random() * 900000)}`,
      name: data.name || 'New Beneficiary',
      email: data.email || 'user@jansahay.gov.in',
      phone: data.phone || '+91 98765 00000',
      aadhaarNumber: data.aadhaarNumber || 'XXXX-XXXX-1234',
      role: role,
      state: data.state || 'Maharashtra',
      district: data.district || 'Mumbai'
    };

    setUser(newProfile);
    if (typeof window !== 'undefined') {
      localStorage.setItem('jansahay_auth_user', JSON.stringify(newProfile));
    }

    return { success: true, message: 'Account created successfully!' };
  };

  const logout = () => {
    setUser(null);
    if (typeof window !== 'undefined') {
      localStorage.removeItem('jansahay_auth_user');
    }
  };

  const sendResetOtp = async (identifier: string) => {
    return {
      success: true,
      otp: '654321',
      message: 'OTP 654321 sent to registered contact'
    };
  };

  const resetPassword = async (identifier: string, otp: string, newPassword: string) => {
    if (otp !== '654321' && otp.length !== 6) {
      return { success: false, message: 'Invalid OTP entered. Please use demo code 654321.' };
    }
    return { success: true, message: 'Password updated successfully!' };
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        register,
        logout,
        sendResetOtp,
        resetPassword
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
