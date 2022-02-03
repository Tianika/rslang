export type NewUser = {
  name: string;
  email: string;
  password: string;
};

export type User = {
  email: string;
  password: string;
};

type ChangeEventHandle = (value: React.ChangeEvent<HTMLInputElement>) => void;

export type AccountProps = {
  onNameChange: ChangeEventHandle;
  onEmailChange: ChangeEventHandle;
  onPasswordChange: ChangeEventHandle;
};

export type Signin = {
  message: 'string';
  token: 'string';
  refreshToken: 'string';
  userId: 'string';
  name: 'string';
};
