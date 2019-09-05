import React from 'react';
import { Route } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { ContentWrapper } from './styled';
import ArticleList from '@/pages/article/ArticleList/ArticleList';
import ArticleDetail from '@/pages/article/ArticleDetail/ArticleDetail';
import ArticleEdit from '@/pages/article/ArticleEdit/ArticleEdit';

export default function Home() {
  return (
    <div>
      <AppBar>
        <Toolbar variant="dense">
          <Typography variant="h6">
            L-Y-C BLOG
          </Typography>
        </Toolbar>
      </AppBar>
      <ContentWrapper>
        <Route exact path="/" component={ArticleList} />
        <Route path="/ArticleDetail/:id" component={ArticleDetail} />
        <Route path="/ArticleEdit/:id" component={ArticleEdit} />
      </ContentWrapper>
    </div>
  );
}
