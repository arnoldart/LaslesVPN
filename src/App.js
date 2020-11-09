import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './Components/Navbar'
import  Home from './Components/pages/HomePage/Home'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
