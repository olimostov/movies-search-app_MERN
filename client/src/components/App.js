import '../App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import Top250 from './Top250';

function App() {
  return (
    <Router>
      <div className='App blue-grey darken-3'>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/top250'>
            <Top250 />
          </Route>
          {/* <Route exact path='/'>
            <Home />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
