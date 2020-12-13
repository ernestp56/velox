import { useEffect, useState } from 'react';
export const useDarkMode = () => {
  const [theme, setTheme] = useState('dark');
  const [componentMounted, setComponentMounted] = useState(false);

  const setMode = mode => {
    window.localStorage.setItem('theme', mode)
    setTheme(mode)
  };

  const toggleTheme = (e) => {
    if (theme === 'light') {
      e.stopPropagation();
      setMode('dark');
    } else {
      e.stopPropagation();
      setMode('light');
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    if (localTheme) {
      setTheme(localTheme);
    } else {
      setMode('dark');
    }
    setComponentMounted(true);
  }, []);

  return [theme, toggleTheme, componentMounted]
};
