import styled from "styled-components";
import { STYLE_VARS } from "../../shared/style-vars";

interface IPropsInput {
  applyMask?: (value: string) => string;
  icon?: string;
}

interface IPropsInputWrapper {
  width?: `${string}px` | `${string}%`;
}

export const InputWrapper = styled("div")<IPropsInputWrapper>`
  position: relative;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: ${(props) => (props.width ? props.width : "auto")};
  }
`;

export const Input = styled("input")<IPropsInput>`
  font-family: Lato;
  box-shadow: ${STYLE_VARS.SHADOW.MEDIUM};
  font-size: 18px;
  padding: ${(props) => `5px ${props.icon ? 40 : 10}px 5px 10px`};
  min-width: 270px;
  border-radius: 8px;
  border: 1px solid rgb(182, 182, 182);
  width: 100%;
  color: ${(props) =>
    props.applyMask ? "transparent" : STYLE_VARS.COLOR.TEXT};
  pointer-events: ${(props) => (props.applyMask ? "none" : "auto")};
`;

export const MaskedInputWrapper = styled("div")<IPropsInputWrapper>`
  width: 100%;
  position: relative;
  cursor: text;

  @media screen and (min-width: 768px) {
    width: ${(props) => (props.width ? props.width : "auto")};
  }
`;

export const Mask = styled("span")`
  position: absolute;
  font-size: 18px;
  color: ${STYLE_VARS.COLOR.TEXT};
  right: 10px;
  top: 6px;
`;

export const InputIcon = styled("img")`
  width: 20px;
  height: 100%;
  opacity: 0.2;
`;

export const InputIconWrapper = styled("div")`
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  width: 40px;
  display: flex;
  justify-content: center;
`;
