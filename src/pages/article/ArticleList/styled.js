import styled from 'styled-components';
import { Paper } from '@material-ui/core';

export const ArticleListWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const ListWrapper = styled(Paper)`
  width: 960px;
`;

export const ItemInfoWrapper = styled.span`
  display: flex;
  justify-content: space-between;
  padding-top: 8px;
`;

export const ItemLine = styled.span`
  padding: 0 8px;
`;
