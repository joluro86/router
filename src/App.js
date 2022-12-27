import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

import Contacto from "./components/Contacto";
import Inicio from "./components/Inicio";
import Nosotros from "./components/Nosotros";

function App() {
  return (
    <Router>
      <div className="container">
        <div className="btn btn-group">
          <Link to="/" className="btn btn-secondary">
          Inicio
          </Link>
          <Link to="/nosotros" className="btn btn-secondary">
          Nosotros
          </Link>
          <Link to="/contacto" className="btn btn-secondary">
          Contacto
          </Link>
        </div>
        <Switch>
          <Route path="/contacto">
           <Contacto/>
          </Route>
          <Route path="/nosotros">
            <Nosotros/>
          </Route>
          <Route path="/">
            <Inicio/>
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
