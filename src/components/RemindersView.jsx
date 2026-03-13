import { useState, useEffect } from 'react'
import { doc, onSnapshot, setDoc } from 'firebase/firestore'
import { db } from '../firebase'
import { TRIP_REMINDERS, DAYS } from '../data/tripData'

const CHECKLIST_REF = doc(db, 'bookings', 'checklist')

function getDayLabel(dayId) {
  const day = DAYS.find(d => d.id === dayId)
  return day ? `Day ${day.id} · ${day.date.slice(5).replace('-', '/')}` : ''
}

export default function RemindersView() {
  const [checked, setChecked] = useState([])

  useEffect(() => {
    const unsubscribe = onSnapshot(CHECKLIST_REF, snapshot => {
      setChecked(snapshot.exists() ? (snapshot.data().checked ?? []) : [])
    })
    return unsubscribe
  }, [])

  function toggleCheck(id) {
    const next = checked.includes(id)
      ? checked.filter(x => x !== id)
      : [...checked, id]
    setDoc(CHECKLIST_REF, { checked: next })
  }

  const urgent = TRIP_REMINDERS.filter(r => r.urgent)
  const normal = TRIP_REMINDERS.filter(r => !r.urgent)
  const doneCount = TRIP_REMINDERS.filter(r => checked.includes(r.id)).length

  return (
    <div>
      {/* Progress header */}
      <div style={{
        background: 'var(--color-primary)',
        color: 'white',
        padding: '16px',
        margin: '12px',
        borderRadius: 16
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10 }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: 16 }}>Trip Bookings Checklist</div>
            <div style={{ fontSize: 12, opacity: 0.8, marginTop: 2 }}>
              {doneCount} of {TRIP_REMINDERS.length} completed
            </div>
          </div>
          <div style={{ fontSize: 24 }}>
            {doneCount === TRIP_REMINDERS.length ? '🎉' : '📋'}
          </div>
        </div>
        {/* Progress bar */}
        <div style={{ background: 'rgba(255,255,255,0.3)', borderRadius: 4, height: 6 }}>
          <div style={{
            background: 'white',
            height: '100%',
            borderRadius: 4,
            width: `${(doneCount / TRIP_REMINDERS.length) * 100}%`,
            transition: 'width 0.4s ease'
          }} />
        </div>
      </div>

      {/* Urgent section */}
      <div className="reminders-section-header">
        <span>⚠️</span>
        <span>Book ASAP — Limited Availability</span>
      </div>

      <div className="reminders-list" style={{ paddingTop: 0 }}>
        {urgent.map(r => {
          const isChecked = checked.includes(r.id)
          return (
            <div key={r.id} className={`reminder-card${r.urgent ? ' urgent' : ''}`}>
              <div className="reminder-card-inner">
                <div
                  className={`reminder-check${isChecked ? ' checked' : ' urgent-check'}`}
                  onClick={() => toggleCheck(r.id)}
                  role="checkbox"
                  aria-checked={isChecked}
                  tabIndex={0}
                  onKeyDown={e => e.key === 'Enter' && toggleCheck(r.id)}
                >
                  {isChecked && (
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  )}
                </div>
                <div className="reminder-content">
                  <div className={`reminder-text${isChecked ? ' checked-text' : ''}`}>
                    {r.text}
                  </div>
                  <div className="reminder-details">{r.details}</div>
                  <div className="reminder-meta">
                    {r.day && (
                      <span className="reminder-day-badge">{getDayLabel(r.day)}</span>
                    )}
                    {!isChecked && r.urgent && (
                      <span className="urgent-label">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
                        </svg>
                        Urgent
                      </span>
                    )}
                    {r.link && !isChecked && (
                      <a
                        href={r.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="reminder-link"
                        onClick={e => e.stopPropagation()}
                      >
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                        </svg>
                        Book online
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Regular reminders */}
      <div className="reminders-section-header">
        <span>📌</span>
        <span>Other Reminders & Actions</span>
      </div>

      <div className="reminders-list" style={{ paddingTop: 0 }}>
        {normal.map(r => {
          const isChecked = checked.includes(r.id)
          return (
            <div key={r.id} className="reminder-card">
              <div className="reminder-card-inner">
                <div
                  className={`reminder-check${isChecked ? ' checked' : ''}`}
                  onClick={() => toggleCheck(r.id)}
                  role="checkbox"
                  aria-checked={isChecked}
                  tabIndex={0}
                  onKeyDown={e => e.key === 'Enter' && toggleCheck(r.id)}
                >
                  {isChecked && (
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  )}
                </div>
                <div className="reminder-content">
                  <div className={`reminder-text${isChecked ? ' checked-text' : ''}`}>
                    {r.text}
                  </div>
                  <div className="reminder-details">{r.details}</div>
                  <div className="reminder-meta">
                    {r.day && (
                      <span className="reminder-day-badge">{getDayLabel(r.day)}</span>
                    )}
                    {r.link && !isChecked && (
                      <a
                        href={r.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="reminder-link"
                        onClick={e => e.stopPropagation()}
                      >
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                        </svg>
                        Open link
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {doneCount === TRIP_REMINDERS.length && (
        <div style={{
          textAlign: 'center', padding: '20px 16px',
          fontSize: 14, color: 'var(--color-success)', fontWeight: 600
        }}>
          🎉 All done! You're ready for the trip!
        </div>
      )}

      <div style={{ padding: '4px 16px 8px', fontSize: 11, color: 'var(--color-text-muted)', textAlign: 'center' }}>
        Tap any item to mark as done · Synced in real time
      </div>
    </div>
  )
}
