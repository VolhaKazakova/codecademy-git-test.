import { assetUrl } from '../../lib/assetUrl';

export default function Base({ onOpenCollection }) {
  return (
    <>
      <img className="universe__base" src={assetUrl('/assets/orb-base.png')} alt="" draggable="false" />
      <button
        className="base-trigger"
        type="button"
        aria-label="Open collection"
        aria-haspopup="dialog"
        onClick={onOpenCollection}
      />
    </>
  );
}
