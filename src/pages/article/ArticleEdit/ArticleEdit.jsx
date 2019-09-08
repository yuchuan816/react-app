import React, { useState, useEffect } from 'react';
import lodash from 'lodash';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useSnackbar } from 'notistack';
import {
  Fab,
  Input,
  Paper,
} from '@material-ui/core';
import { Done as DoneIcon } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { ArticleEditWrapper } from './styled';
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
  titleInput: {
    marginBottom: theme.spacing(2),
  },
}));

export default function ArticleDetail({ match, history }) {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const { id } = match.params;
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSave = () => {
    if (lodash.isString(id)) {
      api.article.editArticle(id, { title, body }).then((data) => {
        enqueueSnackbar('修改成功', { variant: 'success' });
        history.push({ pathname: `/Main/ArticleDetail/${id}` });
      });
    } else {
      api.article.addArticle({ title, body }).then((data) => {
        enqueueSnackbar('添加成功', { variant: 'success' });
      });
    }
  };

  useEffect(() => {
    id && api.article.getArticleDetail(id).then((data) => {
      setTitle(data.title);
      setBody(data.body);
    });
  }, [id]);

  return (
    <ArticleEditWrapper>
      <Fab
        color="secondary"
        aria-label="save"
        className={classes.fab}
        onClick={handleSave}
      >
        <DoneIcon />
      </Fab>
      <Paper className={classes.paper}>
        <Input
          fullWidth
          className={classes.titleInput}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <CKEditor
          editor={ClassicEditor}
          data={body}
          onChange={(event, editor) => {
            const data = editor.getData();
            setBody(data);
          }}
        />
      </Paper>
    </ArticleEditWrapper>
  );
}
