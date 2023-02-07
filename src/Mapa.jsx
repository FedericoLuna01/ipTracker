import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import 'leaflet/dist/leaflet.css';

export const Mapa = ({location}) => {
  const center = location ? [location.lat, location.lng] : [0, 0]
  return (
    <div>
      <MapContainer
        center={ center }
        zoom={1}
        scrollWheelZoom={true}
        style={{ width: "100%", height: "60vh" }}
      >
        <TileLayer
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {
          location && <Marker position={[location.lat, location.lng] }></Marker>
        }
      </MapContainer>
    </div>
  )
}
