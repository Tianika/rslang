import { LoadingState } from './signup.slice';

export type NewUser = {
  name: string;
  email: string;
  password: string;
};

export type SignupState = NewUser & {
  loadingState: LoadingState;
};
