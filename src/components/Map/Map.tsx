import { LatLngLiteral, Icon } from "leaflet";
import { FunctionComponent } from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import MapStyled from "./Map.styled";
import "leaflet/dist/leaflet.css";

interface IProps {
  params: {
    coordinate: LatLngLiteral;
    marker: string;
  }[];
}

const DEFAULT_LAT_LNG_CENTER = { lat: -23.568767, lng: -46.649907 };

export const Map: FunctionComponent<IProps> = ({ params }) => (
  <>
    <MapStyled>
      <MapContainer
        center={params[0] ? params[0].coordinate : DEFAULT_LAT_LNG_CENTER}
        zoom={12}
        scrollWheelZoom={true}
        style={{ height: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {params?.map((param, i) => (
          <Marker
            key={i}
            position={param.coordinate}
            icon={
              new Icon({
                iconUrl: param.marker,
                iconSize: [24, 24],
              })
            }
          ></Marker>
        ))}
      </MapContainer>
    </MapStyled>
  </>
);
