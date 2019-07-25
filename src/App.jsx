import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import ArticleList from './pages/ArticleList/ArticleList';
import ArticleDetail from './pages/ArticleDetail/ArticleDetail';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={ArticleList} />
        <Route path="/Login" component={Login} />
        <Route path="/ArticleDetail/:id" component={ArticleDetail} />
      </Router>
    </div>
  );
}

export default App;
