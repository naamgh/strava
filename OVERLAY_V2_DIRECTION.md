# Overlay V2 Direction

## Core Product

Transparent activity overlay generator powered by Strava.

Users:

- connect Strava
- choose activity
- toggle overlay modules
- choose a style system
- export transparent PNG overlays for social media

No background image editing.
No freeform Canva-style dragging system.

The app should feel:

- fast
- premium
- mobile-first
- highly visual
- creator-friendly

---

# Primary User Flow

```text
Connect Strava
→ Select activity
→ Choose overlay style
→ Toggle data modules
→ Export transparent PNG
```

---

# Overlay Modules

## Core Stats

- Distance
- Time
- Pace / Speed
- Elevation
- Heart Rate
- Power
- Calories
- Activity Title
- Date

---

## Visual Modules

- Route Map
- Elevation Profile
- Splits

---

# Running Splits

Running activities should support:

- 1 km splits
- fastest split highlight
- negative split badge
- compact pace bars
- compact split chips

Example:

```text
KM 1  4:52
KM 2  4:47
KM 3  4:39
```

---

# Design Philosophy

The overlay is ONE unified composition.

Users can:

- toggle modules on/off
- choose style templates
- choose compact/expanded layout
- choose colour themes

Users cannot:

- manually drag individual stickers
- freely resize independent modules
- create messy layouts

This keeps exports premium and visually consistent.

---

# Style Systems

## Liquid Performance

- soft cloud gradients
- flowing glows
- animated feeling
- Veera-inspired aesthetic

---

## Minimal Swiss

- editorial typography
- tiny labels
- monochrome layouts
- fashion-style spacing

---

## Race Poster

- oversized distance
- bold hierarchy
- huge route emphasis
- strong contrast

---

## Data Nerd

- splits focus
- elevation profile
- dense information
- ideal for cycling

---

## AMOLED Neon

- pure black transparency
- glowing routes
- electric colour accents
- reels/TikTok focused

---

# Export Types

## Primary

- Transparent PNG

## Secondary

- White PNG
- Black PNG
- Story Safe Export
- Square Export

---

# Technical Direction

## Frontend

- Mobile-first HTML app
- Unified overlay renderer
- Canvas/SVG rendering
- Transparent export pipeline

## Backend

- Strava OAuth
- Activity import
- Route polyline decoding
- Split extraction
- Elevation profile generation

---

# Future Features

- animated overlays
- animated route drawing
- animated elevation graph
- video export
- CapCut integration
- auto reel generation
- saved presets
- creator marketplace templates
