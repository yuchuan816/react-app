import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import {
  ItemLine,
  ItemInfoWrapper,
} from './styled';
import { date2commonDate } from '@/utils/date';

const ArticleListInfo = ({ articleInfo }) => (
  <ItemInfoWrapper>
    <Typography
      component="span"
      variant="body2"
      color="textSecondary"
    >
      <span>作者：</span>
      <span>{articleInfo.author}</span>
    </Typography>
    <span>
      <Typography
        component="span"
        variant="body2"
        color="textSecondary"
      >
        <span>创建时间：</span>
        <span>{date2commonDate(articleInfo.created_time)}</span>
      </Typography>
      <ItemLine>|</ItemLine>
      <Typography
        component="span"
        variant="body2"
        color="textSecondary"
      >
        <span>修改时间：</span>
        <span>{date2commonDate(articleInfo.modified_time)}</span>
      </Typography>
    </span>
  </ItemInfoWrapper>
);

ArticleListInfo.propTypes = {
  articleInfo: PropTypes.shape({
    created_time: PropTypes.string,
    modified_time: PropTypes.string,
  }).isRequired,
};

export default ArticleListInfo;
