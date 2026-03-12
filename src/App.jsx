import { useState } from 'react'
import { DAYS } from './data/tripData'
import MapView from './components/MapView'
import DaysList from './components/DaysList'
import DayDetail from './components/DayDetail'
import RemindersView from './components/RemindersView'
import BudgetView from './components/BudgetView'
import BottomNav from './components/BottomNav'
import { TRIP_REMINDERS } from './data/tripData'

export default function App() {
  const [activeTab, setActiveTab] = useState('days')
  const [selectedDayId, setSelectedDayId] = useState(null)

  const urgentCount = TRIP_REMINDERS.filter(r => r.urgent).length

  function handleDaySelect(dayId) {
    setSelectedDayId(dayId)
    setActiveTab('days')
  }

  function handleBack() {
    setSelectedDayId(null)
  }

  const selectedDay = selectedDayId ? DAYS.find(d => d.id === selectedDayId) : null

  // Get accommodation for display (handles same-as-previous-day cases)
  function getAccommodation(day) {
    if (day.accommodation) return day.accommodation
    if (day.sameAccommodationAs) {
      const refDay = DAYS.find(d => d.id === day.sameAccommodationAs)
      return refDay?.accommodation || null
    }
    return null
  }

  return (
    <div className="app-shell">
      {/* Header */}
      <header className="app-header">
        <div className="app-header-inner">
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            {selectedDay && activeTab === 'days' && (
              <button className="back-btn" onClick={handleBack} aria-label="Back to days list">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
            )}
            <div>
              <h1>
                {selectedDay && activeTab === 'days'
                  ? `Day ${selectedDay.id} — ${selectedDay.emoji}`
                  : activeTab === 'map' ? '🗺️ Trip Map'
                  : activeTab === 'reminders' ? '📋 Bookings & Reminders'
                  : activeTab === 'budget' ? '💶 Budget'
                  : '🌊 Málaga 2026'}
              </h1>
              <div className="subtitle">
                {selectedDay && activeTab === 'days'
                  ? selectedDay.dayLabel
                  : 'Mar 20–29, 2026 · Andalusia, Spain'}
              </div>
            </div>
          </div>
          <div style={{ fontSize: 22 }}>
            {activeTab === 'days' && !selectedDay && '🇪🇸'}
          </div>
        </div>
      </header>

      {/* Main content */}
      <div className="main-content">
        {/* Map view — always mounted to preserve state */}
        <div className={`tab-view${activeTab !== 'map' ? ' hidden' : ''}`} style={{ padding: 0, overflow: 'hidden' }}>
          <MapView onDaySelect={handleDaySelect} selectedDayId={selectedDayId} />
        </div>

        {/* Days / Day Detail view */}
        <div className={`tab-view${activeTab !== 'days' ? ' hidden' : ''}`}>
          {selectedDay ? (
            <DayDetail day={selectedDay} getAccommodation={getAccommodation} />
          ) : (
            <DaysList onDaySelect={handleDaySelect} selectedDayId={selectedDayId} getAccommodation={getAccommodation} />
          )}
        </div>

        {/* Reminders view */}
        <div className={`tab-view${activeTab !== 'reminders' ? ' hidden' : ''}`}>
          <RemindersView />
        </div>

        {/* Budget view */}
        <div className={`tab-view${activeTab !== 'budget' ? ' hidden' : ''}`}>
          <BudgetView />
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNav activeTab={activeTab} onTabChange={(tab) => {
        setActiveTab(tab)
        if (tab !== 'days') setSelectedDayId(null)
      }} urgentCount={urgentCount} />
    </div>
  )
}
