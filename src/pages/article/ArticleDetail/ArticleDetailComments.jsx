import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Typography,
  TextField,
} from '@material-ui/core';
import {
  CommentWrapper,
  CommentItemWrapper,
  CommentItemUserInfo,
} from './styled';

function ArticleDetailCommentsItem({ comment, nestedLevel }) {
  return (
    <CommentWrapper>
      <CommentItemWrapper>
        <CommentItemUserInfo>
          <Typography variant="body2" color="primary" gutterBottom>
            {comment.id}
            :
          </Typography>
          <Typography variant="button" color="primary">回复</Typography>
        </CommentItemUserInfo>
        <Typography variant="body1">{comment.content}</Typography>
      </CommentItemWrapper>
      <TextField
        fullWidth
        label="回复"
        variant="outlined"
        multiline
        rowsMax="4"
      />
      <div>
        {comment.reply.map((item) => (
          <ArticleDetailCommentsItem
            key={item.id}
            comment={item}
            nestedLevel={nestedLevel + 1}
          />
        ))}
      </div>
    </CommentWrapper>
  );
}

function ArticleDetailComments({ comments }) {
  const [comment, setComment] = useState('');
  // const [chooseId, setChooseId] = useState();

  return (
    <div>
      <TextField
        fullWidth
        label="评论"
        variant="outlined"
        multiline
        rowsMax="4"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <div>
        {comments.map((item) => (
          <ArticleDetailCommentsItem comment={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

ArticleDetailComments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    content: PropTypes.string,
  })).isRequired,
};

ArticleDetailCommentsItem.propTypes = {
  comment: PropTypes.shape({
    id: PropTypes.number,
    content: PropTypes.string,
  }).isRequired,
  nestedLevel: PropTypes.number,
};

ArticleDetailCommentsItem.defaultProps = {
  nestedLevel: 0,
};

export default ArticleDetailComments;
