import Routers from "./routers/Routers";
import Aside from "./components/common/Aside";
import Header from "./components/common/Header";
import SongPlayer from "./components/common/SongPlayer/SongPlayer";

function Layout() {
  return (
    <>
      <Aside />
      <div className="ml-[85px] flex flex-col gap-8  md:ml-[322px] pb-4 min-h-[93.5vh] pt-7 mt-3 mr-3 bg-gray-200 rounded-xl">
        <Header />
        <div className="max-h-[81.2vh] overflow-auto pb-32 px-8">
          <Routers />
        </div>
      </div>
      <SongPlayer />
    </>
  );
}

export default Layout;
