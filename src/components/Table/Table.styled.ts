import styled from "styled-components";
import { STYLE_VARS } from "../../shared/style-vars";

export const StyledTable = styled("table")`
  table-layout: fixed;
  color: ${STYLE_VARS.COLOR.TEXT};
  box-shadow: ${STYLE_VARS.SHADOW.LIGHT};
  font-size: 18px;
  border-radius: 10px;
  border: 2px solid ${STYLE_VARS.COLOR.LIGHT_GRAY};
  border-spacing: 0;
  overflow: hidden;
  width: 100%;
`;

export const Tr = styled("tr")`
  display: block;
  border-radius: 0;
  background: white;

  @media screen and (min-width: 768px) {
    border-radius: 8px;
    border: 2px solid lightgray;
    display: table-row;

    &:last-child td {
      border-bottom: 0;
    }
  }
`;

export const Td = styled("td")`
  margin: 0;
  padding: 8px 10px;
  border-bottom: none;
  border-top: 2px solid ${STYLE_VARS.COLOR.LIGHT_GRAY};
  color: ${STYLE_VARS.COLOR.TEXT};

  &:last-child {
    border-right: 0;
  }

  @media screen and (max-width: 768px) {
    border-bottom: 1px solid #ddd;
    display: block;
    font-size: 12px;
    text-align: right !important;
    height: auto !important;

    &::before {
      content: attr(data-label);
      float: left;
      font-weight: bold;
      text-transform: uppercase;
    }

    &:last-child {
      border-bottom: 0;
    }
  }
`;

export const Th = styled("th")`
  margin: 0;
  padding: 7px 10px;
  border-bottom: none;
  text-align: center;
  color: ${STYLE_VARS.COLOR.TEXT};
  display: none;

  &:hover {
    cursor: pointer;
    background-color: ${STYLE_VARS.COLOR.LIGHT_GRAY};
  }

  @media screen and (min-width: 769px) {
    display: table-cell;
  }
`;

export const Wrapper = styled("div")`
  text-align: center;
`;

export const Text = styled("span")`
  margin: 30px;
  font-weight: bold;
`;
