import styled from 'styled-components';
import { baseTheme } from '../../utils';
import { ErrorBlock } from './types';

export const WindowAuthorizationAccount = styled.form`
  width: 600px;
  height: 450px;
  background-color: ${baseTheme.colors.blue};
  border-radius: 13px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  @media (max-width: 1000px) {
    margin: 60px auto;
    width: 360px;
    height: 400px;
  }
`;
export const EmailTitle = styled.p`
  margin-top: 20px;
  font-family: Roboto, sans-serif;
  font-size: 28px;
  line-height: 33px;
  color: #ffffff;
  padding-left: 30px;
`;
export const EntryFieldEmail = styled.input`
  width: 500px;
  height: 60px;
  background: #ffffff;
  border-radius: 13px;
  border: none;
  margin-left: 30px;
  font-size: 24px;
  text-align: center;
  &::placeholder {
    font-size: 18px;
    font-weight: 100;
  }
  @media (max-width: 1000px) {
    width: 300px;
  }
`;
export const PasswordTitle = styled.p`
  font-family: Roboto, sans-serif;
  font-size: 28px;
  line-height: 33px;
  color: #ffffff;
  padding-left: 30px;
`;
export const EntryFieldPassword = styled.input`
  width: 500px;
  height: 60px;
  background: #ffffff;
  border-radius: 13px;
  border: none;
  margin-left: 30px;
  font-size: 24px;
  text-align: center;

  &::placeholder {
    font-size: 18px;
    font-weight: 100;
  }

  @media (max-width: 1000px) {
    width: 300px;
  }
`;
export const ButtonAuthentication = styled.button`
  width: 150px;
  height: 50px;
  color: #ffffff;
  background: ${baseTheme.colors.primary};
  border-radius: 50px;
  margin: 30px auto;
  font-size: 22px;
  border: none;
  transition: 1s;
  cursor: pointer;
  &:hover {
    background: ${baseTheme.colors.bg};
    color: ${baseTheme.colors.primary};
    border: 1px solid ${baseTheme.colors.primary};
    transform: scale(1.1);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    .line1,
    .line2,
    .line3 {
      background-color: ${baseTheme.colors.primary};
    }
  }
`;

export const PreloadLine = styled.div`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #fff;
  margin: 0 5px;

  &.line1 {
    animation: loading 1s 0.2s linear infinite;
  }
  &.line2 {
    animation: loading 1s 0.4s linear infinite;
  }
  &.line3 {
    animation: loading 1s 0.6s linear infinite;
  }

  @keyframes loading {
    0% {
      transform: translate(0, -7px);
    }
    50% {
      transform: translate(0, 7px);
    }
    100% {
      transform: translate(0, -7px);
    }
  }
`;

export const ContainerButton = styled.div`
  width: 600px;
  display: flex;
  justify-content: space-around;
  margin: 100px auto 20px;
  @media (max-width: 1000px) {
    width: 300px;
    margin: 10px auto;
  }
`;
export const TabEntrance = styled.button`
  font-size: 22px;
  color: #ffffff;
  width: 187px;
  height: 55px;
  background: ${baseTheme.colors.red};
  border-radius: 13px;
  border: none;
  cursor: pointer;
  transition: 1s;
  &:hover {
    background: ${baseTheme.colors.bg};
    color: ${baseTheme.colors.red};
    border: 1px solid ${baseTheme.colors.red};
    transform: scale(1.1);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
  @media (max-width: 1000px) {
    width: 150px;
    margin: 5px;
    font-size: 18px;
  }
`;
export const TabRecord = styled.button`
  font-size: 22px;
  color: #ffffff;
  width: 187px;
  height: 55px;
  background: ${baseTheme.colors.yellow};
  border-radius: 13px;
  border: none;
  cursor: pointer;
  transition: 1s;
  &:hover {
    background: ${baseTheme.colors.bg};
    color: ${baseTheme.colors.yellow};
    border: 1px solid ${baseTheme.colors.yellow};
    transform: scale(1.1);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
  @media (max-width: 1000px) {
    width: 150px;
    margin: 5px;
    font-size: 18px;
  }
`;
export const RecordTitle = styled.p`
  margin-top: 20px;
  font-family: Roboto, sans-serif;
  font-size: 28px;
  line-height: 33px;
  color: #ffffff;
  padding-left: 30px;
`;
export const EntryFieldRecord = styled.input`
  width: 500px;
  height: 60px;
  background: #ffffff;
  border-radius: 13px;
  border: none;
  margin-left: 30px;
  @media (max-width: 1000px) {
    width: 300px;
  }
`;
export const WindowRecordAccount = styled.div`
  width: 600px;
  height: 500px;
  background-color: ${baseTheme.colors.blue};
  border-radius: 13px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  @media (max-width: 1000px) {
    width: 360px;
    margin: 50px auto;
  }
`;
export const ButtonRecord = styled.button`
  width: 300px;
  height: 50px;
  color: #ffffff;
  background: ${baseTheme.colors.primary};
  border-radius: 50px;
  margin: 30px auto;
  font-size: 22px;
  border: none;
  transition: 1s;
  cursor: pointer;
  &:hover {
    background: ${baseTheme.colors.bg};
    color: ${baseTheme.colors.primary};
    border: 1px solid ${baseTheme.colors.primary};
    transform: scale(1.1);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
  @media (max-width: 1000px) {
    width: 250px;
    font-size: 18px;
  }
`;
export const ErrorWindow = styled.div<ErrorBlock>`
  position: fixed;
  display: ${(props) => (props.open ? 'flex' : 'none')};
  flex-direction: column;
  top: 12%;
  left: 34%;
  width: 32vw;
  height: 11vh;
  background: rgb(255, 255, 255);
  border-radius: 13px;
  border: 1px solid #6dc3ff;
  color: rgba(128, 128, 128, 0.5);
  z-index: 2;
  padding: 10px;
  align-items: center;
  font-size: 20px;
  @media (max-width: 1000px) {
    top: 8%;
    left: 10%;
    width: 80vw;
    font-size: 15px;
    height: 12vh;
  }
`;
export const ButtonCloseErrorWindow = styled.div`
  background-image: url('https://www.svgrepo.com/show/100952/open.svg');
  position: fixed;
  right: 34%;
  width: 30px;
  height: 30px;
  color: #c00101;
  margin: 0 10px;
  transform-style: preserve-3d;
  transition: 1s;
  &:hover {
    background-image: url('https://www.svgrepo.com/show/3076/close.svg');
    transform: rotateY(360deg);
  }
  @media (max-width: 1000px) {
    margin: 0;
    right: 12%;
  }
`;
