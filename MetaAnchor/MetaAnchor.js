import { memo } from 'react';
// import 'scss/components/metaAnchor.scss';
import MetaAnchorWrapper from './MetaAnchor.styled';
import PropTypes from './MetaAnchor.propTypes';

function MetaAnchor(props) {
  const { mediaIcon, hide, label, external, url } = props;

  return (
    <MetaAnchorWrapper
      href={url}
      external={external}
      target={external ? '_blank' : null}
      rel={external ? 'noopener noreferrer' : null}
      data-testid="meta-anchor-wrapper"
    >
      {!mediaIcon ? (
        <div className={`${hide === 'true' ? 'hide' : ''} metaAnchor`}>
          {label}
        </div>
      ) : (
        <span
          className={`${hide === 'true' ? 'hide' : ''} metaAnchorMediaIcon`}
        >
          {label}
        </span>
      )}
    </MetaAnchorWrapper>
  );
}

MetaAnchor.propTypes = PropTypes.propTypes;
MetaAnchor.defaultProps = PropTypes.defaultProps;

export default memo(MetaAnchor);
