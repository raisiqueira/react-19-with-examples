import { Suspense, use } from "react";

type Songs = {
  songs: string[];
};

const getSongs = async () => {
  const response = await fetch("/api/list-of-songs");
  return response.json() as Promise<Songs>;
};

const SongList = () => {
  const { songs } = use(getSongs());
  return (
    <ul className="mt-5">
      {songs.map((song) => (
        <li key={song} className="text-2xl font-bold">
          {song}
        </li>
      ))}
    </ul>
  );
};

const AllSongsPage = () => {
  return (
    <>
      <Suspense fallback={<h2 className="text-2xl text-center font-bold mt-5">Loading...</h2>}>
        <SongList />
      </Suspense>
    </>
  );
};

export { AllSongsPage };
