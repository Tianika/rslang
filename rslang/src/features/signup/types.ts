import { LoadingState } from '../../utils/constants';

export type NewUser = {
  name: string;
  email: string;
  password: string;
};

export type SignupState = NewUser & {
  loadingState: LoadingState;
};
