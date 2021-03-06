import React, { useState, useEffect } from 'react';
import {
  Fab,
  Typography,
  Divider,
  Paper,
} from '@material-ui/core';
import { Edit as EditIcon } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { ArticleDetailWrapper } from './style';
import ArticleDetailComments from './ArticleDetailComments';
import api from '@/api';

const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'absolute',
    bottom: theme.spacing(8),
    right: theme.spacing(4),
  },
  paper: {
    width: 960,
    padding: theme.spacing(2),
  },
  divider: {
    margin: `${theme.spacing(1)}px 0`,
  },
  articleContent: {
    lineHeight: 1.8,
  },
  articleComment: {
    marginTop: theme.spacing(3),
  },
}));

export default function ArticleDetail({ match, history }) {
  const classes = useStyles();
  const { id } = match.params;
  const [articleDetail, setArticleDetail] = useState({});
  const { title, body, comments = [] } = articleDetail;

  useEffect(() => {
    api.article.getArticleDetail(id).then((data) => {
      setArticleDetail(data);
    });
  }, [id]);

  const handleEdit = () => {
    history.push({
      pathname: `/Main/ArticleEdit/${id}`,
    });
  };

  return (
    <ArticleDetailWrapper>
      <Fab
        color="secondary"
        aria-label="edit"
        className={classes.fab}
        onClick={handleEdit}
      >
        <EditIcon />
      </Fab>
      <Paper className={classes.paper}>
        <Typography
          variant="h5"
          color="textPrimary"
        >
          {title}
        </Typography>
        <Divider className={classes.divider} />
        <div className={classes.articleContent} dangerouslySetInnerHTML={{ __html: body }} />
      </Paper>
      <Paper className={`${classes.paper} ${classes.articleComment}`}>
        <ArticleDetailComments articleId={Number(id)} />
      </Paper>
    </ArticleDetailWrapper>
  );
}
