import { useState, useEffect } from 'react'
import { doc, onSnapshot, setDoc } from 'firebase/firestore'
import { db } from './firebase'
import { DAYS, TRIP_REMINDERS } from './data/tripData'
import MapView from './components/MapView'
import DaysList from './components/DaysList'
import DayDetail from './components/DayDetail'
import RemindersView from './components/RemindersView'
import BudgetView from './components/BudgetView'
import BottomNav from './components/BottomNav'

const CHECKLIST_REF = doc(db, 'bookings', 'checklist')

function getAccommodation(day) {
  if (day.accommodation) return day.accommodation
  if (day.sameAccommodationAs) {
    const refDay = DAYS.find(d => d.id === day.sameAccommodationAs)
    return refDay?.accommodation || null
  }
  return null
}

function DesktopPlaceholder() {
  return (
    <div className="desktop-placeholder">
      <div className="desktop-placeholder-emoji">🗺️</div>
      <h3>Select a day</h3>
      <p>Click any day from the list to see full details — hotel info, attractions, food recommendations, and more.</p>
    </div>
  )
}

export default function App() {
  const [activeTab, setActiveTab] = useState('days')
  const [selectedDayId, setSelectedDayId] = useState(null)
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

  const urgentCount = TRIP_REMINDERS.filter(r => r.urgent && !checked.includes(r.id)).length
  const selectedDay = selectedDayId ? DAYS.find(d => d.id === selectedDayId) : null

  function handleDaySelect(dayId) {
    setSelectedDayId(dayId)
    setActiveTab('days')
  }

  function handleBack() {
    setSelectedDayId(null)
  }

  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="app-header-inner">
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            {selectedDay && activeTab === 'days' && (
              <button className="back-btn mobile-only" onClick={handleBack} aria-label="Back">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
            )}
            <div>
              <h1>
                {activeTab === 'map' ? '🗺️ Trip Map'
                  : activeTab === 'reminders' ? '📋 Bookings & Reminders'
                  : activeTab === 'budget' ? '💶 Budget'
                  : '🌊 Málaga 2026'}
              </h1>
              <div className="subtitle">Mar 20–29, 2026 · Andalusia, Spain</div>
            </div>
          </div>
          <span style={{ fontSize: 22 }}>🇪🇸</span>
        </div>
      </header>

      {/* Nav: bottom on mobile, top on desktop (CSS handles repositioning via order) */}
      <BottomNav
        activeTab={activeTab}
        onTabChange={(tab) => {
          setActiveTab(tab)
          if (tab !== 'days') setSelectedDayId(null)
        }}
        urgentCount={urgentCount}
      />

      <div className="main-content">

        {/* MAP */}
        <div className={`tab-view map-tab${activeTab !== 'map' ? ' hidden' : ''}`}>
          <MapView onDaySelect={handleDaySelect} selectedDayId={selectedDayId} isActive={activeTab === 'map'} />
        </div>

        {/* DAYS
            CSS class "has-detail" drives mobile show/hide.
            On desktop, both panels are always visible via CSS grid (no inline styles needed). */}
        <div className={`tab-view days-tab${activeTab !== 'days' ? ' hidden' : ''}`}>
          <div className={`days-split${selectedDay ? ' has-detail' : ''}`}>

            <div className="days-split-list">
              <DaysList
                onDaySelect={handleDaySelect}
                selectedDayId={selectedDayId}
                getAccommodation={getAccommodation}
                checked={checked}
              />
            </div>

            <div className="days-split-detail">
              {selectedDay ? (
                <>
                  <button className="mobile-back-inline" onClick={handleBack}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                    All days
                  </button>
                  <DayDetail day={selectedDay} getAccommodation={getAccommodation} />
                </>
              ) : (
                <DesktopPlaceholder />
              )}
            </div>

          </div>
        </div>

        {/* REMINDERS */}
        <div className={`tab-view${activeTab !== 'reminders' ? ' hidden' : ''}`}>
          <div className="centered-view">
            <RemindersView checked={checked} onToggle={toggleCheck} />
          </div>
        </div>

        {/* BUDGET */}
        <div className={`tab-view${activeTab !== 'budget' ? ' hidden' : ''}`}>
          <div className="centered-view">
            <BudgetView />
          </div>
        </div>

      </div>
    </div>
  )
}
