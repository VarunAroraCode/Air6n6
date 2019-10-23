import React from 'react';
import moment from 'moment';
const styled = window.styled;

const Cell = styled.td`
  :hover {
    cursor: default;
  }

  ${props =>
    props.isSelected
      ? `background-color: #02A699;
        color: white;`
      : props.unavailable
      ? `text-decoration: line-through #dedede; 
      color: #dedede;`
      : props.cal === 'checkIn' || (props.cal === 'checkOut' && !props.isHover)
      ? `:hover {
        background-color: #E4E7E7;
        cursor: pointer;
      };`
      : `:hover {cursor: pointer;}`}
  ${props =>
    props.isHover
      ? `background-color: #B3F1EC;
      color: white;`
      : null}
`;

const Day = props => (
  <Cell
    unavailable={props.unavailable}
    cal={props.cal}
    isSelected={props.isSelected}
    isHover={props.isHover}
    onClick={() => {
      !props.unavailable && !(props.isCheckIn && props.cal === 'checkOut')
        ? props.handleDateClick(props.cal, props.month, props.day)
        : null;
    }}
    onMouseOver={() => {
      !props.unavailable
        ? props.handleDaysHover
          ? props.handleDaysHover(props.month, props.day, props.cal)
          : null
        : null;
    }}
    onMouseLeave={props.handleMouseLeave}
  >
    {props.day}
  </Cell>
);

export default Day;
