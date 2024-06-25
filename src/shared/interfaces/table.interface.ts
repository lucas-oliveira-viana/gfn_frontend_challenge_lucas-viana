import { CSSProperties } from "styled-components";

export interface ITableConfig {
  columns: IColumnConfig[];
  customize: (valueToCompare: string) => ICustomize;
  filter: (valueToCompare: string) => IFilter;
}

export interface ICustomize {
  key: string;
  compare: (value: number | string, valueToCompare: number | string) => boolean;
  valueToCompare: string | number;
  style: CSSProperties;
}

export interface IFilter {
  key: string;
  compare: (value: string | number) => boolean;
  value: string | number;
}
export interface IColumnConfig {
  key: string;
  label: string;
  style?: ITableStyle;
  formatter?: (value: string | number) => string;
}

interface ITableStyle {
  th?: CSSProperties;
  td?: CSSProperties;
}
