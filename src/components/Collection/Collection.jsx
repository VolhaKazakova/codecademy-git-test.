import { useEffect, useRef } from 'react';
import { X } from '@phosphor-icons/react';
import { assetUrl } from '../../lib/assetUrl';

export default function Collection({ open, pins, selectedId, onClose, onSelect }) {
  const closeRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    const closeOnEscape = (event) => event.key === 'Escape' && onClose();
    window.addEventListener('keydown', closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="collection-backdrop" onMouseDown={onClose}>
      <section
        className="collection-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="collection-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <header className="collection-header">
          <div>
            <p className="eyebrow">Nine approved pins</p>
            <h1 id="collection-title">Collection</h1>
          </div>
          <button ref={closeRef} className="icon-button" type="button" onClick={onClose} aria-label="Close collection">
            <X size={22} />
          </button>
        </header>

        <div className="collection-grid">
          {pins.map((pin) => (
            <button
              key={pin.id}
              className={`collection-card${selectedId === pin.id ? ' is-selected' : ''}`}
              type="button"
              onClick={() => onSelect(pin)}
            >
              <span className="collection-card__image">
                <img src={assetUrl(pin.asset)} alt="" />
              </span>
              <span className="collection-card__category">{pin.categories.join(' · ')}</span>
              <strong>{pin.name}</strong>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
