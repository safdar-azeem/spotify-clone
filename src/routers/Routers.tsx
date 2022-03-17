import { Suspense, lazy } from "react";
import { PuffLoader } from "react-spinners";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("../pages/Home"));
const Search = lazy(() => import("../pages/Search"));
const PlayList = lazy(() => import("../pages/PlayList"));

function Routers() {
  return (
    <div>
      <Suspense
        fallback={<PuffLoader className="spinner" color="#a6a6a6" size={100} />}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/playlist/:id" element={<PlayList />} />
          <Route path="/song/:id" element={<PlayList />} />
          <Route path="/artist/:id" element={<PlayList />} />
          <Route path="/album/:id" element={<PlayList />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default Routers;
