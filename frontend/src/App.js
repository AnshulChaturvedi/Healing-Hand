import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar"; 
import ConsultDoctor from "./pages/consultdoctor"; 
import Healthcare from "./pages/healthcare"; 
import Labtest from "./pages/labtest"; 
import Login from "./pages/login";
import Medicines from "./pages/medicines"; 
import Register from "./pages/register"; 
import Wellness from "./pages/wellness"; 
import Homepage from "./pages/homepage"; 

function App() {
  return (
    <Router>
      <Navbar /> 
      <Switch>
        <Route path='/' exact component={Homepage} />
        <Route path='/consultdoctor' component={ConsultDoctor} />
        <Route path='/healthcare' component={Healthcare} />
        <Route path='/labtest' component={Labtest} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/medicines' component={Medicines} />
        <Route path='/wellness' component={Wellness} />
      </Switch>
    </Router>
  );
}