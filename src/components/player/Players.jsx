import React, { use, useState } from "react";
import AvailablePlayers from "../availablePlayers/AvailablePlayers";
import SelectedPlayers from "../selectedPlayers/SelectedPlayers";

const Players = ({ playersPromise, setCoin, coin }) => {
  const players = use(playersPromise);

  const [selectedType, setSelectedType] = useState("available");
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  return (
    <div className="container mx-auto my-8">
      <div className="flex justify-between items-center gap-4 mb-3">
        {selectedType === "available" ? (
          <h2 className="font-bold">Available Players</h2>
        ) : (
          <h2 className="font-bold">
            Selected Players({selectedPlayers.length}/{players.length})
          </h2>
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
            Selected({selectedPlayers.length})
          </button>
        </div>
      </div>
      {selectedType === "available" ? (
        <AvailablePlayers
          players={players}
          setCoin={setCoin}
          coin={coin}
          selectedPlayers={selectedPlayers}
          setSelectedPlayers={setSelectedPlayers}
        />
      ) : (
        <SelectedPlayers
          setCoin={setCoin}
          coin={coin}
          selectedPlayers={selectedPlayers}
          setSelectedPlayers={setSelectedPlayers}
        />
      )}
    </div>
  );
};

export default Players;
