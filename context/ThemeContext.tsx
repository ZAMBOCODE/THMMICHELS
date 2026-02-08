import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type AccentColor = 'orange' | 'blue';
type Mode = 'dark' | 'light';

interface ThemeContextType {
  accentColor: AccentColor;
  mode: Mode;
  toggleAccentColor: () => void;
  toggleMode: () => void;
  colors: {
    accent: string;
    accentHover: string;
    accentShadow: string;
    bg: string;
    bgSecondary: string;
    text: string;
    textMuted: string;
    border: string;
  };
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const colorSchemes = {
  orange: {
    accent: '#D97706',
    accentHover: '#B45309',
    accentShadow: 'rgba(217,119,6,0.5)',
  },
  blue: {
    accent: '#1363DE',
    accentHover: '#0F4FC2',
    accentShadow: 'rgba(19,99,222,0.5)',
  },
};

const modeSchemes = {
  dark: {
    bg: '#0F0F0F',
    bgSecondary: '#1A1A1A',
    text: '#F8F9FA',
    textMuted: '#9CA3AF',
    border: 'rgba(255,255,255,0.1)',
  },
  light: {
    bg: '#F8F9FA',
    bgSecondary: '#FFFFFF',
    text: '#0F0F0F',
    textMuted: '#6B7280',
    border: 'rgba(0,0,0,0.1)',
  },
};

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [accentColor, setAccentColor] = useState<AccentColor>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('thm-accent') as AccentColor) || 'orange';
    }
    return 'orange';
  });

  const [mode, setMode] = useState<Mode>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('thm-mode') as Mode) || 'dark';
    }
    return 'dark';
  });

  const colors = {
    ...colorSchemes[accentColor],
    ...modeSchemes[mode],
  };

  useEffect(() => {
    localStorage.setItem('thm-accent', accentColor);
    localStorage.setItem('thm-mode', mode);

    // Update CSS variables
    const root = document.documentElement;
    root.style.setProperty('--accent', colors.accent);
    root.style.setProperty('--accent-hover', colors.accentHover);
    root.style.setProperty('--accent-shadow', colors.accentShadow);
    root.style.setProperty('--bg', colors.bg);
    root.style.setProperty('--bg-secondary', colors.bgSecondary);
    root.style.setProperty('--text', colors.text);
    root.style.setProperty('--text-muted', colors.textMuted);
    root.style.setProperty('--border', colors.border);

    // Update body classes
    document.body.classList.remove('theme-dark', 'theme-light');
    document.body.classList.add(`theme-${mode}`);
  }, [accentColor, mode, colors]);

  const toggleAccentColor = () => {
    setAccentColor((prev) => (prev === 'orange' ? 'blue' : 'orange'));
  };

  const toggleMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ accentColor, mode, toggleAccentColor, toggleMode, colors }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
