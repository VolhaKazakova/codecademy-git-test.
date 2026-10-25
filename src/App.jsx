import { useEffect, useRef, useState } from 'react';
import { Sparkle, X } from '@phosphor-icons/react';
import pins from './pins.json';

const assetUrl = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;

function Pin({ pin, index, onSelect }) {
  return (
    <button
      className={`pin pin--${pin.depth}`}
      style={{'--x':`${pin.x}%`,'--y':`${pin.y}%`,'--size':`${pin.size}%`,'--rotation':`${pin.rotate}deg`,'--delay':`${index * -0.7}s`}}
      onClick={() => onSelect(pin)}
      aria-label={`Open ${pin.name}`}
    ><img src={assetUrl(pin.asset)} alt="" draggable="false" /></button>
  );
}

function PinDialog({ pin, onClose }) {
  const closeRef = useRef(null);
  useEffect(() => {
    if (!pin) return undefined;
    closeRef.current?.focus();
    const closeOnEscape = (event) => event.key === 'Escape' && onClose();
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [pin, onClose]);
  if (!pin) return null;
  return (
    <div className="dialog-backdrop" onMouseDown={onClose}>
      <section className="pin-dialog" role="dialog" aria-modal="true" aria-labelledby="dialog-title" onMouseDown={(event) => event.stopPropagation()}>
        <button ref={closeRef} className="icon-button" onClick={onClose} aria-label="Close card"><X size={22} /></button>
        <div className="pin-dialog__visual"><img src={assetUrl(pin.asset)} alt={pin.name} /></div>
        <div className="pin-dialog__copy"><p className="eyebrow">{pin.category.join(' · ')}</p><h2 id="dialog-title">{pin.name}</h2><p>{pin.description}</p></div>
      </section>
    </div>
  );
}

export default function App() {
  const [selectedPin, setSelectedPin] = useState(null);
  return (
    <div className="site-shell" style={{'--site-background': `url("${assetUrl('/assets/background.png')}")`}}>
      <section className="hero" id="top">
        <div className="hero__layout">
          <div className="universe" aria-label="Interactive collection inside a glass sphere">
            <div className="orb">
              <img className="orb__glass orb__glass--back" src={assetUrl('/assets/orb-glass.png')} alt=""/>
              <div className="orb__pins">{pins.map((pin,index)=><Pin key={pin.id} pin={pin} index={index} onSelect={setSelectedPin}/>)}</div>
              <img className="orb__glass orb__glass--front" src={assetUrl('/assets/orb-glass.png')} alt=""/>
            </div>
            <img className="universe__base" src={assetUrl('/assets/orb-base.png')} alt=""/>
          </div>
        </div>
      </section>
      <main>
        <section className="collection" id="collection">
          <p className="eyebrow">Nine pieces of me</p><h2>The collection</h2><p className="collection__intro">Select an object to discover the story it holds.</p>
          <div className="collection__grid">{pins.map(pin=><button key={pin.id} className="collection-card" onClick={()=>setSelectedPin(pin)}><span className="collection-card__image"><img src={assetUrl(pin.asset)} alt=""/></span><span className="collection-card__category">{pin.category.join(' · ')}</span><strong>{pin.name}</strong></button>)}</div>
        </section>
        <section className="about" id="about"><Sparkle size={34} weight="fill"/><p className="eyebrow">About this universe</p><h2>The things we love become our constellation.</h2><p>This small collection brings together the objects, rituals and symbols that make life feel like mine.</p></section>
      </main>
      <PinDialog pin={selectedPin} onClose={()=>setSelectedPin(null)}/>
    </div>
  );
}
