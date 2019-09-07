import styled from 'styled-components';
import { Paper } from '@material-ui/core';

export const ArticleListWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const ListWrapper = styled(Paper)`
  width: 960px;
`;

export const ItemDateWrapper = styled.span`
  display: flex;
  justify-content: space-between;
  width: 400px;
  padding-top: 8px;
`;
