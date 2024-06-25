import { FunctionComponent, useEffect, useState } from "react";
import {
  IColumnConfig,
  ICustomize,
} from "../../shared/interfaces/table.interface";
import { StyledTable, Td, Text, Th, Tr, Wrapper } from "./Table.styled";

interface IProps {
  items: NumberStringObject[];
  columnConfigs: IColumnConfig[];
  customize: ICustomize;
  actionOnClickHeader: (key: string) => void;
}

export const Table: FunctionComponent<IProps> = ({
  items: propItems,
  columnConfigs: columnConfigs,
  customize,
  actionOnClickHeader,
}) => {
  const [items, setItems] = useState<NumberStringObject[]>([]);

  useEffect(() => {
    if (!propItems) {
      return;
    }

    setItems(filterOnlyConfigColumnsItems(columnConfigs, propItems));
  }, [propItems, columnConfigs]);

  return (
    <Wrapper>
      {!items[0] ? (
        <Text>Nenhum item encontrado! :(</Text>
      ) : (
        <StyledTable>
          <thead>
            <Tr>
              {columnConfigs &&
                columnConfigs.map((config, i) => (
                  <Th
                    key={i}
                    style={config.style?.th}
                    onClick={() => actionOnClickHeader(config.key)}
                  >
                    {config.label}
                  </Th>
                ))}
            </Tr>
          </thead>
          <tbody>
            {items?.map((item, i) => (
              <Tr key={i}>
                {Object.values(item).map((value, i) => (
                  <Td
                    key={i}
                    data-label={columnConfigs[i].label}
                    style={{
                      ...columnConfigs[i].style?.td,
                      ...(columnConfigs[i].key === customize.key &&
                      customize.compare(value, customize.valueToCompare)
                        ? customize.style
                        : {}),
                    }}
                  >
                    <>{getValue(value, columnConfigs[i].formatter)}</>
                  </Td>
                ))}
              </Tr>
            ))}
          </tbody>
        </StyledTable>
      )}
    </Wrapper>
  );
};

const getValue = (
  value: string | number,
  formatter: ((value: string | number) => string) | undefined
) => (formatter ? formatter(value) : value);

const filterOnlyConfigColumnsItems = (
  configs: IColumnConfig[],
  items: NumberStringObject[]
) => {
  const keys = configs.map((columnConfig) => columnConfig.key);
  return items.map((propItem) => {
    const item: NumberStringObject = {};
    keys.forEach((key) => {
      item[key] = propItem[key];
    });
    return item;
  });
};
