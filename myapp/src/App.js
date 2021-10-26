import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css'

// Pages
import Home from './pages/home';
import Login from './pages/login';
import SignUp from './pages/signup';
import AboutUs from './pages/aboutus';
import Profile from './pages/profile';
import PrivateRoute from './components/PrivateRoute';
import './App.css'
import AuthProvider from './contexts/AuthContext';

function App() {
  return (

    <div className="App">
      <Router>
        <AuthProvider>
          <div className="container">
            <Switch>
              <PrivateRoute exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={SignUp} />
              <Route path="/aboutus" component={AboutUs} />
              <Route path="/profile" component={Profile} />
            </Switch>
          </div>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
