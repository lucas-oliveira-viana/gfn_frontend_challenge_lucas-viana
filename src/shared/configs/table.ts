import { formatNumberToBRLCurrency } from "../formatters";
import { ITableConfig } from "../interfaces/table.interface";

export const STORES_CONFIG: ITableConfig = {
  columns: [
    {
      key: "name",
      label: "Loja",
      style: {
        th: {
          minWidth: "300px",
          textAlign: "left",
        },
        td: {
          textAlign: "left",
          height: "46px",
        },
      },
    },
    {
      key: "revenue",
      label: "Faturamento",
      style: {
        th: {
          minWidth: "150px",
          textAlign: "right",
        },
        td: {
          textAlign: "right",
          height: "46px",
        },
      },
      formatter: (value: string | number) =>
        formatNumberToBRLCurrency(Number(value)),
    },
  ],
  customize: (valueToCompare: string) => ({
    compare: (value: string | number, valueToCompare: string | number) =>
      value < valueToCompare,
    style: {
      color: "darkred",
    },
    valueToCompare: valueToCompare,
    key: "revenue",
  }),
  filter: (valueToCompare: string) => ({
    compare: (value: string | number) =>
      value.toString().toLowerCase().includes(valueToCompare?.toLowerCase()),
    value: valueToCompare,
    key: "name",
  }),
};
