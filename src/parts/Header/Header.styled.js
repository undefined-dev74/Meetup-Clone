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
  img {
    text-align: center;
    margin-left: 32px;
    margin-right: 60px;
    width: 100px;
  }

  button {
    box-sizing: border-box;
    margin: 0;
    appearance: none;
    text-align: center;
    text-decoration: none;
    padding: 8px 12px;
    border: 0;
    border-radius: 8px;
    cursor: pointer;
    color: #ffffff;
    fill: #ffffff;
    position: relative;
    width: auto;
    height: 44px;
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
    right: 7px;
    background-color: #f65858;
    border-color: #f65858;
  }
`;

const NavSearchFirst = styled.div`
  display: flex;
  width: inherit;

  input {
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    width: 100%;
    border: 1px solid rgb(217, 217, 217);
    background-color: transparent;
    padding: 8px;
    border-radius: 8px;
    padding-left: 16px;
    border-radius: 8px 0 0 8px;
    border-color: #d9d9d9;
    border-width: 1px;
    line-height: 26px;

    ::placeholder {
      color: #aba2a2;
      font-weight: 500;
    }

    :hover {
      border-color: #000000;
    }
  }
`;

const NavSearchSecond = styled.div`
  display: flex;
  width: inherit;

  input {
    width: 100%;
    -webkit-appearance: none;
    -moz-appearance: none;
    height: 100%;
    background-color: #ffffff;
    border: 1px solid #d9d9d9;
    border-radius: 0 8px 8px 0;
    box-sizing: border-box;
    color: #212121;
    font-size: 16px;
    padding: 8px 16px;
    
    ::placeholder {
        color: #000000;
        font-weight:600;
    }

    :hover {
      border-color: #000000;
    }s
  }
`;

const NavList = styled.div`
  display: flex;
  flex: 0.25;
  margin: 0;
  min-width: 0;
  padding: 8px;
  flex-shrink: 0;

  ul {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    list-style: none;
    margin: 10px;

    li a {
      margin: 0;
      font-weight: 800;
      padding: 8px 12px;
      font-size: 14px;
      line-height: 1.43;
      text-decoration: none;
      color: #008294;
    }
  }
`;

export { NavbarContainer, Nav, NavList, NavSearchFirst, NavSearchSecond };
