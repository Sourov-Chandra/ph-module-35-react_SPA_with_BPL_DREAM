
import React from 'react'
import { FaUser } from 'react-icons/fa';
import { MdDelete } from "react-icons/md";
import SelectedCard from './SelectedCard';

const SelectedPlayers = ({ selectedPlayers, setSelectedPlayers, coin, setCoin }) => {
  // console.log(selectedPlayers);

  const handleSelectedPlayers = (player) => {
    const filteredPlayers = selectedPlayers.filter((selectedPlayer) => selectedPlayer.playerName !== player.playerName);
    setSelectedPlayers(filteredPlayers)
    setCoin(coin + player.price)
  };
  return (
    <>
      <div className="space-y-4">
        {selectedPlayers.length === 0 ? (
          <div className='h-[400px] flex items-center justify-center flex-col gap-4'>
            <h2>No players selected yet</h2>
            <p>Go to Available tab to select players</p>
          </div>
        ) : (
          selectedPlayers.map((player, ind) => {
            return (
              <SelectedCard key={ind} handleSelectedPlayers={handleSelectedPlayers} player={player} />
            );
          })
        )}
      </div>
    </>
  );
};

export default SelectedPlayers