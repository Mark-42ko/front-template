'use client'

import { Home, MainBox, NavItem } from "@comp/nav/styles";

export default function Nav() {

  return (
    <MainBox>
      <Home href="/">Home</Home>
      <NavItem href="/login">로그인</NavItem>
    </MainBox>
  )
}
