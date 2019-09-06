import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import Login from '@/pages/auth/Login/Login';
import Main from '@/Layout/Main/Main';

import './App.css';

function App() {
  return (
    <div className="App">
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Router>
          <Switch>
            <Redirect exact from="/" to="/Main" />
            <Route path="/Main" component={Main} />
            <Route path="/Login" component={Login} />
          </Switch>
        </Router>
      </SnackbarProvider>
    </div>
  );
}

export default App;
