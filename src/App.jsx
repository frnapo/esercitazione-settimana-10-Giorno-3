import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import { Container } from "react-bootstrap";
import TVShows from "./components/TVShows";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyHome from "./components/MyHome";
import MovieDetails from "./components/MovieDetails";
//
//da qui import per la profile page
//
//import HeaderComponent from "./components/HeaderComponent";
//import ProfileComponent from "./components/ProfileComponent";
//import MaturityComponent from "./components/MaturityComponent";
//import AutoplaySettingsComponent from "./components/AutoplaySettingsComponent";
//import ButtonComponents from "./components/ButtonsComponent";
//
//da qui import per la settings page
//
//import MembershipBillingComponent from "./components/MembershipBillingComponent";
//import PlanDetailsComponent from "./components/PlanDetailsComponent";
//import SettingsComponent from "./components/SettingsComponent";
//import MyProfileComponent from "./components/MyProfileComponent";

function App() {
  return (
    <div className="App dark-background">
      <BrowserRouter>
        <Container className="dark-background">
          <MyNav />
          <Routes>
            <Route path="/" element={<MyHome />} />
            <Route path="/tvshows" element={<TVShows />} />
            <Route path="/MovieDetails/:movieId" element={<MovieDetails />} />
          </Routes>
          <MyFooter />
          {/* da qui profile page*/}
          {/*<HeaderComponent />
        <ProfileComponent />
        <MaturityComponent />
        <AutoplaySettingsComponent />
        <ButtonComponents /> refactor profile page*/}
          {/* da qui settings page si vede il background laterale grigio scuro per via del div class App e del container che hanno la classe dark-background, tolta quella è perfetto :) (credo...e spero)*/}
          {/*<MyNav />
        <Container>
          <MembershipBillingComponent />
          <PlanDetailsComponent />
          <SettingsComponent />
          <MyProfileComponent/>
        </Container> */}
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
