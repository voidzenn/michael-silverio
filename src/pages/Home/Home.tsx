import '../../App.css';
import './Home.css';
import NavigationMenu from './NavigationMenu';
import Work from './Work';
import Projects from './Projects';
import Contacts from './Contacts';

const Home = () => {
  const GradientHeader = () => {
    return (
      <div className="w-full h-32 absolute inset-0 bg-gradient-to-t from-white via-blue-300 to-pink-300 ... opacity-25"></div>
    );
  };

  const Greeting = () => {
    return (
      <div className="mx-60 mt-14 2s transition-opacity ease-in opacity-100 duration-700">
        <p className="greeting text-[100px] leading-normal">
          Hi <br />
          I'm <b className="font-medium">Michael Silverio</b> - curios developer
          that loves learning new concepts
        </p>
      </div>
    );
  };

  const Footer = () => {
    return (
      <>
        <div className="mx-60 flex gap-4">
          <span className="text-xs">Made by</span>
          <a href="https://github.com/voidzenn" target="_" className="ml-[-10px] mb-[-30px] text-xs underline z-20 hover:cursor-pointer">
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
        {/* <NavigationMenu /> */}
        <div className="my-12"></div>
        <Greeting />
        <Contacts />
        {/* <Work /> */}
        <Projects />
        <Contacts />
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default Home;
