import styled from 'styled-components';

const EventContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1060px;
`;

const EventNav = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
  margin-left: -25px;

  ul {
    box-sizing: border-box;
    margin: 0px;
    min-width: 0px;
    display: flex;
    list-style: none;
    padding-top: 20px;

    li {
      margin: 0;
      padding: 0;

      a {
        line-height: 1;
        padding-bottom: 4px;
        font-weight: 600;
        font-size: 20px;
        margin-right: 24px;
        color: rgb(0, 130, 148);
        border-bottom: 4px solid rgb(0, 130, 148);
        text-decoration: none;
      }
    }
  }
`;

const EventHeading = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  padding-top: 20px;
  padding-bottom: 20px;
  color: rgb(117, 117, 117);
`;

const EventOptions = styled.div`
  border-bottom: 2px solid rgb(230, 230, 230);
  overflow: unset;
  display: flex;
  flex-direction: row;
  padding-bottom: 20px;

  div > button {
    padding: 16px 18px;
    font-weight: 600;
    font-size: 14px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    border-radius: 40px;
    margin-right: 19px;
    color: rgb(33, 33, 33);
    fill: rgb(33, 33, 33);
    background: rgb(246, 247, 248);
    border: none;
  }
`;
export { EventContainer, EventNav, EventHeading, EventOptions };
