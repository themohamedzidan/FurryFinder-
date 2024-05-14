import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const VetsMap =() => {
    return (
      <div>
      <div>
          <h2 className='color'>Vets Near Me</h2><br />
      </div>
      <div className='leaflet-container'>
        <MapContainer center={[32.2760, 34.8442]} zoom={15} scrollWheelZoom={true}>
         <TileLayer
         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
         attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'/>
         <Marker position={[32.2760, 34.8442]}>
          <Popup>זלמן שז"ר 10, נתניה <br/>M.r.l.m pet medical centers<br />098827821</Popup>
        </Marker>
        </MapContainer> 
      </div>
    </div>
    );
}
 
export default VetsMap ;