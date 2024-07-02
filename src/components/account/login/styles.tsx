import Link from "next/link";
import styled from "styled-components";

export const MainBox = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(0, 0, 0, 1);
`;

export const LoginBox = styled.div`
  width: 40vw;
  height: 30vw;
  gap: 36px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background: rgba(255, 255, 255, 1);
  border-radius: 8px;
`;

export const Title = styled.text`
  font-size: 36px;
`;

export const ContentsBox = styled.div`
  width: 80%;
  gap: 24px;

  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ContentText = styled.text`
  width: 150px;
  font-size: 24px;
`;

export const ContentInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 0px 0px 0px 10px;

  font-size: 18px;
`;

export const AccountBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AccountContent = styled.div`
  gap: 8px;

  display: flex;
  flex-direction: row;
`;

export const AccountText = styled.text`
  font-size: 14px;
  color: rgba(170, 170, 170, 1);
`;

export const AccountLink = styled(Link)`
  font-size: 16px;
`;

export const LoginButton = styled.button`
  width: 40%;
  height: 50px;

  font-size: 24px;

  border-radius: 8px;
  background-color: rgba(255, 255, 255, 1);
`;
