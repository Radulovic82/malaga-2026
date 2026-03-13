import { useEffect } from 'react'
import { MapContainer, TileLayer, Polyline, Marker, Popup, useMap } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { DAYS } from '../data/tripData'

// Unique overnight locations (deduplicate same coords)
const uniqueStops = DAYS.reduce((acc, day) => {
  const key = `${day.coordinates.lat},${day.coordinates.lng}`
  if (!acc.find(s => `${s.coordinates.lat},${s.coordinates.lng}` === key)) {
    acc.push(day)
  }
  return acc
}, [])

const routeCoords = uniqueStops.map(d => [d.coordinates.lat, d.coordinates.lng])

function createMarkerIcon(color, dayId) {
  return L.divIcon({
    className: '',
    html: `
      <div style="
        width:34px;height:34px;
        background:${color};
        border-radius:50% 50% 50% 0;
        transform:rotate(-45deg);
        box-shadow:0 3px 10px rgba(0,0,0,0.3);
        border:2.5px solid white;
        display:flex;align-items:center;justify-content:center;
      ">
        <span style="
          transform:rotate(45deg);
          color:white;font-size:11px;font-weight:700;
          font-family:Inter,system-ui,sans-serif;
        ">${dayId}</span>
      </div>
    `,
    iconSize: [34, 34],
    iconAnchor: [17, 34],
    popupAnchor: [0, -36]
  })
}

function BoundsController({ isActive }) {
  const map = useMap()
  useEffect(() => {
    // Re-fit bounds whenever the map tab becomes active (handles display:none → visible)
    if (isActive) {
      map.invalidateSize()
      map.fitBounds(L.latLngBounds(routeCoords), { padding: [60, 60] })
    }
  }, [isActive, map])
  return null
}

// Calls invalidateSize whenever the map tab becomes visible,
// fixing the 0×0 size bug that happens when Leaflet renders inside display:none
function MapResizer({ isActive }) {
  const map = useMap()
  useEffect(() => {
    if (isActive) {
      map.invalidateSize()
    }
  }, [isActive, map])
  return null
}

const initialBounds = L.latLngBounds(routeCoords)

export default function MapView({ onDaySelect, selectedDayId, isActive }) {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <MapContainer
        bounds={initialBounds}
        boundsOptions={{ padding: [60, 60] }}
        style={{ width: '100%', height: '100%', minHeight: 300 }}
        zoomControl={false}
        tap={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <BoundsController isActive={isActive} />
        <MapResizer isActive={isActive} />

        {/* Route polyline */}
        <Polyline
          positions={routeCoords}
          pathOptions={{ color: '#c1440e', weight: 3, opacity: 0.65, dashArray: '8,6' }}
        />

        {/* Day markers */}
        {uniqueStops.map(day => (
          <Marker
            key={day.id}
            position={[day.coordinates.lat, day.coordinates.lng]}
            icon={createMarkerIcon(day.color, day.id)}
          >
            <Popup>
              <div style={{ fontFamily: 'Inter, system-ui, sans-serif', minWidth: 180 }}>
                <div style={{ fontWeight: 700, fontSize: 14, color: '#1a1a2e', marginBottom: 4 }}>
                  {day.emoji} Day {day.id}
                </div>
                <div style={{ fontSize: 13, color: '#6b6b7a', marginBottom: 8, lineHeight: 1.4 }}>
                  {day.title}
                </div>
                {day.accommodation && (
                  <div style={{ fontSize: 12, color: '#1a1a2e', marginBottom: 8 }}>
                    🏨 {day.accommodation.name}
                  </div>
                )}
                <button
                  onClick={() => onDaySelect(day.id)}
                  style={{
                    background: '#c1440e', color: 'white', border: 'none',
                    borderRadius: 8, padding: '6px 12px', fontSize: 12,
                    fontWeight: 600, cursor: 'pointer', width: '100%'
                  }}
                >
                  View day details →
                </button>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* Legend */}
      <div style={{
        position: 'absolute', bottom: 12, left: 12,
        background: 'white', borderRadius: 10, padding: '8px 12px',
        boxShadow: '0 2px 12px rgba(0,0,0,0.15)', zIndex: 1000,
        fontSize: 11, color: '#6b6b7a', pointerEvents: 'none'
      }}>
        <div style={{ fontWeight: 700, marginBottom: 4, color: '#1a1a2e' }}>📍 Overnight stays</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <div style={{ width: 20, height: 2, background: '#c1440e', borderRadius: 1, borderTop: '1.5px dashed #c1440e' }} />
          Route (10 days)
        </div>
      </div>
    </div>
  )
}
