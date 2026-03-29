import React, { use, useState } from "react";
import AvailablePlayers from "../availablePlayers/AvailablePlayers";
import SelectedPlayers from "../selectedPlayers/SelectedPlayers";

const Players = ({ playersPromise, setCoin, coin }) => {
  const players = use(playersPromise);

  const [selectedType, setSelectedType] = useState("available");

  return (
    <div className="container mx-auto my-8">
      <div className="flex justify-between items-center gap-4 mb-3">
        {selectedType === "available" ? (
          <h2 className="font-bold">Available Players</h2>
        ) : (
          <h2 className="font-bold">Selected Players</h2>
        )}
        <div>
          <button
            onClick={() => setSelectedType("available")}
            className={`btn rounded-l-none rounded-l-xl ${selectedType === "available" ? "bg-[#E7FE29] text-black" : ""}`}
          >
            Available
          </button>
          <button
            onClick={() => setSelectedType("selected")}
            className={`btn rounded-r-none rounded-r-xl ${selectedType === "selected" ? "bg-[#E7FE29] text-black " : ""}`}
          >
            Selected()
          </button>
        </div>
      </div>
      {selectedType === "available" ? (
        <AvailablePlayers players={players} />
      ) : (
        <SelectedPlayers setCoin={setCoin} coin={coin} />
      )}
    </div>
  );
};

export default Players;
