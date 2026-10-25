# My Little Universe — CODEX.md

## 1. Project purpose

**My Little Universe** is a personal visual universe represented by a physical-looking glass orb containing collectible enamel pins.

Each pin represents something from the user's life: interests, activities, memories, work, culture, tastes, dreams, etc.

The site is **not** a dashboard, moodboard, collage, or generic portfolio.

Long term, the orb may contain **hundreds of pins**, so the MVP architecture must scale beyond the initial 9.

---

## 2. MVP objective

The first real MVP validates:

- the approved visual direction;
- the orb as a believable physical object;
- pins as separate physical objects **inside** the orb;
- subtle motion / depth;
- visual Collection UI;
- architecture that can later scale to hundreds of pins.

The first MVP uses **9 approved pins only**.

---

# 3. CRITICAL DESIGN-LOCK RULE

When the user explicitly approves something with phrases like:

- “нравится”
- “оставляем”
- “аппрув”
- “фиксируем”
- “все хорошо”
- equivalent clear approval

that element becomes a **design lock**.

After a design lock:

- do not redesign it;
- do not change its color;
- do not change surrounding elements in a way that alters the approved result;
- do not “improve” it without being asked;
- make only the explicitly requested delta;
- if a requested change conflicts with a locked element, flag the conflict instead of silently changing it.

This rule has priority over aesthetic preferences of the developer/model.

---

# 4. Approved overall direction

## Mood

Locked:

- light
- airy
- spacious
- warm
- feminine
- minimalist
- subtly futuristic
- dreamy but restrained
- premium
- calm
- timeless

Avoid:

- gloomy
- icy
- cold sci-fi
- dark cosmic
- occult / witchy
- baroque fantasy
- overly glossy luxury
- high saturation
- excessive gold
- cluttered cinematic scenery
- dashboard UI
- generic startup UI

---

# 5. Approved background

The background direction is locked.

Characteristics:

- soft lavender / blue upper sky;
- warm peach / cream near horizon;
- reflective water;
- soft sunset glow;
- sparse clouds;
- subtle celestial elements;
- large areas of visual breathing room;
- clean composition;
- restrained saturation.

Do not:

- increase saturation;
- deepen contrast;
- make the scene darker;
- add more scenery;
- introduce extra mountains / architecture / vegetation / fantasy objects;
- rebuild the background from scratch when changing a different element.

The background is a supporting environment. It must never compete with the orb.

---

# 6. Orb placement

Locked:

- orb is **strictly centered on screen**;
- orb is the primary hero object;
- orb remains visually dominant;
- large title blocks must not push it off-center;
- sufficient breathing room around the orb is required.

---

# 7. Orb material

The orb is a glass / crystal vessel.

Desired:

- physical;
- dimensional;
- warm;
- refined;
- materially believable;
- subtly alive.

Avoid:

- soap-bubble look;
- plastic dome;
- flat translucent circle;
- dark high-contrast glass;
- sci-fi force-field look.

Use:

- restrained edge highlights;
- subtle refraction;
- visible glass thickness;
- warm internal reflection;
- soft front/back glass cues;
- layered depth.

The user explicitly asked for more “soul / liveliness” in the glass without increasing saturation or drama.

---

# 8. Base

Locked direction:

- light pearl / satin metal;
- feminine but not overtly girly;
- soft sculpted profile;
- minimal futuristic character;
- subtle lilac / soft blue underglow;
- premium material.

## Locked central button

The circular button centered on the front of the base is approved and must remain.

Do not remove it unless explicitly requested.

---

# 9. Removed engraving layer

The user explicitly rejected the separate collar / layer between orb and base.

Therefore:

- do not add an extra band between orb and base;
- orb should meet the main base directly;
- no engraving layer should reappear without explicit approval.

---

# 10. Title / typography

Title treatment is **not locked**.

The user liked the general idea of **Classic & Timeless** typography more than black editorial variants, but later considered removing the title completely.

Current default:

- title may be absent;
- do not force title treatment into the MVP;
- typography should be handled later as a separate design pass.

If title is reintroduced:

- timeless;
- elegant;
- classic;
- refined;
- not black if it feels too harsh;
- not fashion-trendy;
- not decorative script;
- not hyper-futuristic.

---

# 11. Navigation

Minimal navigation is acceptable.

Current conceptual items:

- Collection
- count (`9` for MVP)
- About
- optional small symbol/star

Navigation must stay visually quiet and not compete with the orb.

---

# 12. Pin visual system

Pins must look like **hard-enamel collectible pins**, not emoji, flat icons, or generic SVG glyphs.

Each pin should have:

- custom silhouette;
- metal outline;
- enamel fill;
- visible thickness;
- subtle bevel;
- physical edge reflection;
- readable small-scale shape;
- slight perspective;
- depth-consistent shadow.

