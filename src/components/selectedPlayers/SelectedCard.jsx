import { FaUser } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const SelectedCard = ({ handleSelectedPlayers, player }) => {
  return (
    <div>
      <div className="flex items-center gap-6 justify-between p-10 rounded-2xl border">
        <div
          className="flex gap-4 justify-center items-center
              "
        >
          <img
            className="h-[175px] w-auto"
            src={player.playerImg}
            alt={player.playerName}
          />
          <div className="">
            <h2 className="flex items-center gap2 font-semibold text-2xl">
              <FaUser /> {player.playerName}
            </h2>
            <p>{player.playerType}</p>
          </div>
        </div>
        <button
          className="btn bg-red-500/50"
          onClick={() => handleSelectedPlayers(player)}
        >
          <MdDelete />
        </button>
      </div>
    </div>
  );
};

export default SelectedCard;
