import { Suspense, use } from "react";

type Song = {
  song: string;
};

const getRandomSong = async () => {
  const response = await fetch("/api/random-song");
  return response.json() as Promise<Song>;
};

const SingleSong = () => {
  const { song } = use(getRandomSong());
  return (
    <>
      <h2 className="text-2xl font-bold">{song}</h2>
      <title>Single Song Page</title>
    </>
  );
};

const SingleSongPage = () => {
  return (
    <>
      <Suspense fallback={<h2 className="text-2xl text-center font-bold mt-5">Loading...</h2>}>
        <SingleSong />
      </Suspense>
    </>
  );
};

export { SingleSongPage };
