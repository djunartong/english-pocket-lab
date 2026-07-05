export default function Modal({ url, onClose }) {
  if (!url) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-panel" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>
        <iframe
          src={`${url}embed`}
          className="modal-iframe"
          frameBorder="0"
          scrolling="no"
          allowTransparency
        />
      </div>
    </div>
  );
}
