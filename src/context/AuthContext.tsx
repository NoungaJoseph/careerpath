import { createContext, useContext, useState, type ReactNode } from 'react';

type User = {
  firstName: string;
  initials: string;
  email: string;
  hasNotification: boolean;
  certificatesCount: number;
  skillsCount: number;
  profileStrength: number;
  completedSurveys: string[];
  activePath: {
    categoryKey: string;
    taskIndex: number;
    stepIndex: number;
  } | null;
};

type AuthContextType = {
  user: User | null;
  isLoggedIn: boolean;
  login: (email: string) => void;
  signup: (firstName: string, lastName: string, email: string) => void;
  logout: () => void;
  completeSurvey: (pathId: string) => void;
  updateActivePath: (categoryKey: string | null, taskIndex?: number, stepIndex?: number) => void;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  isLoggedIn: false,
  login: () => {},
  signup: () => {},
  logout: () => {},
  completeSurvey: () => {},
  updateActivePath: () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = (email: string) => {
    // Generate simple name from email or default to Nounga
    const parts = email.split('@')[0];
    const name = parts.charAt(0).toUpperCase() + parts.slice(1);
    const initials = name.substring(0, 2).toUpperCase();
    setUser({
      firstName: name || 'Nounga',
      initials: initials || 'NJ',
      email,
      hasNotification: true,
      certificatesCount: 0,
      skillsCount: 0,
      profileStrength: 65, // Mock value for "Good" tier
      completedSurveys: [],
      activePath: null,
    });
  };

  const signup = (firstName: string, lastName: string, email: string) => {
    const initials = (firstName.charAt(0) + lastName.charAt(0)).toUpperCase();
    setUser({
      firstName,
      initials: initials || 'NJ',
      email,
      hasNotification: true,
      certificatesCount: 0,
      skillsCount: 0,
      profileStrength: 25, // Mock value for "Basic" tier for new users
      completedSurveys: [],
      activePath: null,
    });
  };

  const logout = () => setUser(null);

  const completeSurvey = (pathId: string) => {
    if (user && !user.completedSurveys.includes(pathId)) {
      setUser({ ...user, completedSurveys: [...user.completedSurveys, pathId] });
    }
  };

  const updateActivePath = (categoryKey: string | null, taskIndex = 0, stepIndex = 0) => {
    if (user) {
      if (categoryKey) {
        setUser({ ...user, activePath: { categoryKey, taskIndex, stepIndex } });
      } else {
        setUser({ ...user, activePath: null });
      }
    }
  };

  return (
    <AuthContext.Provider value={{ user, isLoggedIn: !!user, login, signup, logout, completeSurvey, updateActivePath }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
