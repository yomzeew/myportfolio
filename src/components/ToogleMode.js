import React, { useEffect, useState } from 'react';
import Switch from '@mui/material/Switch';

const ThemeToggle = ({themeprops}) => {
  const [theme, setTheme] = useState('light');
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.add(savedTheme);
      setChecked(savedTheme === 'dark');
    } else {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      setTheme(systemTheme);
      document.documentElement.classList.add(systemTheme);
      setChecked(systemTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
    localStorage.setItem('theme', newTheme);
    setChecked(newTheme === 'dark');
    themeprops(newTheme)
  };

  const handleChange = () => {
    toggleTheme();
    

  };


  return (
    <div className='flex items-center'>
        <div className='dark:text-white text-black capitalize'>{theme}</div>
         <div>
         <Switch
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'Toggle theme' }}
    />
            </div>

    </div>
   
  );
};

export default ThemeToggle;
