import PropTypes from 'prop-types';

export default {
  propTypes: {
    contained: PropTypes.bool,
    small: PropTypes.bool,
    asIcon: PropTypes.bool,
    inverted: PropTypes.bool,
    wrapperProps: PropTypes.shape({}),
    version: PropTypes.number,
  },
  defaultProps: {
    contained: false,
    small: false,
    asIcon: false,
    inverted: false,
    wrapperProps: {},
    version: 1,
  },
};
