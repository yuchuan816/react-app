import React from 'react';
import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { MainWrapper, ContentWrapper } from './styled';
import ArticleList from '@/pages/article/ArticleList/ArticleList';
import ArticleDetail from '@/pages/article/ArticleDetail/ArticleDetail';
import ArticleEdit from '@/pages/article/ArticleEdit/ArticleEdit';

export default function Main({ match }) {
  const { path } = match;

  return (
    <MainWrapper>
      <AppBar>
        <Toolbar variant="dense">
          <Typography variant="h6">
            L-Y-C BLOG
          </Typography>
        </Toolbar>
      </AppBar>
      <ContentWrapper>
        <Switch>
          <Redirect exact from={path} to={`${path}/ArticleList`} />
          <Route path={`${path}/ArticleList`} component={ArticleList} />
          <Route path={`${path}/ArticleDetail/:id`} component={ArticleDetail} />
          <Route path={`${path}/ArticleEdit/:id`} component={ArticleEdit} />
          <Route path={`${path}/ArticleEdit`} component={ArticleEdit} />
        </Switch>
      </ContentWrapper>
    </MainWrapper>
  );
}
