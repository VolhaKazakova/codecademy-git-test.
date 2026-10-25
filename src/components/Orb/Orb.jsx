import { useState } from 'react';
import Pin from '../Pin/Pin';
import Base from '../Base/Base';
import { assetUrl } from '../../lib/assetUrl';

export default function Orb({ pins, selectedPin, onSelectPin, onOpenCollection }) {
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  const handlePointerMove = (event) => {
    if (event.pointerType === 'touch') return;
    const bounds = event.currentTarget.getBoundingClientRect();
    setPointer({
      x: ((event.clientX - bounds.left) / bounds.width - .5) * 2,
      y: ((event.clientY - bounds.top) / bounds.height - .5) * 2,
    });
  };

  return (
    <div className="universe" onPointerMove={handlePointerMove} onPointerLeave={() => setPointer({ x: 0, y: 0 })}>
      <div className="orb" aria-label="Interactive collection inside a glass sphere">
        <img className="orb__glass orb__glass--back" src={assetUrl('/assets/orb-glass.png')} alt="" draggable="false" />
        <div className="orb__pins">
          {pins.map((pin, index) => (
            <Pin
              key={pin.id}
              pin={pin}
              index={index}
              pointer={pointer}
              selected={selectedPin?.id === pin.id}
              subdued={Boolean(selectedPin && selectedPin.id !== pin.id)}
              onSelect={onSelectPin}
            />
          ))}
        </div>
        <img className="orb__glass orb__glass--front" src={assetUrl('/assets/orb-glass.png')} alt="" draggable="false" />
      </div>
      <Base onOpenCollection={onOpenCollection} />
    </div>
  );
}
