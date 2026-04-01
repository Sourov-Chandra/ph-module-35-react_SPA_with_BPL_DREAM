import React, { useState } from 'react'
import { Flag, UserRound } from "lucide-react";
import { toast } from 'react-toastify';


const Card = ({
  player,
  coin,
  setCoin,
  selectedPlayers,
  setSelectedPlayers,
}) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleChoosePlayer = () => {
    // console.log("coin:", coin, "price:", player.price); 
    if (coin >= player.price) {
      setCoin(coin - player.price);
    } else {
      toast.error("You don't have enough coins...");
      return;
    }
    toast.success(`You have selected ${player.playerName}`);
    setIsSelected(true);
    setSelectedPlayers([...selectedPlayers, player])
  };
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

          <div className="flex justify-between items-center border-b border-black/5  pb-2">
            <div className="flex justify-center items-center gap-2">
              <Flag />
              <p>Bangladesh</p>
            </div>
            <button className="btn">{player.playerType}</button>
          </div>
          {/* <div className="divider"></div> */}
          <div>
            <h3>Rating({player.rating})</h3>
            <div className="flex justify-between items-center">
              <p className="font-semibold">{player.batingStyle}</p>
              <p className="font-semibold text-right">{player.bowlingStyle}</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="font-semibold">${player.price}</p>
              <button
                className="btn"
                onClick={handleChoosePlayer}
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