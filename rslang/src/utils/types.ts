export type ChangeEventHandle = (value: React.ChangeEvent<HTMLInputElement>) => void;

export type AccountProps = {
  onNameChange: ChangeEventHandle;
  onEmailChange: ChangeEventHandle;
  onPasswordChange: ChangeEventHandle;
  onLevelChange: ChangeEventHandle;
};
