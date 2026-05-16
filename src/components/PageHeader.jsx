import PropTypes from 'prop-types';

export default function PageHeader({ title, subtitle = null, children = null, className = '' }) {
  const words = String(title).split(' ');

  return (
    <header className={`section-padding page-header ${className}`} style={{ paddingTop: '150px', background: '#0a0a0a', borderBottom: 'solid #111' }}>
      <div className="container text-center">
        <h1 className="text-accent page-title">
          {words.map((w, i) => (
            <span key={i} className="page-title-word">{w}</span>
          ))}
        </h1>
        {subtitle ? <p className="page-subtitle">{subtitle}</p> : null}
        {children}
      </div>
    </header>
  );
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  children: PropTypes.node
};
