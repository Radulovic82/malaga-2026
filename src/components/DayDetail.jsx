import { useState } from 'react'
import { DAYS } from '../data/tripData'

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
          <span style={{
            fontSize: 10, background: '#e8f0ff', color: '#3730a3',
            padding: '3px 7px', borderRadius: 10, fontWeight: 600, flexShrink: 0
          }}>Same hotel</span>
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
              {accomm.parking.pricePerDay === 0
                ? 'FREE'
                : accomm.parking.pricePerDay
                  ? `${accomm.parking.pricePerDay}€/day${accomm.parking.reserved ? ' · Reserved' : ''}`
                  : 'Included'}
            </div>
            <div style={{ fontSize: 12, color: 'var(--color-text-muted)', marginTop: 2, lineHeight: 1.4 }}>
              {accomm.parking.notes}
            </div>
          </div>
        </div>
      </div>

      {/* Amenities */}
      {accomm.amenities?.length > 0 && (
        <div className="hotel-amenities">
          {accomm.amenities.map(a => (
            <span key={a} className="badge badge-amenity">✓ {a}</span>
          ))}
        </div>
      )}

      {/* Highlights */}
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

      {/* Price */}
      {accomm.cost && !isSameAsDay && (
        <div className="hotel-price">
          <span className="hotel-price-label">Night rate</span>
          <span className="hotel-price-value">€{accomm.cost.toFixed(2)}</span>
        </div>
      )}

      {/* Maps button */}
      {accomm.mapsQuery && (
        <a
          href={`https://maps.google.com/?q=${accomm.mapsQuery}`}
          target="_blank"
          rel="noopener noreferrer"
          className="maps-btn"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/>
            <line x1="9" y1="3" x2="9" y2="18"/>
            <line x1="15" y1="6" x2="15" y2="21"/>
          </svg>
          Open in Google Maps
        </a>
      )}
    </div>
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
              {a.mustBook && (
                <span className="badge badge-booking">🎫 Book ahead</span>
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
            <div className="food-type">{f.type}</div>
            <div className="food-name">{f.name}</div>
            <div className="food-desc">{f.description}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function CyclingTab({ cycling }) {
  if (!cycling?.available || !cycling.routes?.length) {
    return (
      <div style={{ padding: '24px 16px', textAlign: 'center', color: 'var(--color-text-muted)' }}>
        🚴 No specific cycling routes for this day
      </div>
    )
  }

  const difficultyColors = {
    easy: { bg: '#e8f5ee', color: '#2d7a4f' },
    moderate: { bg: '#fff3e0', color: '#e65100' },
    hard: { bg: '#fce4ec', color: '#c62828' }
  }

  return (
    <div>
      <div className="section-title">Cycling Routes</div>
      <div style={{ padding: '0 16px' }}>
        {cycling.routes.map((r, i) => {
          const diff = difficultyColors[r.difficulty] || difficultyColors.easy
          return (
            <div key={i} className="cycling-route-card">
              <div className="cycling-route-header">
                <div className="cycling-route-name">🚴 {r.name}</div>
                <span style={{
                  fontSize: 11, fontWeight: 700, padding: '3px 8px',
                  borderRadius: 20, background: diff.bg, color: diff.color
                }}>
                  {r.difficulty.charAt(0).toUpperCase() + r.difficulty.slice(1)}
                </span>
              </div>
              <div className="cycling-route-meta">
                <span className="cycling-distance">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                  </svg>
                  {r.distance}
                </span>
                <span style={{
                  fontSize: 11, background: 'var(--color-surface-elevated)',
                  border: '1px solid var(--color-border)', color: 'var(--color-text-muted)',
                  padding: '2px 7px', borderRadius: 10, fontWeight: 500
                }}>
                  {r.tag}
                </span>
              </div>
              <div className="cycling-route-desc">{r.description}</div>
            </div>
          )
        })}
      </div>
      {cycling.rentalNote && (
        <div className="cycling-rental">
          <span>🔑</span>
          <span className="cycling-rental-text"><strong>Rental info:</strong> {cycling.rentalNote}</span>
        </div>
      )}
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
            <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--color-text)', marginBottom: 2 }}>
              {r.text}
            </div>
            <div style={{ fontSize: 12, color: 'var(--color-text-muted)', lineHeight: 1.4 }}>
              {r.details}
            </div>
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
    { id: 'info', label: '🏨 Stay', icon: '🏨' },
    { id: 'see', label: '🗺️ See', icon: '🗺️' },
    { id: 'eat', label: '🍽️ Eat', icon: '🍽️' },
    { id: 'cycle', label: '🚴 Ride', icon: '🚴' }
  ]

  return (
    <div className="day-detail">
      {/* Hero */}
      <div className="day-detail-hero" style={{ background: `linear-gradient(135deg, ${day.color} 0%, ${day.color}cc 100%)` }}>
        <h2>{day.title}</h2>
        <div className="day-date">{day.dayLabel}</div>
        {day.route?.length > 0 && (
          <div className="day-route">
            {day.route.map((stop, i) => (
              <span key={i} className="route-stop">{stop}</span>
            ))}
          </div>
        )}
      </div>

      {/* Day reminders */}
      {day.reminders?.length > 0 && (
        <div style={{ paddingTop: 10 }}>
          <DayReminders reminders={day.reminders} />
        </div>
      )}

      {/* Tab bar */}
      <div className="detail-tabs">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`detail-tab-btn${activeTab === tab.id ? ' active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      {activeTab === 'info' && (
        <div style={{ paddingTop: 8 }}>
          {isSameAs && (
            <div className="same-accomm-note">
              <span>🏠</span>
              <span>Same accommodation as Day {day.sameAccommodationAs} — no check-in today</span>
            </div>
          )}
          <HotelCard accomm={accomm} isSameAsDay={isSameAs} />
        </div>
      )}

      {activeTab === 'see' && (
        <AttractionsTab attractions={day.attractions} />
      )}

      {activeTab === 'eat' && (
        <FoodTab food={day.food} />
      )}

      {activeTab === 'cycle' && (
        <CyclingTab cycling={day.cycling} />
      )}

      <div style={{ height: 16 }} />
    </div>
  )
}
