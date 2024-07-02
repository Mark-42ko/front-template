import { useState } from "react";

import {
  Content,
  ContentError,
  ContentInnerBox,
  ContentInput,
  ContentsBox,
  ContentText,
  DuplicationCheck,
  IdBox,
  MainBox,
  RegisterBox,
  RegisterButton,
  Title,
} from "@comp/account/register/styles";

import { CheckState, RegisterInfo } from "@comp/account/register/types";

import { emailRuleCheck, onDuplicationCheck, onRegister, passwordReCheck, passwordRuleCheck } from "@comp/account/register/utils";

export default function RegisterComp() {
  const defaultInfo: RegisterInfo = {
    id: { value: "", msg: "", state: CheckState.DEFAULT },
    pw: { value: "", msg: "", state: CheckState.DEFAULT },
    rePw: { value: "", msg: "", state: CheckState.DEFAULT },
    email: { value: "", msg: "", state: CheckState.DEFAULT },
  };

  const [info, setInfo] = useState<RegisterInfo>(defaultInfo);

  return (
    <MainBox>
      <RegisterBox>
        <Title>회원가입</Title>
        <ContentsBox>
          <Content>
            <ContentInnerBox>
              <ContentText>아이디</ContentText>
              <ContentError $state={info.id.state}>{info.id.msg}</ContentError>
            </ContentInnerBox>
            <IdBox>
              <ContentInput
                placeholder="4자 이상 입력해주세요."
                type="text"
                onChange={(event) => {
                  setInfo({ ...info, id: { ...info.id, value: event.target.value } });
                }}
              />
              <DuplicationCheck
                type="button"
                onClick={() => {
                  const id = onDuplicationCheck(info.id.value);
                  setInfo({ ...info, id });
                }}
              >
                중복확인
              </DuplicationCheck>
            </IdBox>
          </Content>
          <Content>
            <ContentInnerBox>
              <ContentText>비밀번호</ContentText>
              <ContentError>{info.pw.msg}</ContentError>
            </ContentInnerBox>
            <ContentInput
              placeholder="대소문자, 특수문자, 숫자를 포함 10자 이상으로 작성해주세요."
              type="password"
              onChange={(event) => {
                const pw = passwordRuleCheck(event.target.value);
                const rePw = passwordReCheck(info.rePw.value, event.target.value);
                setInfo({ ...info, pw, rePw });
              }}
            />
          </Content>
          <Content>
            <ContentInnerBox>
              <ContentText>비밀번호 확인</ContentText>
              <ContentError>{info.rePw.msg}</ContentError>
            </ContentInnerBox>
            <ContentInput
              placeholder="비밀번호를 한 번 더 입력해주세요."
              type="password"
              onChange={(event) => {
                const rePw = passwordReCheck(event.target.value, info.pw.value);
                setInfo({ ...info, rePw });
              }}
            />
          </Content>
          <Content>
            <ContentInnerBox>
              <ContentText>이메일</ContentText>
              <ContentError>{info.email.msg}</ContentError>
            </ContentInnerBox>
            <ContentInput
              placeholder="이메일을 입력해주세요."
              type="text"
              onChange={(event) => {
                const email = emailRuleCheck(event.target.value);
                setInfo({ ...info, email });
              }}
            />
          </Content>
        </ContentsBox>
        <RegisterButton onClick={() => onRegister(info)}>회원가입</RegisterButton>
      </RegisterBox>
    </MainBox>
  );
}

