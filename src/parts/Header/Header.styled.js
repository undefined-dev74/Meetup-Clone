import styled from 'styled-components';

const NavbarContainer = styled.div`
  display: flex;
  height: 70px;
  background-color: #f9f3f3;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 4;
  background-color: #ffffff;
  border-bottom: solid;
  border-bottom-width: 1px;
  border-bottom-color: #e6e6e6;
`;

const Nav = styled.div`
  display: flex;
  flex: 0.75;
  align-items: center;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 32px;
    margin-right: 60px;
  }
`;

const NavList = styled.div`
  display: flex;
  flex: 0.25;
  ul {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    list-style: none;
    margin: 10px;

    li a {
      margin-left: 5px;
      margin-right: 5px;
      text-decoration: none;
      color: #008294;
    }
  }
`;

export { NavbarContainer, Nav, NavList };
