import styled from "styled-components";
import { STYLE_VARS } from "../../shared/style-vars";

export const Filters = styled("div")`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 15px;
  border-radius: 10px;
`;

export const FiltersInputs = styled("div")`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: flex-end;
  justify-items: center;

  @media screen and (min-width: 1220px) {
    flex-wrap: nowrap;
    gap: ${STYLE_VARS.SPACING.CONTENT_GAP_PX}px;
    justify-items: flex-start;
  }
`;

export const BillingWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const BillingLabel = styled("label")`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5px;
  color: ${STYLE_VARS.COLOR.TEXT};
`;
