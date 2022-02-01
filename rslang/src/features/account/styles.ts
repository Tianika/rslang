import styled from 'styled-components';

export const WindowAuthorizationAccount = styled.div`
  width: 851px;
  height: 647px;
  background: rgba(89, 132, 226, 0.75);
  border-radius: 0 13px 13px 13px;
  margin: 55px auto;
  display: flex;
  flex-direction: column;
`;
export const EmailTitle = styled.h2`
  margin-top: 60px;
  font-family: Roboto, sans-serif;
  font-size: 28px;
  line-height: 33px;
  color: #ffffff;
  padding-left: 30px;
`;
export const EntryFieldEmail = styled.input`
  width: 756px;
  height: 60px;
  background: #ffffff;
  border-radius: 13px;
  border: none;
  margin-left: 30px;
`;
export const PasswordTitle = styled.h2`
  font-family: Roboto, sans-serif;
  font-size: 28px;
  line-height: 33px;
  color: #ffffff;
  padding-left: 30px;
`;
export const EntryFieldPassword = styled.input`
  width: 756px;
  height: 60px;
  background: #ffffff;
  border-radius: 13px;
  border: none;
  margin-left: 30px;
`;
export const ButtonAuthentication = styled.button`
  width: 240px;
  height: 60px;
  color: #ffffff;
  background: #114c82;
  border-radius: 50px;
  margin: 30px auto;
  font-size: 35px;
  border: none;
  transition: 1s;
  cursor: pointer;
  &:hover {
    background: #ffffff;
    color: #114c82;
  }
`;
export const TabEntrance = styled.button`
  font-size: 28px;
  position: absolute;
  color: #ffffff;
  width: 187px;
  height: 55px;
  background: rgba(89, 132, 226, 0.75);
  border-radius: 13px 13px 0 0;
  border: none;
  top: 102px;
  cursor: pointer;
  &:hover {
    color: #114c82;
  }
`;
