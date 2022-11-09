import "bootstrap/dist/css/bootstrap.min.css"
import Nav from "./components/Nav.js"
import { Route,Routes } from "react-router-dom";
import CharactersList from "./components/CharactersList.js";
import CharacterCard from "./components/CharacterCard.js";
function App(props) {
  return (
    <div className="App">
      <Nav/>
      <Routes>
    <Route path="/" element={<CharactersList/>} />
    <Route path="/charDetail/:id" {...props} element={<CharacterCard/>} />
    </Routes>
    </div>
  );
}

export default App;
