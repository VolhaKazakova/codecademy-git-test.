import { assetUrl } from '../../lib/assetUrl';

export default function Pin({ pin, pointer, selected, subdued, onSelect, index }) {
  const depth = pin.initialPosition.z;
  const parallax = 2 + depth * 5;
  const style = {
    '--x': `${pin.initialPosition.x * 100}%`,
    '--y': `${pin.initialPosition.y * 100}%`,
    '--size': `${pin.size * 100}%`,
    '--rotation': `${pin.rotation.z}deg`,
    '--shift-x': `${pointer.x * parallax}px`,
    '--shift-y': `${pointer.y * parallax}px`,
    '--drift-delay': `${index * -1.1}s`,
    zIndex: Math.round(depth * 4) + 1,
  };

  return (
    <button
      className={`pin${selected ? ' is-selected' : ''}${subdued ? ' is-subdued' : ''}`}
      style={style}
      type="button"
      aria-label={`Select ${pin.name}`}
      aria-pressed={selected}
      onClick={() => onSelect(pin)}
    >
      <img src={assetUrl(pin.asset)} alt="" draggable="false" />
    </button>
  );
}
