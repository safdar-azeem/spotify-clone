import { useNavigate } from "react-router-dom";
import GridSection from "../components/common/Grid";
import { MusicData } from "../db/data";
import { useMemo } from "react";

function Home() {
  const navigate = useNavigate();

  const songs = useMemo(() => MusicData.slice(0, 6), []);

  function handleOnClick(type: string, id: number) {
    return navigate(`/${type}/${id}`);
  }

  return (
    <>
      <section className="flex flex-col gap-7">
        <h1 className="text-3xl font-bold">Good afternoon</h1>
        <ul className="grid grid-cols-2 gap-x-4 gap-y-3">
          {songs.map((item, i) => (
            <li
              key={i}
              className={`transition duration-100 bg-gray-300 hover:brightness-110 rounded-xl`}
            >
              <div
                role="button"
                className="flex items-center gap-3 w-full"
                onClick={() => handleOnClick(item.type, item.id)}
              >
                <img
                  src={item.img}
                  alt="Artist"
                  className="h-max w-full max-w-[90px]  rounded-md object-cover"
                />
                <div className="md:flex flex-col">
                  <p className="text-fs-3 font-medium">{item.title}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <section className="mt-10">
        <h2 className="mb-5 text-2xl font-bold">Your top mixes</h2>
        <GridSection items={MusicData.reverse()} />
      </section>
      <section className="mt-10">
        <h2 className="mb-5 text-2xl font-bold">Jump back in</h2>
        <GridSection items={MusicData.slice(5.12)} />
      </section>
    </>
  );
}

export default Home;
