import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.nav`
  height: 100%;
  width: 160px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #4e53a5;
  overflow-x: hidden;
  padding-top: 20px;
`;

export const Link = styled(NavLink)`
  padding: 6px 8px 6px 16px;
  font-family: 'Permanent Marker', cursive;
  text-decoration: none;
  font-size: 25px;
  color: #e2a8be;
  display: block;
  &.active {
    color: #d58ebf;
  }
`;