The collection should feel coherent through craft language, not by forcing every pin into one identical aesthetic.

Do not add magical / celestial styling to unrelated pins.

---

# 13. Approved 9 MVP pins

Use only these 9 in the first real MVP.

1. **Microphone**
   - modern handheld microphone
   - not retro

2. **Passion fruit**
   - cut passion fruit
   - colorful
   - readable at small scale

3. **Tarot — The Sun**
   - The Sun card

4. **MacBook**
   - laptop / MacBook

5. **Cat**
   - silver-grey striped British Shorthair
   - short plush coat
   - not overly fluffy
   - do not replace with black cat or generic cat

6. **Disco ball**
   - warm pink / orange / magenta
   - do not make silver/cool by default

7. **Music note**
   - visually distinct from microphone

8. **Prosecco**
   - wide coupe
   - **not flute**

9. **Dumbbell**
   - black
   - no weight plates
   - compact silhouette

---

# 14. Pin physicality inside the orb

Pins must feel physically located **inside** the vessel.

They must not look pasted onto the front glass.

Use:

- different Z depths;
- different rotations;
- varied perspective;
- slight scale variation by depth;
- overlap;
- front / middle / back layering;
- glass occlusion;
- partial refraction;
- depth-consistent lighting.

The system must later support hundreds of pins.

---

# 15. Motion / physics

Motion must be subtle.

This is not a game.

## Rest state

Allowed:

- very slow float;
- micro drift;
- tiny rotation;
- restrained breathing motion.

Avoid:

- bouncing;
- constant obvious movement;
- arcade-like physics.

## Pointer response

Allowed:

- subtle orb parallax;
- depth-dependent pin movement;
- front pins respond slightly more than rear pins.

## Collision

Eventually:

- prevent extreme overlap;
- keep pins inside orb bounds;
- allow some natural overlap.

Possible implementation:

- Matter.js;
- lightweight custom spring/collision system;
- transform-based depth model for early MVP.

Avoid a heavy 3D engine unless clearly necessary.

## Selected state

On click:

- pin comes slightly forward;
- pin may scale slightly;
- others may subtly recede;
- small detail UI may appear;
- orb composition should remain intact.

---

# 16. Collection experience

Collection must be visual.

Do **not** use text-only cards.

Each Collection item should reuse the exact same production asset used inside the orb.

For MVP:

- 3 × 3 grid;
- real pin thumbnails;
- minimal metadata;
- light frosted/soft panel;
- clicking a pin should close Collection and select that pin in the orb.

Long term:

- search/filter can be added;
- do not overbuild it now.

---

# 17. Correct web architecture

## Rejected approach

Do not:

- use the approved mockup as one full-screen screenshot with invisible hotspots;
- redraw the approved pins as crude CSS/SVG icons;
- make the whole page a static raster image.

These were explicitly rejected.

## Correct layered structure

```text
background
    ↓
back glass / depth layer
    ↓
pins at different Z depths
    ↓
front glass reflection / highlights
    ↓
base
    ↓
UI / navigation / overlays
```

---

# 18. Recommended project structure

```text
my-little-universe/
│
├── CODEX.md
├── README.md
├── package.json
├── src/
│   ├── components/
│   │   ├── Orb/
│   │   ├── Pin/
│   │   ├── Base/
│   │   ├── Collection/
│   │   └── Navigation/
│   ├── data/
│   │   └── pins.json
│   ├── styles/
│   └── assets/
│       ├── background/
│       │   └── hero-background.webp
│       ├── orb/
│       │   ├── glass-back.png
│       │   ├── glass-front.png
│       │   ├── reflections.png
│       │   ├── glow.png
│       │   └── base.png
│       └── pins/
│           ├── disco-ball.png
│           ├── dumbbell.png
│           ├── cat.png
│           ├── macbook.png
│           ├── microphone.png
│           ├── passion-fruit.png
│           ├── tarot-the-sun.png
│           ├── prosecco.png
│           └── music-note.png
└── public/
```

Exact framework may vary, but asset separation should remain.

---

# 19. Existing asset pack

A first production-oriented asset pack exists:

```text
my_little_universe_asset_pack_v1/
├── reference/
│   └── approved_master.png
├── assets/
│   └── pins/
│       ├── disco-ball.png
│       ├── dumbbell.png
│       ├── cat.png
│       ├── macbook.png
│       ├── microphone.png
│       ├── passion-fruit.png
│       ├── tarot-the-sun.png
│       ├── prosecco.png
│       └── music-note.png
├── pins.json
├── contact-sheet.jpg
└── README.md
```

Notes:

- `approved_master.png` is the visual source of truth.
- Pin PNGs were extracted from the approved master instead of being redrawn as crude vector icons.
- Extracted assets may still need cleanup before final production use.

---

# 20. Data model

Do not hardcode pin data in multiple components.

