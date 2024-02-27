import "./App.css";
import Home from "./components/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Mainpage from "./components/main/Mainpage";
import MainpageSignup from "./components/main/MainpageSignup";
import Landingpage from "./components/Landing/Landingpage";
import NoteState from "./context/notes/noteState";
function App() {
  return (
    <NoteState>

      <Router>
    <div className="App">
        <Switch>

      <Route exact path="/">
        <Home />
      </Route>
        <Route exact path="/login">
          <Mainpage/>
        </Route>
        <Route exact path="/signup">
          <MainpageSignup/>
        </Route>
        <Route exact path="/main">
          <Landingpage/>
        </Route>
        </Switch>
    </div>
      </Router>
    </NoteState>
  );
}

export default App;
