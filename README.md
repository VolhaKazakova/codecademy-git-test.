# My Little Universe

Interactive personal collection built from the approved My Little Universe visual direction.

## Start

```bash
npm install
npm run dev -- --host 0.0.0.0 --port 4173 --strictPort
```

In the managed cloud preview, open `http://terminal.local:4173/`.

## Validate

```bash
npm run build
node scripts/capture.mjs
```

`src/data/pins.json` is the single source for approved pin content, placement and depth. Generated artwork lives in `public/assets/`.

Click a pin to bring it forward. Click the illuminated central button on the base to open the visual Collection.
