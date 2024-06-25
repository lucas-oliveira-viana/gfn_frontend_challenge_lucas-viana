import styled from "styled-components";

interface IButtonProps {
  isCurrentPage: boolean;
}

interface IArrowProps {
  isFirstPage?: boolean;
  isLastPage?: boolean;
}

export const Pagination = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
`;

export const Button = styled("button")<IButtonProps>`
  padding: 5px 10px;
  font-size: 16px;
  font-family: "Lato";
  font-weight: bold;
  border-radius: 4px;
  border: none;
  background-color: transparent;
  color: ${(props) => (props.isCurrentPage ? "black" : "#A4A4A4")};

  &:hover {
    cursor: pointer;
    color: black;
  }
`;

export const ButtonArrow = styled("button")<IArrowProps>`
  border: none;
  pointer-events: ${(props) =>
    props.isFirstPage || props.isLastPage ? "none" : "auto"};
  opacity: ${(props) => (props.isFirstPage || props.isLastPage ? "0.3" : "1")};
  cursor: pointer;
`;

export const Arrow = styled("img")`
  width: 16px;
`;
