import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import { Container } from "react-bootstrap";
import TVShows from "./components/TVShows";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyHome from "./components/MyHome";
import MovieDetails from "./components/MovieDetails";
import ProfilePage from "./components/ProfilePage";
import SettingsPage from "./components/SettingsPage";

function App() {
  return (
    <div className="App dark-background">
      <BrowserRouter>
        <Container className="dark-background">
          <MyNav />
          <Routes>
            <Route path="/" element={<MyHome />} />
            <Route path="/tvshows" element={<TVShows />} />
            <Route path="/moviedetails/:movieId" element={<MovieDetails />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
          <MyFooter />
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
