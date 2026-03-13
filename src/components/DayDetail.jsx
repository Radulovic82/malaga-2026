import { useState } from 'react'

function DrivingCard({ driving }) {
  if (!driving) return null
  return (
    <div style={{
      margin: '0 12px 12px',
      borderRadius: 12,
      border: '1px solid var(--color-border-light)',
      background: 'var(--color-surface)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-sm)'
    }}>
      <div style={{
        display: 'flex', alignItems: 'center', gap: 10,
        padding: '12px 14px',
        background: driving.optional ? '#f5f5f5' : '#f0f4ff',
        borderBottom: '1px solid var(--color-border-light)'
      }}>
        <span style={{ fontSize: 20 }}>🚗</span>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--color-text)' }}>
            Driving today{driving.optional ? ' (optional)' : ''}
          </div>
          <div style={{ fontSize: 12, color: 'var(--color-text-muted)', marginTop: 1 }}>
            {driving.totalKm} km · {driving.totalTime}
          </div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: 18, fontWeight: 800, color: '#3730a3' }}>{driving.totalKm} km</div>
        </div>
      </div>
      {driving.segments.map((s, i) => (
        <div key={i} style={{
          display: 'flex', alignItems: 'center', gap: 8,
          padding: '8px 14px',
          borderBottom: i < driving.segments.length - 1 ? '1px solid var(--color-border-light)' : 'none',
          fontSize: 12
        }}>
          <span style={{ color: 'var(--color-text-muted)', flexShrink: 0 }}>▸</span>
          <span style={{ flex: 1, color: 'var(--color-text)' }}>{s.from} → {s.to}</span>
          <span style={{ color: 'var(--color-text-muted)', whiteSpace: 'nowrap' }}>{s.km} km</span>
          <span style={{
            background: '#e8f0ff', color: '#3730a3',
            padding: '2px 7px', borderRadius: 8, fontWeight: 600, flexShrink: 0
          }}>{s.time}</span>
        </div>
      ))}
    </div>
  )
}

function HotelCard({ accomm, isSameAsDay }) {
  if (!accomm) return null
  return (
    <div className="hotel-card">
      <div className="hotel-card-header">
        <div className="hotel-icon">🏨</div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div className="hotel-name">{accomm.name}</div>
          <div className="hotel-location">📍 {accomm.location}</div>
        </div>
        {isSameAsDay && (
          <span style={{ fontSize: 10, background: '#e8f0ff', color: '#3730a3', padding: '3px 7px', borderRadius: 10, fontWeight: 600, flexShrink: 0 }}>
            Same hotel
          </span>
        )}
      </div>
      <div className="hotel-details">
        <div className="hotel-row">
          <div className="hotel-row-icon">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
            </svg>
          </div>
          <div className="hotel-row-content">
            <div className="hotel-row-label">Check-in / Check-out</div>
            <div className="hotel-row-value">In: {accomm.checkIn} · Out: {accomm.checkOut}</div>
          </div>
        </div>
        <div className="hotel-row">
          <div className="hotel-row-icon">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
              <circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
            </svg>
          </div>
          <div className="hotel-row-content">
            <div className="hotel-row-label">Parking</div>
            <div className="hotel-row-value">
              {accomm.parking.pricePerDay === 0 ? 'FREE' : accomm.parking.pricePerDay ? `${accomm.parking.pricePerDay}€/day${accomm.parking.reserved ? ' · Reserved' : ''}` : 'Included'}
            </div>
            <div style={{ fontSize: 12, color: 'var(--color-text-muted)', marginTop: 2, lineHeight: 1.4 }}>
              {accomm.parking.notes}
            </div>
          </div>
        </div>
      </div>
      {accomm.amenities?.length > 0 && (
        <div className="hotel-amenities">
          {accomm.amenities.map(a => <span key={a} className="badge badge-amenity">✓ {a}</span>)}
        </div>
      )}
      {accomm.highlights?.length > 0 && (
        <div className="hotel-highlights">
          {accomm.highlights.map(h => (
            <div key={h} className="hotel-highlight-item">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              {h}
            </div>
          ))}
        </div>
      )}
      {accomm.cost && !isSameAsDay && (
        <div className="hotel-price">
          <span className="hotel-price-label">Night rate</span>
          <span className="hotel-price-value">€{accomm.cost.toFixed(2)}</span>
        </div>
      )}
      {accomm.mapsQuery && (
        <a href={`https://maps.google.com/?q=${accomm.mapsQuery}`} target="_blank" rel="noopener noreferrer" className="maps-btn">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/>
            <line x1="9" y1="3" x2="9" y2="18"/><line x1="15" y1="6" x2="15" y2="21"/>
          </svg>
          Open in Google Maps
        </a>
      )}
    </div>
  )
}

function MapsPin() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
    </svg>
  )
}

