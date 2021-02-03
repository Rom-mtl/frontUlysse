import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Main from './Main/Main';
import Reserver from './Reserver/Reserver';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/reserver" component={Reserver} />
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
