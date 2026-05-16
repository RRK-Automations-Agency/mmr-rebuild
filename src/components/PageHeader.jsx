import PropTypes from 'prop-types';

export default function PageHeader({ title, subtitle = null, children = null }) {
  const words = String(title).split(' ');

  return (
    <header className="section-padding page-header" style={{ paddingTop: '150px', background: '#0a0a0a', borderBottom: '1px solid #111' }}>
      <div className="container text-center">
        <h1 className="text-accent page-title" style={{ fontSize: '3.5rem' }}>
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
