import React from 'react' 
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Employeelist from './Components/Employeelist';
import Editemployee from './Components/Editemployee';
import Addemployee from './Components/Addemployee';

function App() {
  return (
    <div className="container body-content">
      <Router>
        <Switch>
          <Route path="/" exact component={Employeelist}/>
          <Route path="/editemployee/:id" exact component={Editemployee} />
          <Route path="/addemployee" exact component={Addemployee} />
        </Switch>
      </Router>
    </div>
  )
}

export default App;