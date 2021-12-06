import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReactGA from 'react-ga';

import './styling/App.css'
import { ThemeProvider } from '@material-ui/core'
import theme from './theme';

import PrivateRoute from './components/PrivateRoute';
import AuthProvider from './contexts/AuthContext';

// Pages
import Home from './pages/home';
import Login from './pages/login';
import SignUp from './pages/signup';
import AboutUs from './pages/aboutus';
import Profile from './pages/profile';
import News from './pages/news';
import Friends from './pages/friends';


// Google Analytics
const TRACKING_ID = "G-7XQDY60B2W";
ReactGA.initialize(TRACKING_ID);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router basename={window.location.pathname || ''}>
          <AuthProvider>
            <div className="container">
              <Switch>
                <PrivateRoute exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={SignUp} />
                <Route path="/aboutus" component={AboutUs} />
                <Route path="/profile" component={Profile} />
                <Route path="/news" component={News} />
                <Route path="/friends" component={Friends} />
              </Switch>
            </div>
          </AuthProvider>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
