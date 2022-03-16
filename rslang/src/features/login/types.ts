import { LoadingState } from '../../utils';

export type User = {
  email: string;
  password: string;
};

export type LoginState = User & {
  loadingState: LoadingState;
};

export type Signin = {
  message: string;
  token: string;
  refreshToken: string;
  userId: string;
  name: string;
};
export type ErrorBlock = {
  open: boolean;
};
