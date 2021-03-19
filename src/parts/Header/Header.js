import { Search } from '@material-ui/icons';
import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Nav,
  NavbarContainer,
  NavList,
  NavSearchFirst,
  NavSearchSecond,
} from './Header.styled';

// !meetup logo https://findvectorlogo.com/wp-content/uploads/2019/07/meetup-vector-logo.png
const Header = () => {
  const history = useHistory();
  return (
    <>
      <NavbarContainer>
        <Nav>
          <img
            src="https://findvectorlogo.com/wp-content/uploads/2019/07/meetup-vector-logo.png"
            alt=""
          />
          <form class="d-flex">
            <NavSearchFirst>
              <input
                type="search"
                placeholder="Search for keyboards"
                aria-label="Search"
              />
            </NavSearchFirst>
            <NavSearchSecond>
              <input
                type="search"
                placeholder="Gharonda, IN"
                aria-label="Search"
              />
            </NavSearchSecond>
            <button type="submit">
              <Search />
            </button>
          </form>
        </Nav>
        <NavList>
          <ul>
            <li>
              <a className="active" href="/">
                Start a new group
              </a>
            </li>
            <li>
              <a href="/">Log In</a>
            </li>
            <li>
              <a href="/">Sign Up</a>
            </li>
          </ul>
        </NavList>
      </NavbarContainer>
      <button onClick={() => history.push('/events')}>Events</button>

      <button onClick={() => history.push('/groups')}>Groups</button>
    </>
  );
};

export default Header;
