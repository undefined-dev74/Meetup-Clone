import React from 'react';
import { useHistory } from 'react-router-dom';

// !meetup logo findvectorlogo.com/wp-content/uploads/2019/07/meetup-vector-logo.png

https: const Header = () => {
  const history = useHistory();
  return (
    <>
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img
              src="https://findvectorlogo.com/wp-content/uploads/2019/07/meetup-vector-logo.png"
              width="90px"
              alt=""
            />
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
          <ul class="navbar-nav d-flex flex-row flex-end m-auto justify-content-end">
            <li class="nav-item">
              <a class="nav-link active" href="/">
                Start a new group
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">
                Log In
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">
                Sign Up
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <button onClick={() => history.push('/events')}>Events</button>

      <button onClick={() => history.push('/groups')}>Groups</button>
    </>
  );
};

export default Header;
