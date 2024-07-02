import { AccountBox, AccountContent, AccountLink, AccountText, Content, ContentInput, ContentsBox, ContentText, LoginBox, LoginButton, MainBox, Title } from "@comp/account/login/styles";

export default function LoginComp() {
  return (
    <MainBox>
      <LoginBox>
        <Title>Login</Title>
        <ContentsBox>
          <Content>
            <ContentText>아이디 : </ContentText>
            <ContentInput />
          </Content>
          <Content>
            <ContentText>비밀번호 : </ContentText>
            <ContentInput type="password" />
          </Content>
        </ContentsBox>
        <AccountBox>
          <AccountContent>
            <AccountText>아이디 혹은 비밀번호를 잊으셨나요?</AccountText>
            <AccountLink href="/">아이디/비밀번호 찾기</AccountLink>
          </AccountContent>
          <AccountContent>
            <AccountText>계정이 없으신가요?</AccountText>
            <AccountLink href="/">회원가입</AccountLink>
          </AccountContent>
        </AccountBox>
        <LoginButton>로그인</LoginButton>
      </LoginBox>
    </MainBox>
  );
}
