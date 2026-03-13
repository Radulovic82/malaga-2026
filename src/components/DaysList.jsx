import { DAYS } from '../data/tripData'

function getTodayDayId() {
  const today = new Date().toISOString().split('T')[0]
  const day = DAYS.find(d => d.date === today)
  return day?.id || null
}

export default function DaysList({ onDaySelect, getAccommodation, checked = [] }) {
  const todayDayId = getTodayDayId()

  return (
    <div>
      {/* Trip banner */}
      <div className="trip-header-banner">
        <h2>Andalusia Road Trip 🇪🇸</h2>
        <p>Filip & Iva · March 20–29, 2026</p>
        <div className="trip-stats">
          <div className="trip-stat">
            <div className="trip-stat-value">10</div>
            <div className="trip-stat-label">Days</div>
          </div>
          <div className="trip-stat">
            <div className="trip-stat-value">6</div>
            <div className="trip-stat-label">Cities</div>
          </div>
          <div className="trip-stat">
            <div className="trip-stat-value">🚴</div>
            <div className="trip-stat-label">Cycling</div>
          </div>
          <div className="trip-stat">
            <div className="trip-stat-value">🌊</div>
            <div className="trip-stat-label">Beach</div>
          </div>
        </div>
      </div>

      {/* Weather note */}
      <div className="weather-strip" style={{ margin: '8px 12px', borderRadius: 12, fontSize: 12 }}>
        <span>🌤️</span>
        <span style={{ fontWeight: 600 }}>March weather:</span>
        <span>18–22°C · Some rain possible · Perfect cycling weather!</span>
      </div>

      {/* Day cards */}
      <div className="days-list">
        {DAYS.map(day => {
          const accomm = getAccommodation(day)
          const isToday = day.id === todayDayId
          const hasBike = day.cycling?.available
          const dayReminders = day.reminders ?? []
          const hasReminder = dayReminders.length > 0
          const allBooked = hasReminder && dayReminders.every(r => checked.includes(r.id))

          return (
            <div
              key={day.id}
              className={`day-card${isToday ? ' today' : ''}`}
              onClick={() => onDaySelect(day.id)}
            >
              <div className="day-card-stripe" style={{ background: day.color }} />
              <div className="day-card-content">
                <div className="day-card-header">
                  <div className="day-number" style={{ background: day.color }}>
                    {day.id}
                  </div>
                  <div className="day-card-info">
                    <div className="day-card-label">{day.dayLabel.split('—')[0].trim()}</div>
                    <div className="day-card-title">{day.title}</div>
                  </div>
                  <div className="day-card-emoji">{day.emoji}</div>
                </div>

                <div className="day-card-footer">
                  {accomm ? (
                    <div className="day-card-hotel">
                      <span>🏨</span>
                      <span>{accomm.name}{day.sameAccommodationAs ? ' (same)' : ''}</span>
                    </div>
                  ) : (
                    <div className="day-card-hotel">
                      <span>🏠</span>
                      <span>Continuing stay</span>
                    </div>
                  )}
                  <div className="day-card-tags">
                    {accomm?.amenities?.includes('Breakfast') && (
                      <span className="tag tag-breakfast">🍳 B&B</span>
                    )}
                    {hasBike && (
                      <span className="tag tag-bike">🚴 Cycling</span>
                    )}
                    {hasReminder && (
                      <span className={`tag ${allBooked ? 'tag-booked' : 'tag-reminder'}`}>
                        {allBooked ? '✅ Booked' : '⚠️ Book'}
                      </span>
                    )}
                    {accomm?.amenities?.some(a => a.includes('Spa')) && (
                      <span className="tag" style={{ background: '#f3e8ff', color: '#7c3aed', fontSize: 10, padding: '2px 6px', borderRadius: 10, fontWeight: 500 }}>💆 Spa</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div style={{ padding: '8px 16px 4px', fontSize: 12, color: 'var(--color-text-muted)', textAlign: 'center' }}>
        Tap any day for full details, suggestions & cycling routes
      </div>
    </div>
  )
}
