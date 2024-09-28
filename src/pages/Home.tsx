import { useState } from 'react';

import '../App.css';

const Home = () => {
  const [theme, setTheme] = useState('light');

  // Change html element theme
  document.documentElement.setAttribute('data-theme', theme);

  const changeTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <>
      <button className="" onClick={changeTheme}>
        Change theme
      </button>
      <button className="bg-slate-500 border-2 border-blue-300"></button>
    </>
  );
};

export default Home;
