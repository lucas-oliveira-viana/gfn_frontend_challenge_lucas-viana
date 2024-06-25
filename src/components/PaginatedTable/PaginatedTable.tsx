import {
  Dispatch,
  FunctionComponent,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { Pagination } from "../Pagination/Pagination";
import { Table } from "../Table/Table";
import { compareAsc, compareDesc } from "../../shared/utils/compare";
import { useSearchParams } from "react-router-dom";
import { createPaginatedArray } from "../../shared/utils/array";
import PaginatedTableStyled from "./PaginatedTable.styled";
import {
  IColumnConfig,
  ICustomize,
  IFilter,
} from "../../shared/interfaces/table.interface";

interface IProps {
  pageSize: number;
  items: NumberStringObject[];
  initialItems: NumberStringObject[];
  setItems: Dispatch<SetStateAction<any[]>>;
  setCurrentItems: Dispatch<SetStateAction<any[]>>;
  columnConfigs: IColumnConfig[];
  customize: ICustomize;
  filter: IFilter;
}

interface ISort {
  key: string;
  type: SortTypeEnum;
}

enum SortTypeEnum {
  Asc,
  Desc,
}

export const PaginatedTable: FunctionComponent<IProps> = ({
  items,
  initialItems,
  setItems,
  setCurrentItems,
  pageSize,
  columnConfigs,
  customize,
  filter,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [currentPage, setCurrentPage] = useState(
    Number(searchParams.get("page")) || 1
  );
  const [totalPages, setTotalPages] = useState<number[]>([]);
  const [currentPageItems, setCurrentPageItems] = useState<
    NumberStringObject[]
  >([]);
  const [itemsSeparatedByPageSize, setItemsSeparatedByPageSize] = useState<
    NumberStringObject[][]
  >([[]]);
  const [sort, setSort] = useState<ISort | null>(null);

  useEffect(() => {
    setSearchParams({
      [filter.key]: filter.value.toString(),
      [customize.key]: customize.valueToCompare.toString(),
      page: currentPage.toString(),
    });
  }, [filter.value, customize.valueToCompare, currentPage]);

  useEffect(() => {
    setCurrentPage(Number(searchParams.get("page")) || 1);
  }, [searchParams]);

  const manageSort = (key: string) => {
    setSort({
      key,
      type:
        sort?.key === key && sort.type === SortTypeEnum.Asc
          ? SortTypeEnum.Desc
          : SortTypeEnum.Asc,
    });
  };

  useEffect(() => {
    if (sort) {
      const sortedItems = structuredClone(items).sort(
        (a: NumberStringObject, b: NumberStringObject) =>
          sort.type === SortTypeEnum.Asc
            ? compareAsc(a[sort.key], b[sort.key])
            : compareDesc(a[sort.key], b[sort.key])
      );
      setItems(sortedItems);
    }
  }, [sort]);

  useEffect(() => {
    const filteredItems = initialItems.filter((item: NumberStringObject) =>
      filter.compare(item[filter.key])
    );

    setItems(filteredItems);
  }, [filter.value]);

  useEffect(() => {
    if (items.length === 0) {
      setTotalPages([]);
      setItemsSeparatedByPageSize([[]]);
      return;
    }

    const { itemsSeparatedByPageSize, pageNumbersToArray } =
      createPaginatedArray(items, pageSize);

    setItemsSeparatedByPageSize(itemsSeparatedByPageSize);
    setTotalPages(pageNumbersToArray);
  }, [items, pageSize]);

  useEffect(() => {
    if (!itemsSeparatedByPageSize[currentPage]) {
      setCurrentItems([]);
      setCurrentPageItems([]);
      return;
    }

    setCurrentItems(itemsSeparatedByPageSize[currentPage]);
    setCurrentPageItems(itemsSeparatedByPageSize[currentPage]);
  }, [currentPage, itemsSeparatedByPageSize]);

  return (
    <PaginatedTableStyled>
      <Table
        customize={customize}
        items={currentPageItems}
        columnConfigs={columnConfigs}
        actionOnClickHeader={manageSort}
      />
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </PaginatedTableStyled>
  );
};
