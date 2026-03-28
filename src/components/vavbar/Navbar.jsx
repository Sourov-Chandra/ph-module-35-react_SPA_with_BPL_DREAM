import React from "react";
import Dollar from "../../assets/Dollar_sign.png";
import { Moon, SunMoon } from "lucide-react";

const Navbar = ({ toggleTheme, theme, coin }) => {
  return (
    <div className="navbar bg-base-100 shadow-sm container mx-auto">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="flex-none gap-2 ">
        <button onClick={toggleTheme} className="btn btn-ghost btn-circle mr-4">
          {theme === "dark" ? <Moon /> : <SunMoon />}
        </button>

        <button className="btn btn-square btn-ghost mr-2">
          <p className="flex">
            <span className="pr-2">{coin} </span> <span>Coin </span>
          </p>
          <img src={Dollar} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
