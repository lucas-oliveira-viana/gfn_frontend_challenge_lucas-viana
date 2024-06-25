import { useEffect, useState } from "react";
import { Input } from "../../components/Input/Input";
import {
  BillingLabel,
  BillingWrapper,
  Filters,
  FiltersInputs,
} from "./FilterStores.styled";
import {
  formatBRLCurrencyToNumber,
  formatNumberToBRLCurrency,
} from "../../shared/formatters";
import SearchIconSVG from "../../shared/assets/images/search.svg";
import { useSearchParams } from "react-router-dom";

interface IReturn {
  element: JSX.Element;
  state: { billingSearch: string; storeSearch: string };
}

export const FilterStores = (): IReturn => {
  const [searchParams] = useSearchParams();

  const [storeSearch, setStoreSearch] = useState(
    searchParams.get("name") || ""
  );
  const [billingSearch, setBillingSearch] = useState(
    searchParams.get("revenue") || String(15000)
  );

  useEffect(() => {
    setStoreSearch(searchParams.get("name") || "");
    setBillingSearch(searchParams.get("revenue") || String(15000));
  }, [searchParams]);

  return {
    element: (
      <Filters>
        <FiltersInputs>
          <Input
            initialValue={storeSearch}
            placeholder={"Pesquisa"}
            setValue={setStoreSearch}
            width={"100%"}
            icon={SearchIconSVG}
          />
          <BillingWrapper>
            <BillingLabel>Faturamento mínimo esperado</BillingLabel>
            <Input
              initialValue={billingSearch}
              setValue={setBillingSearch}
              width={"315px"}
              mask={(value) => formatNumberToBRLCurrency(Number(value))}
              unmask={(value) => formatBRLCurrencyToNumber(value)}
              onClick={(event) => {
                const target = event.target as HTMLInputElement;
                if (!target.selectionStart || target.selectionStart < 3) {
                  target.selectionStart = 3;
                }
              }}
              onlyNumbers={true}
              onKeyUp={(event) => {
                const target = event.target as HTMLInputElement;

                if (!target.selectionStart) {
                  return;
                }
                const commaPosition = target.value.indexOf(",");

                if (
                  target.selectionStart < commaPosition ||
                  target.selectionStart === target.value.length
                ) {
                  target.selectionStart = commaPosition;
                  target.selectionEnd = commaPosition;
                }
              }}
              onFocus={(event) => {
                event.target.setSelectionRange(3, event.target.value.length);
              }}
            />
          </BillingWrapper>
        </FiltersInputs>
      </Filters>
    ),
    state: { billingSearch, storeSearch },
  };
};
