import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './pages/auth/Login/Login';
import ArticleList from './pages/article/ArticleList/ArticleList';
import ArticleDetail from './pages/article/ArticleDetail/ArticleDetail';
import ArticleEdit from './pages/article/ArticleEdit/ArticleEdit';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={ArticleList} />
        <Route path="/Login" component={Login} />
        <Route path="/ArticleDetail/:id" component={ArticleDetail} />
        <Route path="/ArticleEdit/:id" component={ArticleEdit} />
      </Router>
    </div>
  );
}

export default App;
