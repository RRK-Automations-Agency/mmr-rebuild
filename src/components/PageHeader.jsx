import PropTypes from 'prop-types';

export default function PageHeader({ title, subtitle = null, children = null }) {
  return (
    <header className="section-padding" style={{ paddingTop: '150px', background: '#0a0a0a', borderBottom: '1px solid #111' }}>
      <div className="container text-center">
        <h1 className="text-accent" style={{ fontSize: '3.5rem' }}>
          {title}
        </h1>
        {subtitle ? <p>{subtitle}</p> : null}
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
