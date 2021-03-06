type ChangeEventHandle = (value: React.ChangeEvent<HTMLInputElement>) => void;
type ChangeSelectHandle = (value: React.ChangeEvent<HTMLSelectElement>) => void;

export type AudioEventHandle = (value: React.SyntheticEvent<HTMLElement>) => void;

export type AccountProps = {
  onNameChange: ChangeEventHandle;
  onEmailChange: ChangeEventHandle;
  onPasswordChange: ChangeEventHandle;
  onLevelChange: ChangeSelectHandle;
};
