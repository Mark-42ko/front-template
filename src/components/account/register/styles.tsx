import styled from "styled-components";

import { CheckState } from "@comp/account/register/types";

export const MainBox = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(0, 0, 0, 1);
`;

export const RegisterBox = styled.div`
  width: 36vw;
  height: 80vh;
  padding: 2vw;
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
  width: 90%;
  gap: 14px;

  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  gap: 8px;

  display: flex;
  flex-direction: column;
`;

export const ContentInnerBox = styled.div`
  gap: 12px;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ContentText = styled.text`
  font-size: 16px;
`;

export const ContentError = styled.text<{ $state?: CheckState }>`
  font-size: 12px;
  color: ${({ $state }) => ($state === CheckState.SUCCESS ? "rgba(0, 255, 0, 1)" : "rgba(255, 0, 0, 1)")};
`;

export const ContentInput = styled.input`
  width: calc(100% - 10px);
  height: 40px;
  padding: 0px 0px 0px 10px;

  font-size: 14px;
`;

export const IdBox = styled.div`
  width: 100%;
  gap: 8px;

  display: flex;
  flex-direction: row;
`;

export const DuplicationCheck = styled.button`
  width: 120px;

  font-size: 16px;

  border-radius: 4px;
  background: rgba(255, 255, 255, 1);
`;

export const RegisterButton = styled.button`
  width: 40%;
  height: 50px;

  font-size: 24px;

  border-radius: 8px;
  background-color: rgba(255, 255, 255, 1);
`;

