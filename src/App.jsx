import { useState, Suspense } from 'react';
import './App.css'
import Banner from './components/banner/Banner';
import Players from './components/player/Players';
import Navbar from './components/vavbar/Navbar';

const fetchPlayer = async () => {
  const res = await fetch("./playerData.json");
  return res.json();
};

function App() {
  const [coin, setCoin] = useState("50000");
  const [theme, setTheme] = useState("dark");
  const playersPromise = fetchPlayer();

  const toggleTheme = () => {
    setTheme(prev => prev === "dark" ? "light" : "dark");
  };

  return (
    <div data-theme={theme} className="min-h-screen bg-base-300">
      <Navbar toggleTheme={toggleTheme} theme={theme} coin={coin} />
      <Banner />
      <Suspense
        fallback={
          <div className="flex items-center justify-center w-full h-full">
            <span className="loading loading-ring loading-xl"></span>
          </div>
        }
      >
        <Players playersPromise={playersPromise} />
      </Suspense>
    </div>
  );
}

export default App;                                                                    
