import styled from 'styled-components';
import { Paper } from '@material-ui/core';

export const LoginWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80%;
`;

export const LoginCoreWrapper = styled(Paper)`
  width: 360px;
  padding: 20px 40px;
`;

export const AccountInputWrapper = styled.div`
  margin: 20px 0;
`;

export const ButtonWrapper = styled.div`
  margin-top: 40px;
`;

export const RegisterButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`;
