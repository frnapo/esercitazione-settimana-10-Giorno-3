import Gallery from "./Gallery";
import TopBar from "./TopBar";

const TVShows = () => {
  return (
    <>
      <TopBar />
      <Gallery searchValue="Batman" />
      <Gallery searchValue="Joker" />
      <Gallery searchValue="Thor" />
      <Gallery searchValue="Superman" />
      <Gallery searchValue="Indiana Jones" />
    </>
  );
};

export default TVShows;
