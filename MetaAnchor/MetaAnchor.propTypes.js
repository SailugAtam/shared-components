import PropTypes from 'prop-types';

export default {
  propTypes: {
    mediaIcon: PropTypes.bool,
    external: PropTypes.bool,
    hide: PropTypes.string,
    label: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
    url: PropTypes.string,
  },
  defaultProps: {
    mediaIcon: false,
    external: false,
    hide: '',
    label: '',
    url: '',
  },
};

export const MetaAnchorProxy = {
  propTypes: {
    external: PropTypes.bool,
    href: PropTypes.string,
    style: PropTypes.shape({}),
    target: PropTypes.string,
    rel: PropTypes.string,
  },
  defaultProps: {
    external: false,
    href: '',
    style: null,
    target: '',
    rel: '',
  },
};
