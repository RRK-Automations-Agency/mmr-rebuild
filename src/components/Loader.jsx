import { useEffect, useState } from 'react';

export default function Loader() {
  const [barWidth, setBarWidth] = useState(0);
  const [status, setStatus] = useState('visible');

  useEffect(() => {
    const setInitial = setTimeout(() => setBarWidth(30), 100);
    const hide = () => {
      setBarWidth(100);
      setStatus('fading');
      setTimeout(() => setStatus('hidden'), 500);
    };

    // If the document already loaded before this component mounted, hide immediately.
    if (document.readyState === 'complete') {
      hide();
    } else {
      window.addEventListener('load', hide);
    }

    // Shorter fallback to avoid long blocking overlays on slow events.
    const fallback = setTimeout(hide, 1200);

    return () => {
      clearTimeout(setInitial);
      clearTimeout(fallback);
      window.removeEventListener('load', hide);
    };
  }, []);

  if (status === 'hidden') return null;

  return (
    <div
      id="loader"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        background: '#050505',
        zIndex: 10000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        transition: 'opacity 0.5s ease',
        opacity: status === 'fading' ? 0 : 1
      }}
    >
      <div className="logo" style={{ marginBottom: '1rem' }}>
        <img src="/images/logo.png" alt="Fit FUTURE" style={{ height: '100px' }} />
      </div>
      <div style={{ width: '200px', height: '2px', background: '#111111', position: 'relative', overflow: 'hidden' }}>
        <div
          id="loader-bar"
          style={{
            position: 'absolute',
            inset: 0,
            background: '#45F0B5',
            width: `${barWidth}%`,
            transition: 'width 0.5s ease'
          }}
        ></div>
      </div>
    </div>
  );
}
