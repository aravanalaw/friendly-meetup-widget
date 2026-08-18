import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import type { Office } from "@/lib/site";

/* Gold brand pin as an inline SVG divIcon, so no marker image assets are needed. */
const goldPin = L.divIcon({
  className: "",
  html: `<svg width="34" height="46" viewBox="0 0 34 46" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M17 0C7.6 0 0 7.6 0 17c0 12.75 17 29 17 29s17-16.25 17-29C34 7.6 26.4 0 17 0z" fill="#e8c34e" stroke="#8a6400" stroke-width="1"/><circle cx="17" cy="17" r="6.5" fill="#160507"/></svg>`,
  iconSize: [34, 46],
  iconAnchor: [17, 46],
  popupAnchor: [0, -44],
});

export default function OfficeMapInner({ office }: { office: Office }) {
  return (
    <MapContainer
      center={[office.lat, office.lng]}
      zoom={15}
      scrollWheelZoom={false}
      className="h-full w-full"
      style={{ background: "#160507" }}
    >
      {/* Dark basemap to match the site theme */}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      />
      <Marker position={[office.lat, office.lng]} icon={goldPin}>
        <Popup>
          <strong>{office.label}</strong>
          <br />
          {office.entity}
          <br />
          {office.street}
          <br />
          {office.city}, {office.state} {office.zip}
          <br />
          <a href={office.mapsUrl} target="_blank" rel="noopener noreferrer">
            Get directions →
          </a>
        </Popup>
      </Marker>
    </MapContainer>
  );
}
