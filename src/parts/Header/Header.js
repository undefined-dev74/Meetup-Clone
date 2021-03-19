import React from 'react';
import { useHistory } from 'react-router-dom';
import { Nav, NavbarContainer, NavList } from './Header.styled';
// !meetup logo https://findvectorlogo.com/wp-content/uploads/2019/07/meetup-vector-logo.png
const Header = () => {
  const history = useHistory();
  return (
    <>
      <NavbarContainer>
        <Nav>
          <a href="https://findvectorlogo.com/wp-content/uploads/2019/07/meetup-vector-logo.png">
            Meetup
          </a>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </Nav>
        <NavList>
          <ul>
            <li>
              <a href="/">Start a new group</a>
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
