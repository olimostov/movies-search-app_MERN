import '../App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Top250 from './Top250';
import Bookmarked from './Bookmarked';

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
          <Route exact path='/bookmarked'>
            <Bookmarked />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
