export type User = {
  email: string;
  password: string;
};

export type Signin = {
  message: 'string';
  token: 'string';
  refreshToken: 'string';
  userId: 'string';
  name: 'string';
};

export type Email = 'email';

export type Password = 'password';
