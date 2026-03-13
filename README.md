# Andalusia Road Trip 2026 🇪🇸

A personal trip companion app built for a 10-day road trip through Andalusia, Spain (March 20–29, 2026). Originally a private planning tool for Filip & Iva, but the itinerary, restaurant picks, and activity suggestions might be useful if you're heading to the same region.

## The Trip

**Málaga → Ronda → Seville → Córdoba → Granada → back to Málaga**

10 days, ~957 km of driving, a mix of cycling, hiking, city walks, and good food. The route covers some of the best of southern Spain — white villages in the mountains, UNESCO-listed old towns, flamenco, tapas, and a lot of sunshine (hopefully).

## What's in the App

- **Day-by-day itinerary** — each day has its driving route with km/time estimates, accommodation details, check-in info, and parking notes
- **Curated suggestions** — handpicked restaurants, attractions, and things to do at each stop, with time estimates and Google Maps links
- **Interactive map** — all overnight stops plotted on a Leaflet/OpenStreetMap map, with a route line connecting them
- **Bookings checklist** — a shared to-do list (backed by Firebase Firestore) so both travellers see what's been booked in real time, from any device
- **Budget overview** — cost breakdown across accommodation, transport, food, and activities

## Stack

- React 18 + Vite
- react-leaflet + OpenStreetMap (no API key needed)
- Firebase Firestore (real-time checklist sync)
- Plain CSS with custom properties — no UI framework

## Running Locally

```bash
npm install
```

Create a `.env` file in the project root with your Firebase config:

```
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=...
VITE_FIREBASE_PROJECT_ID=...
VITE_FIREBASE_STORAGE_BUCKET=...
VITE_FIREBASE_MESSAGING_SENDER_ID=...
VITE_FIREBASE_APP_ID=...
```

Then:

```bash
npm run dev
```

## Notes

The trip data (days, hotels, restaurants, attractions) is all hardcoded in `src/data/tripData.js`. If you're planning a similar trip through Andalusia, the suggestions there are genuine — places we actually researched and wanted to visit. Take them as a starting point.

The checklist uses a shared Firestore document, so anyone with access to the app can check things off. Works well for two people planning together across different devices.