Recommended model:

```json
{
  "id": "disco-ball",
  "name": "Disco ball",
  "categories": ["Music", "Lifestyle"],
  "status": "approved",
  "asset": "/assets/pins/disco-ball.png",
  "initialPosition": {
    "x": 0.34,
    "y": 0.20,
    "z": 0.18
  },
  "rotation": {
    "x": 0,
    "y": 0,
    "z": -8
  }
}
```

Long term, content may come from Notion.

Notion sync is **not required for MVP**.

---

# 21. Notion source

Database:

**My Little Universe — Pins**

Known properties:

- Pin
- Category
- Notes
- Status
- Visual direction

Statuses:

- Approved
- Needs design
- Future

The first MVP uses only the 9 approved pins listed above.

---

# 22. Recommended stack

Preferred:

- React
- TypeScript
- Vite or Next.js
- plain CSS / CSS Modules
- Framer Motion or Motion One if useful
- optional Matter.js for physics

Do not add backend infrastructure unless needed.

No auth is required.

No database is required for the visual MVP.

---

# 23. Responsive behavior

Desktop-first.

Primary targets:

- 1440 × 900
- 1536 × 864
- 1920 × 1080
- common MacBook viewport

Mobile:

- keep orb centered;
- reduce scale;
- preserve pin readability;
- Collection may become full-screen sheet;
- keep tap targets comfortable;
- preserve same mood.

Do not redesign mobile into a different product.

---

# 24. Accessibility

Minimum:

- semantic buttons;
- keyboard navigation;
- Escape closes overlays;
- focus-visible states;
- reduced-motion support;
- useful alt text;
- UI text with adequate contrast.

---

# 25. Performance

Long-term target: hundreds of pins.

Therefore:

- keep motion GPU-friendly;
- prefer `transform` / `opacity`;
- use WebP/AVIF for large backgrounds;
- PNG only where alpha is needed;
- consider lazy loading;
- consider collection virtualization later;
- avoid expensive full-screen blur during continuous animation;
- do not create hundreds of decorative DOM particles.

---

# 26. DO NOT

Do not:

- redesign locked elements;
- alter approved colors;
- replace approved cat;
- make the page dark;
- increase saturation;
- re-add engraving collar;
- make glass bubble-like;
- use flat icon-style pins;
- use text-only Collection;
- make site dashboard-like;
- use one static screenshot as the website;
- fake the website with hotspots;
- add title blocks that shift the orb off-center;
- invent pin meanings or stories;
- overbuild infrastructure before the visual MVP works.

---

# 27. Roadmap

## Phase A — Production assets

Deliverables:

- approved master reference;
- clean high-resolution background;
- separate base;
- separate glass layers;
- front reflection layer;
- 9 cleaned transparent pin assets.

Definition of done:

A static recomposition closely matches the approved mockup.

## Phase B — Static web composition

Build the approved screen in browser.

No physics yet.

Definition of done:

Browser screenshot is visually close to approved master.

## Phase C — Motion / depth

Add:

- subtle drift;
- tiny rotation;
- parallax;
- depth;
- selected-pin motion.

Definition of done:

Motion improves physicality without distracting.

## Phase D — Collection

Add:

- visual 3 × 3 grid;
- same pin assets;
- open/close transition;
- click-to-focus behavior.

## Phase E — Typography / copy

Only after the visual MVP works.

Open:

- site title;
- typeface;
- title placement;
- subtitle / tagline;
- About copy.

## Phase F — Scale

After MVP approval:

- more Notion pins;
- search;
- filters;
- persistent arrangement;
- optional drag/drop;
- mobile polish;
- deployment.

---

# 28. Current next task for Codex

When Codex begins implementation:

1. Inspect repo and existing asset pack.
2. Locate `approved_master.png`.
3. Treat that file as visual source of truth.
4. Build a real layered hero, not a screenshot wrapper.
5. Keep orb exactly centered.
6. Use only the 9 approved pins.
7. Reuse identical pin assets inside orb and Collection.
8. First match static visual.
9. Only then add motion.
10. Do not invent title treatment.
11. Do not alter background palette.
12. Keep central base button.
13. Ask before changing any locked visual decision.

---

# 29. MVP success criteria

MVP is ready when:

- it feels like this specific project, not a template;
- orb feels physically present;
- pins feel inside the orb;
- pins look like real enamel collectibles;
- background stays light, airy, warm and restrained;
- motion is subtle;
- Collection is visual;
- composition remains calm with 9 pins;
- architecture can scale to hundreds;
- implementation is genuinely layered and interactive.

---

# 30. Source-of-truth priority

If sources conflict, follow this order:

1. **latest explicit user approval/correction**
2. `CODEX.md`
3. approved master visual
4. Notion pin database
5. older mockups / prototypes

Never let an older prototype override a newer explicit decision.
