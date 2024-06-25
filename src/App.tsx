import { useState } from "react";
import { PaginatedTable } from "./components/PaginatedTable/PaginatedTable";
import { Map } from "./components/Map/Map";
import { FilterStores as useFilterStores } from "./hooks/FilterStores/FilterStores";
import { Header } from "./components/Header/Header";
import { STORES_CONFIG as STORES_TABLE_CONFIG } from "./shared/configs/table";
import { Stores, Content, Main } from "./App.styled";
import { IStore } from "./shared/types/store.type";
import GlobalStyle from "./GlobalStyle.styled";
import data from "./shared/assets/data/data.json";
import markerRed from "./shared/assets/images/marker-red.png";
import markerBlue from "./shared/assets/images/marker-blue.png";

const initialStores = data.stores;

export const App = () => {
  const [stores, setStores] = useState<IStore[]>(initialStores);
  const [currentPageStores, setCurrentPageStores] = useState<IStore[]>([]);
  const { state: filterStoresState, element: filterStoresElement } =
    useFilterStores();

  const storesToCoordinates = currentPageStores.map((store) => ({
    coordinate: { lat: store.latitude, lng: store.longitude },
    marker:
      store.revenue < Number(filterStoresState.billingSearch)
        ? markerRed
        : markerBlue,
  }));

  return (
    <>
      <GlobalStyle />
      <Header />
      <Main>
        {filterStoresElement}
        <Content>
          <Stores>
            <PaginatedTable
              initialItems={initialStores}
              items={stores}
              setItems={setStores}
              setCurrentItems={setCurrentPageStores}
              columnConfigs={STORES_TABLE_CONFIG.columns}
              pageSize={10}
              customize={STORES_TABLE_CONFIG.customize(
                filterStoresState.billingSearch
              )}
              filter={STORES_TABLE_CONFIG.filter(filterStoresState.storeSearch)}
            />
          </Stores>
          <Map params={storesToCoordinates} />
        </Content>
      </Main>
    </>
  );
};

export default App;
