import { ExpandMore } from "@material-ui/icons";
import React from "react";
import {
  EventContainer,
  EventHeading,
  EventNav,
  EventOptions,
} from "./Event.style";

const Events = () => {
  return (
    <div>
      <div className="container fixed-top">
        <EventContainer>
          <EventNav>
            <ul>
              <li>
                <a className="active" href="/">
                  Events
                </a>
                <a href="/">Groups</a>
              </li>
            </ul>
          </EventNav>
          <EventHeading>Events Near Gharonda, IN</EventHeading>
          <EventOptions>
            <div className="mb-5"></div>
            <div>
              <button>
                Any Day <ExpandMore className="ml-3" />
              </button>
            </div>
            <div>
              <button>
                Any Type <ExpandMore className="ml-3" />
              </button>
            </div>
            <div>
              <button>
                Any Distance <ExpandMore className="ml-3" />
              </button>
            </div>
            <div>
              <button>
                Any Catogary <ExpandMore className="ml-3" />
              </button>
            </div>
          </EventOptions>
        </EventContainer>
      </div>
    </div>
  );
};

export default Events;
