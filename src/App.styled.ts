import styled from "styled-components";
import { STYLE_VARS } from "./shared/style-vars";

export const Main = styled("div")`
  min-height: calc(100vh - ${STYLE_VARS.SPACING.HEADER_HEIGHT_PX + 1}px);
  overflow: hidden;
  background-color: #ecf0f0;
  padding: 20px 30px;

  @media screen and (min-width: 1220px) {
    padding: 20px 300px;
  }
`;

export const Content = styled("div")`
  display: flex;
  width: 100%;
  gap: ${STYLE_VARS.SPACING.CONTENT_GAP_PX}px;
  flex-wrap: wrap;
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: 1215px) {
    flex-wrap: nowrap;
  }
`;

export const Stores = styled("div")`
  width: 100%;
  height: 100%;
`;
