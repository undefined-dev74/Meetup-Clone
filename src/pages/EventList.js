import React from "react";
import {
  EventAnchor,
  EventDate,
  EventDetails,
  EventImg,
  EventListContainer,
  EventListDetails,
  Events,
} from "./EventList.styled";

const EventList = () => {
  return (
    <div className="container">
      <EventListContainer>
        <Events>
          <EventAnchor>
            <EventImg>
              <div className="image-wrapper">
                <img
                  src="https://secure.meetupstatic.com/photos/event/a/1/1/7/highres_494561239.jpeg"
                  alt="Event"
                />
              </div>
              <EventListDetails>
                <EventDetails>
                  <EventDate>SUN, MAR 24, 9:00 AM GMT+5:30</EventDate>
                  <p>
                    Start with Data Science & ML using Python | Season 01 - Ep
                    01 [FREE]
                  </p>
                  <p className="title">
                    <span>Knaxus</span>
                  </p>
                  <div className="attendance">
                    <div>
                      <div>45 Attendance</div>
                    </div>
                  </div>
                </EventDetails>
              </EventListDetails>
            </EventImg>
          </EventAnchor>
        </Events>
      </EventListContainer>
    </div>
  );
};

export default EventList;
