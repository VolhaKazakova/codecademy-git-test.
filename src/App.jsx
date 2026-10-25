import { useEffect, useMemo, useState } from 'react';
import Orb from './components/Orb/Orb';
import Collection from './components/Collection/Collection';
import pins from './data/pins.json';
import { assetUrl } from './lib/assetUrl';

export default function App() {
  const [selectedId, setSelectedId] = useState(null);
  const [collectionOpen, setCollectionOpen] = useState(false);
  const selectedPin = useMemo(() => pins.find((pin) => pin.id === selectedId) ?? null, [selectedId]);

  useEffect(() => {
    const onEscape = (event) => {
      if (event.key === 'Escape' && !collectionOpen) setSelectedId(null);
    };
    window.addEventListener('keydown', onEscape);
    return () => window.removeEventListener('keydown', onEscape);
  }, [collectionOpen]);

  const selectPin = (pin) => setSelectedId((current) => current === pin.id ? null : pin.id);
  const selectFromCollection = (pin) => {
    setSelectedId(pin.id);
    setCollectionOpen(false);
  };

  return (
    <div className="site-shell" style={{ '--site-background': `url("${assetUrl('/assets/background.png')}")` }}>
      <main>
        <section className="hero" aria-label="My Little Universe">
          <div className="hero__layout">
            <Orb
              pins={pins}
              selectedPin={selectedPin}
              onSelectPin={selectPin}
              onOpenCollection={() => setCollectionOpen(true)}
            />
          </div>
        </section>
      </main>

      <Collection
        open={collectionOpen}
        pins={pins}
        selectedId={selectedId}
        onClose={() => setCollectionOpen(false)}
        onSelect={selectFromCollection}
      />
    </div>
  );
}
