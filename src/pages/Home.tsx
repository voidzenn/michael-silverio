import { useState } from 'react';
import { Moon, Sun } from 'lucide-react';

import '../App.css';

const Home = () => {
  const [theme, setTheme] = useState('light');
  const isThemeLight = theme === 'light';

  // Change html element theme
  document.documentElement.setAttribute('data-theme', theme);

  const changeTheme = () => {
    isThemeLight ? setTheme('dark') : setTheme('light');
  };

  const ToggleThemeIcon = () => {
    return isThemeLight ? (
      <Moon className="hover:cursor-pointer" onClick={changeTheme} />
    ) : (
      <Sun className="hover:cursor-pointer" onClick={changeTheme} />
    );
  }

  const GradientHeader = () => {
    return (
      <div className="w-full h-32 absolute inset-0 bg-gradient-to-t from-white via-blue-300 to-pink-300 ... opacity-25"></div>
    );
  };

  const NavigationMenu = () => {
    return (
      <nav className="sticky top-10 z-10 flex justify-end w-full gap-5 mt-14 mr-10">
        <label>Work</label>
        <label>Projects</label>
        <ToggleThemeIcon />
      </nav>
    );
  }

  const Greeting = () => {
    return (
      <div className="my-20">
        <p className="text-[100px]">
          Hi <br />
          I'm <b>Michael Silverio</b> - curios developer that loves learning new
          concepts
        </p>
      </div>
    );
  };

  const Contacts = () => {
    return (
      <div className="flex gap-4">
        <button className="btn btn-ghost font-normal">
          Github
        </button>
        <button className="btn btn-ghost font-normal">Linked</button>
        <button className="btn btn-ghost font-normal">Email</button>
      </div>
    );
  }

  const Work = () => {
    return (
      <div className="my-32">
        <label className="font-medium">Work</label>
        <div className="mt-10 flex w-full gap-10">
          <div className="w-1/3">
            <div className="card bg-base-100">
              <figure>
                <img src="https://picsum.photos/300/200?grayscale" alt="img" />
              </figure>
              <div className="card-body">test</div>
            </div>
          </div>
          <div className="w-1/3">
            <div className="card bg-base-100">
              <figure>
                <img src="https://picsum.photos/300/200?grayscale" alt="img" />
              </figure>
              <div className="card-body">test</div>
            </div>
          </div>
          <div className="w-1/3">
            <div className="card bg-base-100">
              <figure>
                <img src="https://picsum.photos/300/200?grayscale" alt="img" />
              </figure>
              <div className="card-body">test</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const Projects = () => {
    return (
      <div className="my-32">
        <label className="font-medium">Projects</label>
        <div className="mt-10 flex w-full gap-10">
          <div className="w-1/3">
            <div className="card bg-base-100">
              <figure>
                <img src="https://picsum.photos/300/200?grayscale" alt="img" />
              </figure>
              <div className="card-body">test</div>
            </div>
          </div>
          <div className="w-1/3">
            <div className="card bg-base-100">
              <figure>
                <img src="https://picsum.photos/300/200?grayscale" alt="img" />
              </figure>
              <div className="card-body">test</div>
            </div>
          </div>
          <div className="w-1/3">
            <div className="card bg-base-100">
              <figure>
                <img src="https://picsum.photos/300/200?grayscale" alt="img" />
              </figure>
              <div className="card-body">test</div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const Footer = () => {
    return (
      <>
        <div className="flex gap-4">
          <span className="text-xs">Made by</span>
          <a href="test.com" className="ml-[-10px] text-xs underline">
            Michael Silverio
          </a>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="flex flex-col w-full">
        <GradientHeader />
        <NavigationMenu />
        <Greeting />
        <Contacts />
        <Work />
        <Projects />
        <Contacts />
        <Footer />
      </div>
    </>
  );
};

export default Home;
