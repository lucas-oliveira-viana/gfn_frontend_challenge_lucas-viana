import { Dispatch, FunctionComponent, SetStateAction, useEffect } from "react";
import {
  Arrow,
  Button,
  ButtonArrow,
  Pagination as PaginationStyled,
} from "./Pagination.styled";
import PreviousSVG from "../../shared/assets/images/left.svg";
import NextSVG from "../../shared/assets/images/right.svg";

interface IProps {
  totalPages: number[];
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

export const Pagination: FunctionComponent<IProps> = ({
  totalPages,
  currentPage,
  setCurrentPage,
}) => {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages.length;

  return (
    <PaginationStyled>
      {totalPages.length > 0 && (
        <ButtonArrow
          isFirstPage={isFirstPage}
          onClick={() => {
            if (!isFirstPage) {
              setCurrentPage(currentPage - 1);
            }
          }}
        >
          <Arrow src={PreviousSVG} />
        </ButtonArrow>
      )}
      {totalPages?.map((page, i) => (
        <Button
          key={i}
          isCurrentPage={currentPage === page}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </Button>
      ))}

      {totalPages.length > 0 && (
        <ButtonArrow
          isLastPage={isLastPage}
          onClick={() => {
            if (!isLastPage) {
              setCurrentPage(currentPage + 1);
            }
          }}
        >
          <Arrow src={NextSVG} />
        </ButtonArrow>
      )}
    </PaginationStyled>
  );
};
