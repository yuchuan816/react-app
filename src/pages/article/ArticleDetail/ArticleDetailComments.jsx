import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Typography,
  Button,
} from '@material-ui/core';
import { useSnackbar } from 'notistack';
import CommentInput from './CommentInput';
import * as style from './style';
import api from '@/api';


function ArticleDetailComments({ articleId }) {
  const { enqueueSnackbar } = useSnackbar();
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  function getCommentsData() {
    api.comment.getComments({ article: articleId }).then((data) => {
      setComments(data.results);
    });
  }


  function handleSend() {
    api.comment.replyArticle({
      content: comment,
      article: articleId,
    }).then(() => {
      setComment('');
      enqueueSnackbar('发布评论成功！', { variant: 'success' });
      getCommentsData();
    });
  }

  useEffect(getCommentsData, [articleId]);

  return (
    <div>
      <CommentInput
        label="评论"
        value={comment}
        change={setComment}
        handleSend={handleSend}
      />
      <div>
        {comments.map((item) => (
          <ArticleDetailCommentsItem
            comment={item}
            key={item.id}
            getCommentsFunc={getCommentsData}
          />
        ))}
      </div>
    </div>
  );
}

function ArticleDetailCommentsItem({ getCommentsFunc, comment, nestedLevel }) {
  const { enqueueSnackbar } = useSnackbar();
  const [reply, setReply] = useState('');
  const [showReply, setShowReply] = useState(false);

  function handleReply() {
    setShowReply(!showReply);
  }

  function handleSend() {
    api.comment.replyArticle({
      content: reply,
      comments: comment.id,
    }).then(() => {
      setReply('');
      setShowReply(false);
      getCommentsFunc();
      enqueueSnackbar('回复评论成功！', { variant: 'success' });
    });
  }
  return (
    <style.CommentWrapper>
      <style.CommentItemWrapper>
        <style.CommentItemUserInfo>
          <Typography variant="body2" color="primary" gutterBottom>
            {comment.username}
            :
          </Typography>
          <Button color="primary" onClick={handleReply}>回复</Button>
        </style.CommentItemUserInfo>
        <Typography variant="body1">{comment.content}</Typography>
      </style.CommentItemWrapper>
      {showReply && (
      <CommentInput
        label="回复"
        value={reply}
        change={setReply}
        handleSend={handleSend}
      />
      )}
      <div>
        {comment.reply.map((item) => (
          <ArticleDetailCommentsItem
            key={item.id}
            comment={item}
            nestedLevel={nestedLevel + 1}
          />
        ))}
      </div>
    </style.CommentWrapper>
  );
}

ArticleDetailComments.propTypes = {
  articleId: PropTypes.number.isRequired,
};

ArticleDetailCommentsItem.propTypes = {
  getCommentsFunc: PropTypes.func,
  comment: PropTypes.shape({
    id: PropTypes.number,
    username: PropTypes.string,
    content: PropTypes.string,
    reply: PropTypes.array,
  }).isRequired,
  nestedLevel: PropTypes.number,
};

ArticleDetailCommentsItem.defaultProps = {
  nestedLevel: 0,
  getCommentsFunc: () => {},
};

export default ArticleDetailComments;
