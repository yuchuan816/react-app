import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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
          <Route exact path="/" component={Main} />
          <Route path="/Login" component={Login} />
        </Router>
      </SnackbarProvider>
    </div>
  );
}

export default App;
