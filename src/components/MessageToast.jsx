import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { createIcons, CheckCircle, AlertCircle, X } from 'lucide';

export default function MessageToast({ message, type, onClose }) {
  useEffect(() => {
    createIcons({ icons: { CheckCircle, AlertCircle, X } });

    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`custom-message-box ${type}`}
      style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        background: type === 'success' ? '#050505' : '#fff',
        color: type === 'success' ? '#45F0B5' : '#ff4d4d',
        border: `1px solid ${type === 'success' ? '#45F0B5' : '#ff4d4d'}`,
        padding: '15px 20px',
        borderRadius: '8px',
        zIndex: 10000,
        display: 'flex',
        alignItems: 'center',
        gap: '15px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.5)'
      }}
    >
      <div className="message-content" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <i data-lucide={type === 'success' ? 'check-circle' : 'alert-circle'}></i>
        <span>{message}</span>
      </div>
      <button
        className="close-msg"
        style={{ background: 'transparent', border: 'none', color: 'inherit', cursor: 'pointer', display: 'flex', alignItems: 'center', padding: 0 }}
        type="button"
        onClick={onClose}
      >
        <i data-lucide="x"></i>
      </button>
    </div>
  );
}

MessageToast.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['success', 'error']).isRequired,
  onClose: PropTypes.func.isRequired
};
