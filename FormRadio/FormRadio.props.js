import PropTypes from 'prop-types';

export default {
  propTypes: {
    label: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.element,
      PropTypes.node,
    ]).isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['radio', 'checkbox', 'switch']).isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  },
  defaultProps: {
    label: '',
    id: '',
    type: 'radio',
    value: '',
    name: '',
  },
};
