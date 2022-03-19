import { LoadingState } from '../../utils';

export type NewUser = {
  name: string;
  email: string;
  password: string;
};

export type SignupState = NewUser & {
  loadingState: LoadingState;
};
