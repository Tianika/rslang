import React from 'react';

export enum LoadingState {
  Initial = 'Initial',
  Loading = 'Loading',
  Success = 'Success',
  Error = 'Error'
}

export const EmptyComponent: React.FC = () => null;

export enum GameTypes {
  Sprint = 'Sprint',
  AudioCall = 'AudioCall'
}
