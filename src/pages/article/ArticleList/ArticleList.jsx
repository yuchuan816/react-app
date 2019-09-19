import React, { useState, useEffect } from 'react';
import {
  List,
  ListItem,
  ListItemText,
  Divider,
  Typography,
  Fab,
} from '@material-ui/core';
import { Add as AddIcon } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import {
  ArticleListWrapper,
  ListWrapper,
} from './styled';
import ArticleListInfo from './ArticleListInfo';
import api from '@/api';

const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'absolute',
    bottom: theme.spacing(8),
    right: theme.spacing(4),
  },
}));

export default function ArticleList({ history }) {
  const classes = useStyles();
  const [articleList, setArticleList] = useState([]);

  useEffect(() => {
    api.article.getArticleList().then((data) => {
      setArticleList(data.results);
    });
  }, []);

  const handleListItem = (event, id) => {
    history.push({ pathname: `ArticleDetail/${id}` });
  };
  const handleAdd = () => {
    history.push({ pathname: 'ArticleEdit' });
  };

  return (
    <ArticleListWrapper>
      <Fab
        color="secondary"
        aria-label="add"
        className={classes.fab}
        onClick={handleAdd}
      >
        <AddIcon />
      </Fab>
      <ListWrapper>
        <List>
          {articleList.map((item, index) => (
            <React.Fragment key={item.id}>
              <ListItem
                button
                key={item.id}
                onClick={(event) => handleListItem(event, item.id)}
              >
                <ListItemText
                  primary={(
                    <Typography
                      component="span"
                      variant="h6"
                      color="primary"
                    >
                      {item.title}
                    </Typography>
                  )}
                  secondary={(
                    <ArticleListInfo articleInfo={item} />
                  )}
                />
              </ListItem>
              {articleList.length - index !== 1 && <Divider component="li" />}
            </React.Fragment>
          ))}
        </List>
      </ListWrapper>
    </ArticleListWrapper>
  );
}
