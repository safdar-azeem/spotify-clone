import { useContext } from "react";
import { MusicData } from "../db/data";
import { useParams } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import Dropdown from "../components/common/Dropdown";
import { SongContext } from "../context/SongContext";
import SongsList from "../components/playlist/MusicList";
import PlaylistMenu from "../components/playlist/PlaylistMenu";
import { BsFillPauseFill, BsFillPlayFill } from "react-icons/bs";

function PlayList() {
  const { id } = useParams();
  const { songId, updateSong } = useContext(SongContext);
  const currentMusic = MusicData.find((e) => e.id === Number(id));

  const stopSong = () => updateSong(null!);

  function handleSelectSong() {
    if (currentMusic?.id !== songId) {
      updateSong(Number(currentMusic?.id)!);
    } else {
      updateSong(null!);
    }
  }

  return (
    <div>
      <div className="flex gap-10">
        <div className="w-[30%]">
          <img
            src={currentMusic?.img}
            alt={currentMusic?.title}
            className="max-w-[300px] max-h-[400px] rounded-lg"
          />
        </div>
        <div className="w-[70%] flex flex-col gap-10">
          <header className="w-full">
            <div className="flex items-center gap-x-5 text-4xl">
              <button
                className="bg-[#1ECF5D] p-3 rounded-full text-black hover:scale-105"
                onClick={handleSelectSong}
              >
                {songId === currentMusic?.id ? (
                  <BsFillPauseFill size={30} />
                ) : (
                  <BsFillPlayFill size={30} />
                )}
              </button>
              <button>
                <AiOutlineHeart />
              </button>
              <div className="ml-auto">
                <Dropdown>
                  <PlaylistMenu />
                </Dropdown>
              </div>
            </div>
          </header>
          <SongsList songId={songId} stopSong={stopSong} />
        </div>
      </div>
    </div>
  );
}

export default PlayList;
