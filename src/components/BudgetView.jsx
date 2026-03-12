import { BUDGET } from '../data/tripData'

const CAR_ICON = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
    <circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
  </svg>
)

const HOTEL_ICON = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
)

const PARK_ICON = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="10" r="3"/><path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 10-16 0c0 3 2.7 6.9 8 11.7z"/>
  </svg>
)

export default function BudgetView() {
  const maxCost = Math.max(...BUDGET.accommodation.breakdown.map(b => b.cost))

  const perPersonTotal = BUDGET.grandTotal / 2

  return (
    <div>
      {/* Grand total card */}
      <div className="budget-summary">
        <div className="budget-total-label">Total Trip Budget</div>
        <div className="budget-total-value">
          <span>€</span>{BUDGET.grandTotal.toFixed(2)}
        </div>
        <div style={{ marginTop: 10, borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: 10 }}>
          <div className="budget-breakdown-row">
            <span>🏨 Accommodation</span>
            <span>€{BUDGET.accommodation.total.toFixed(2)}</span>
          </div>
          <div className="budget-breakdown-row">
            <span>🅿️ Parking</span>
            <span>€{BUDGET.parking.total.toFixed(2)}</span>
          </div>
          <div className="budget-breakdown-row">
            <span>🚗 Rental car</span>
            <span>€{BUDGET.car.total.toFixed(2)}</span>
          </div>
        </div>
        <div style={{
          marginTop: 10, borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: 10,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center'
        }}>
          <span style={{ fontSize: 13, opacity: 0.8 }}>Per person</span>
          <span style={{ fontSize: 18, fontWeight: 800 }}>€{perPersonTotal.toFixed(2)}</span>
        </div>
      </div>

      {/* Accommodation breakdown */}
      <div className="budget-section">
        <div className="budget-section-title">🏨 Accommodation Breakdown</div>
        {BUDGET.accommodation.breakdown.map((item, i) => (
          <div key={i} className="budget-item">
            <div className="budget-item-row">
              <div className="budget-item-label">{item.label}</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span className="budget-item-nights">{item.nights} night{item.nights > 1 ? 's' : ''}</span>
                <span className="budget-item-cost">€{item.cost.toFixed(2)}</span>
              </div>
            </div>
            <div className="budget-bar">
              <div
                className="budget-bar-fill"
                style={{ width: `${(item.cost / maxCost) * 100}%` }}
              />
            </div>
          </div>
        ))}

        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '10px 14px', background: 'var(--color-surface-elevated)',
          borderRadius: 10, border: '1px solid var(--color-border)', marginTop: 4
        }}>
          <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--color-text)' }}>
            10 nights total
          </span>
          <span style={{ fontSize: 16, fontWeight: 800, color: 'var(--color-primary)' }}>
            €{BUDGET.accommodation.total.toFixed(2)}
          </span>
        </div>
      </div>

      {/* Fixed costs */}
      <div className="budget-section">
        <div className="budget-section-title">🚗 Transport & Parking</div>
        <div className="budget-fixed-card">
          <div className="budget-fixed-row">
            <div className="budget-fixed-label">
              {CAR_ICON}
              Rental car (10 days)
            </div>
            <span className="budget-fixed-cost">€{BUDGET.car.total.toFixed(2)}</span>
          </div>
          <div className="budget-fixed-row">
            <div className="budget-fixed-label">
              {PARK_ICON}
              Parking at accommodations
            </div>
            <span className="budget-fixed-cost">€{BUDGET.parking.total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* Parking detail */}
      <div className="budget-section">
        <div className="budget-section-title">🅿️ Parking Per Stay</div>
        <div className="budget-fixed-card">
          {[
            { stay: 'Nerja — Mena Plaza', detail: '14€/day · 1 night · Reserved', cost: 14 },
            { stay: 'Loja — El Mirador', detail: '10€/day · 1 night · Not reserved', cost: 10 },
            { stay: 'Córdoba — Marisa', detail: '18€/day · 1 night · Reserved', cost: 18 },
            { stay: 'Sevilla — IBERflat', detail: '6€/day · 2 nights · Not reserved', cost: 12 },
            { stay: 'Ronda — San Francisco', detail: '18€/day · 1 night · External garage', cost: 18 },
            { stay: 'Torremolinos — María del Carmen', detail: 'FREE · 4 nights', cost: 0 },
          ].map((item, i) => (
            <div key={i} className="budget-fixed-row">
              <div style={{ flex: 1 }}>
                <div className="budget-fixed-label">{item.stay}</div>
                <div style={{ fontSize: 11, color: 'var(--color-text-muted)', marginTop: 1 }}>{item.detail}</div>
              </div>
              <span className={`budget-fixed-cost${item.cost === 0 ? '' : ''}`}
                style={{ color: item.cost === 0 ? 'var(--color-success)' : 'var(--color-text)' }}>
                {item.cost === 0 ? 'FREE' : `€${item.cost}`}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Budget tips */}
      <div className="budget-section">
        <div className="budget-section-title">💡 Budget Tips</div>
        <div className="budget-fixed-card">
          {[
            { tip: 'Breakfast included at 4 hotels — save on morning meals', icon: '🍳' },
            { tip: 'Granada: every drink comes with a FREE tapa!', icon: '🍺' },
            { tip: 'Sevilla: Sevici public bikes are cheap and excellent', icon: '🚴' },
            { tip: 'Torremolinos free parking — saves money on last 4 days', icon: '🅿️' },
            { tip: 'Hotel El Mirador: 15% café discount with spa booking', icon: '💆' },
            { tip: 'Book Alhambra & Caminito well in advance — no last-minute price spikes', icon: '🎫' },
          ].map((item, i) => (
            <div key={i} className="budget-fixed-row">
              <div className="budget-fixed-label">
                <span>{item.icon}</span>
                <span style={{ fontSize: 12, fontWeight: 400 }}>{item.tip}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ height: 16 }} />
    </div>
  )
}
