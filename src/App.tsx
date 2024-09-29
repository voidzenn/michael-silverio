import './App.css';
import Home from './pages/Home/Home';

function App() {
  const GradientFooter = () => {
    return (
      <div className="w-full h-20 mt-[-40px] inset-0 bg-gradient-to-b from-white via-blue-300 to-pink-200 ... opacity-25"></div>
    );
  };

  return (
    <>
      <div className="flex">
        <Home />
      </div>
      <GradientFooter />
    </>
  );
}

export default App;
