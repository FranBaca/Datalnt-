import "bootstrap/dist/css/bootstrap.min.css"
import { Route,Routes } from "react-router-dom";
import CharactersList from "./components/HomePage/HomePage";
import CharacterCard from "./components/CharacterCard/CharacterCard.js";
function App(props) {
  return (
    <div className="App">
      <Routes>
    <Route path="/" element={<CharactersList/>} />
    <Route path="/charDetail/:id" {...props} element={<CharacterCard/>} />
    </Routes>
    </div>
  );
}

export default App;
