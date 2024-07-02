import { useState } from "react";

import {
  AccountBox,
  AccountContent,
  AccountLink,
  AccountText,
  Content,
  ContentInput,
  ContentsBox,
  ContentText,
  LoginBox,
  LoginButton,
  MainBox,
  Title,
} from "@comp/account/login/styles";

import { LoginInfo } from "@comp/account/login/types";

export default function LoginComp() {
  const defaultInfo: LoginInfo = {
    id: "",
    pw: "",
  };

  const [login, setLogin] = useState<LoginInfo>(defaultInfo);

  return (
    <MainBox>
      <LoginBox>
        <Title>Login</Title>
        <ContentsBox>
          <Content>
            <ContentText>아이디 : </ContentText>
            <ContentInput
              type="text"
              onChange={(event) => {
                setLogin({ ...login, id: event.target.value });
              }}
            />
          </Content>
          <Content>
            <ContentText>비밀번호 : </ContentText>
            <ContentInput
              type="password"
              onChange={(event) => {
                setLogin({ ...login, pw: event.target.value });
              }}
            />
          </Content>
        </ContentsBox>
        <AccountBox>
          <AccountContent>
            <AccountText>아이디 혹은 비밀번호를 잊으셨나요?</AccountText>
            <AccountLink href="/find-account">아이디/비밀번호 찾기</AccountLink>
          </AccountContent>
          <AccountContent>
            <AccountText>계정이 없으신가요?</AccountText>
            <AccountLink href="/register">회원가입</AccountLink>
          </AccountContent>
        </AccountBox>
        <LoginButton>로그인</LoginButton>
      </LoginBox>
    </MainBox>
  );
}

