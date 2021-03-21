import styled from "styled-components";

const EventListContainer = styled.div`
  padding: 16px 0 20px 0;
  width: 100%;
  background-size: cover;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  border-top: 1px solid rgb(217, 217, 217);
  max-width: 1060px;

  margin-left: auto;
  margin-right: auto;
`;

const Events = styled.div`
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  -webkit-box-pack: start;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  display: flex;
`;

const EventAnchor = styled.div`
  display: inline;
  cursor: pointer;
  text-decoration: none;
  width: 100%;
`;

const EventImg = styled.div`
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  width: 100%;
  height: 100%;
  flex-direction: row;
  display: flex;

  .image-wrapper {
    position: relative;
    overflow: hidden;
    height: inherit;
    object-fit: cover;
    border-radius: 8px;
    padding-right: 16px;
  }
  img {
    width: 200px;
  }
`;

const EventListDetails = styled.div`
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  display: flex;
`;

const EventDetails = styled.div`
  box-sizing: border-box;
  margin: 0px;
  overflow: hidden;
  min-width: 160px;

  p {
    color: rgb(33, 33, 33);
    font-weight: 500;
    font-size: 16px;
    padding-top: 0px;
    padding-bottom: 4px;
    line-height: 24px;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  p.title {
    padding-bottom: 16px;
    margin: 0px auto;
    width: 100%;
    padding-left: 0px;
    padding-bottom: 8px;
    padding-top: 0px;
    color: rgb(117, 117, 117);
    font-size: 14px;
    text-decoration: none;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    span {
    }
  }

  .attendance {
    box-sizing: border-box;
    margin: 0px;
    min-width: 0px;
    width: 100%;
    -webkit-box-pack: justify;
    justify-content: space-between;
    display: flex;

    div {
      box-sizing: border-box;
      margin: 0px;
      min-width: 0px;
      flex-direction: row;
      display: flex;

      div {
        box-sizing: border-box;
        margin: 0px;
        min-width: 0px;
        color: rgb(117, 117, 117);
        font-size: 14px;
      }
    }
  }
`;

const EventDate = styled.div`
  text-transform: uppercase;
  font-size: 14px;
  line-height: 1.6;
  font-weight: 500;
  letter-spacing: -0.02em;
  word-spacing: 0.1em;
  padding-top: 0px;
  padding-bottom: 4px;
  display: flex;
  flex-direction: column;
  color: rgb(135, 116, 87) !important;
`;

export {
  EventListContainer,
  Events,
  EventImg,
  EventAnchor,
  EventListDetails,
  EventDetails,
  EventDate,
};
