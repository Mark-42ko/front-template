import { CheckObject, CheckState, RegisterInfo } from "@comp/account/register/types";

function onDuplicationCheck(value: string): CheckObject {
  // TODO: 서버 완성 후 연결 예정 api 에서 가져와서 사용하기
  console.log(value);
  const check = true;

  const rst: CheckObject = {
    value,
    msg: check ? "사용가능한 아이디 입니다." : "중복된 아이디 입니다. 다른 아이디를 입력해주세요.",
    state: check ? CheckState.SUCCESS : CheckState.FAIL,
  };

  return rst;
}

function passwordRuleCheck(value: string): CheckObject {
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+\\|[\]{};:'",.<>/?]).{10,}$/;

  const check = passwordRegex.test(value);

  const rst: CheckObject = {
    value,
    msg: check ? "" : "비밀번호를 규칙에 맞게 입력해주세요.",
    state: check ? CheckState.SUCCESS : CheckState.FAIL,
  };

  return rst;
}

function passwordReCheck(value1: string, value2: string): CheckObject {
  const check = value1 === value2;
  console.log(value1, value2);
  const rst: CheckObject = {
    value: value1,
    msg: check ? "" : "비밀번호가 일치하지 않습니다. 다시 입력해주세요.",
    state: check ? CheckState.SUCCESS : CheckState.FAIL,
  };

  return rst;
}

function emailRuleCheck(value: string): CheckObject {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const check = emailRegex.test(value);

  const rst: CheckObject = {
    value,
    msg: check ? "" : "이메일 양식에 맞게 입력해주세요.",
    state: check ? CheckState.SUCCESS : CheckState.FAIL,
  };

  return rst;
}

function onRegister(value: RegisterInfo) {
  if (value.id.state === CheckState.DEFAULT) {
    alert("아이디 중복확인을 해주세요.");
    return;
  }

  if (value.id.state !== CheckState.SUCCESS || value.pw.state !== CheckState.SUCCESS || value.rePw.state !== CheckState.SUCCESS || value.email.state !== CheckState.SUCCESS) {
    alert("작성된 정보를 다시 확인해주세요.");
    return;
  }

  alert("회원가입이 완료되었습니다.");
}

export { onDuplicationCheck, passwordRuleCheck, passwordReCheck, emailRuleCheck, onRegister };

