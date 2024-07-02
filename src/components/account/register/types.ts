/* eslint-disable no-unused-vars */
export type RegisterInfo = {
  id: CheckObject;
  pw: CheckObject;
  rePw: CheckObject;
  email: CheckObject;
};

export type CheckObject = {
  value: string;
  msg: string;
  state: CheckState;
};

export enum CheckState {
  SUCCESS,
  FAIL,
  DEFAULT,
}

