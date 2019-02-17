import React, { Component } from 'react';
import './App.css';
import SecurityContainer from './container/SecurityContainer';
import MovieContainer from './container/MovieContainer';
import ProfileContainer from './container/ProfileContainer';
import HomeContainer from './container/HomeContainer';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import HeaderContainer from './container/HeaderContainer';
import NewsContainer from './container/NewsContainer';
import Footer from './components/footer';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <React.Fragment>
          <HeaderContainer />
        </React.Fragment>
        <React.Fragment>
          <Switch>
            <Route exact path="/" component={HomeContainer} />
            <Route path="/security" component={SecurityContainer} />
            <Route path="/movies" component={MovieContainer} />
            <Route path="/profile" component={ProfileContainer} />
            <Route path="/news" component={NewsContainer} />
          </Switch>
        </React.Fragment>
        <React.Fragment>
          <Footer />
        </React.Fragment>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
