import React, { useState } from 'react'
import { Flag, UserRound } from "lucide-react";


const Card = ({ player, setCoin, coin }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleChoosePlayer = () => {
    let newCoin = 0;
    if( newCoin <= 0) {
      alert("You don't have enough coins to select this player.");
      return;
    }else{
      newCoin = coin - player.price;
      setCoin(newCoin);
      alert(`${player.playerName} has been selected! Remaining coins: ${newCoin}`)
      setIsSelected(true);
    }
  }
  return (
    <div>
      <div className="card bg-base-100 shadow-sm">
        <figure className="h-48">
          <img
            src={player.playerImg}
            alt="player name"
            className="w-full h-full object-contain bg-base-200"
          />
        </figure>
        <div className="card-body">
          <div className="flex gap-2">
            <UserRound />
            <h2 className="card-title">{player.playerName}</h2>
          </div>

          <div className="flex justify-between items-center border-b border-white pb-2">
            <div className="flex justify-center items-center gap-2">
              <Flag />
              <p>Bangladesh</p>
            </div>
            <button className="btn">{player.playerType}</button>
          </div>
          {/* <div className="divider"></div> */}
          <div>
            <h3>Rating</h3>
            <div className="flex justify-between items-center">
              <p className="font-semibold">{player.batingStyle}</p>
              <p className="font-semibold text-right">{player.bowlingStyle}</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="font-semibold">{player.price}</p>
              <button
                className="btn"
                onClick={() => handleChoosePlayer}
                disabled={isSelected}
              >
                {isSelected ? "Selected" : "Choose Player"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card