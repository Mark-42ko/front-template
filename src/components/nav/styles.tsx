import Link from "next/link";
import styled from "styled-components";

export const MainBox = styled.div`
  height: 68px;
  width: calc(100vw - 24px);
  padding: 12px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: rgba(0, 122, 122, 1);
`;

export const Home = styled(Link)`
  font-size: 32px;
`;

export const NavBox = styled.div`
  display: felx;
  align-items: center;
  justify-content: center;
  gap: 24px;
`;

export const NavItem = styled(Link)`
  font-size: 32px;
`;

