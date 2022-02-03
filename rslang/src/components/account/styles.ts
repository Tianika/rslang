import styled from 'styled-components';
import { baseTheme } from '../../utils';

export const WindowAuthorizationAccount = styled.div`
  width: 600px;
  height: 450px;
  background-color: ${baseTheme.colors.blue};
  border-radius: 13px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
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
  }
`;
export const ContainerButton = styled.div`
  width: 600px;
  display: flex;
  justify-content: space-around;
  margin: 20px auto;
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
`;
export const WindowRecordAccount = styled.div`
  width: 600px;
  height: 500px;
  background-color: ${baseTheme.colors.blue};
  border-radius: 13px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
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
`;