function AttractionsTab({ attractions }) {
  return (
    <div>
      <div className="section-title">Things to See & Do</div>
      <div style={{ padding: '0 16px' }}>
        {attractions.map((a, i) => (
          <div key={i} className="attraction-item">
            <div className="attraction-header">
              <span className="attraction-emoji">{a.emoji}</span>
              <span className="attraction-name">{a.name}</span>
            </div>
            <div className="attraction-badges">
              <span className="badge badge-category">{a.category}</span>
              {a.mustBook && <span className="badge badge-booking">🎫 Book ahead</span>}
              {a.duration && (
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 3, fontSize: 11, fontWeight: 600, color: '#0891b2', background: '#e0f2fe', padding: '3px 8px', borderRadius: 20 }}>
                  ⏱ {a.duration}
                </span>
              )}
            </div>
            <div className="attraction-desc">{a.description}</div>
            {a.bookingTip && (
              <div className="attraction-tip">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 1, color: 'var(--color-primary)' }}>
                  <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                </svg>
                <span className="attraction-tip-text">{a.bookingTip}</span>
              </div>
            )}
            {a.mapsLink && (
              <a href={a.mapsLink} target="_blank" rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 12, color: 'var(--color-ocean)', fontWeight: 600, marginTop: 6, marginLeft: 30, textDecoration: 'none' }}>
                <MapsPin /> View on Google Maps
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

function FoodTab({ food }) {
  return (
    <div>
      <div className="section-title">Where & What to Eat</div>
      <div style={{ padding: '0 16px' }}>
        {food.map((f, i) => (
          <div key={i} className="food-item">
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 8, marginBottom: 2 }}>
              <div className="food-name">{f.name}</div>
              {f.duration && (
                <span style={{ fontSize: 11, fontWeight: 600, color: '#0891b2', background: '#e0f2fe', padding: '2px 7px', borderRadius: 20, flexShrink: 0, whiteSpace: 'nowrap' }}>
                  ⏱ {f.duration}
                </span>
              )}
            </div>
            <div className="food-type">{f.type}</div>
            <div className="food-desc">{f.description}</div>
            {f.mapsLink && (
              <a href={f.mapsLink} target="_blank" rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 12, color: 'var(--color-ocean)', fontWeight: 600, marginTop: 6, textDecoration: 'none' }}>
                <MapsPin /> View on Google Maps
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

function DayReminders({ reminders }) {
  if (!reminders?.length) return null
  return (
    <div style={{ padding: '0 12px', marginTop: 8 }}>
      {reminders.map(r => (
        <div key={r.id} style={{
          display: 'flex', alignItems: 'flex-start', gap: 10,
          background: r.urgent ? 'var(--color-urgent-bg)' : 'var(--color-warning-bg)',
          border: `1px solid ${r.urgent ? 'var(--color-urgent)' : 'var(--color-border)'}`,
          borderRadius: 12, padding: '10px 12px', marginBottom: 8
        }}>
          <span style={{ fontSize: 16, flexShrink: 0 }}>{r.urgent ? '⚠️' : '📌'}</span>
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--color-text)', marginBottom: 2 }}>{r.text}</div>
            <div style={{ fontSize: 12, color: 'var(--color-text-muted)', lineHeight: 1.4 }}>{r.details}</div>
            {r.link && (
              <a href={r.link} target="_blank" rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 12, color: 'var(--color-ocean)', fontWeight: 600, marginTop: 4, textDecoration: 'none' }}>
                Book now →
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default function DayDetail({ day, getAccommodation }) {
  const [activeTab, setActiveTab] = useState('info')
  const accomm = getAccommodation(day)
  const isSameAs = !!day.sameAccommodationAs

  const tabs = [
    { id: 'info', label: '🏨 Stay' },
    { id: 'see', label: '🗺️ See' },
    { id: 'eat', label: '🍽️ Eat' }
  ]

  return (
    <div className="day-detail">
      <div className="day-detail-hero" style={{ background: `linear-gradient(135deg, ${day.color} 0%, ${day.color}cc 100%)` }}>
        <h2>{day.title}</h2>
        <div className="day-date">{day.dayLabel}</div>
        {day.route?.length > 0 && (
          <div className="day-route">
            {day.route.map((stop, i) => <span key={i} className="route-stop">{stop}</span>)}
          </div>
        )}
      </div>

      {day.reminders?.length > 0 && (
        <div style={{ paddingTop: 10 }}>
          <DayReminders reminders={day.reminders} />
        </div>
      )}

      <div className="detail-tabs">
        {tabs.map(tab => (
          <button key={tab.id} className={`detail-tab-btn${activeTab === tab.id ? ' active' : ''}`} onClick={() => setActiveTab(tab.id)}>
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === 'info' && (
        <div style={{ paddingTop: 8 }}>
          <DrivingCard driving={day.driving} />
          {isSameAs && (
            <div className="same-accomm-note">
              <span>🏠</span>
              <span>Same accommodation as Day {day.sameAccommodationAs} — no check-in today</span>
            </div>
          )}
          <HotelCard accomm={accomm} isSameAsDay={isSameAs} />
        </div>
      )}

      {activeTab === 'see' && <AttractionsTab attractions={day.attractions} />}
      {activeTab === 'eat' && <FoodTab food={day.food} />}

      <div style={{ height: 16 }} />
    </div>
  )
}
