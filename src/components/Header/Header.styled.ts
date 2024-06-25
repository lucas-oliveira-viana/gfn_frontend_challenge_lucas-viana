import styled from "styled-components";
import { STYLE_VARS } from "../../shared/style-vars";

export const HeaderStyled = styled("header")`
  display: flex;
  height: ${STYLE_VARS.SPACING.HEADER_HEIGHT_PX}px;
  border-bottom: 1px solid #eaeaea;
  justify-content: start;
  align-items: center;
  background-color: #0080b2;
`;

export const Title = styled("h1")`
  margin-left: ${STYLE_VARS.SPACING.HEADER_HEIGHT_PX}px;
  color: white;
  font-size: 1.5em;

  @media screen and (min-height: 768px) {
    font-size: 2em;
  }
`;
