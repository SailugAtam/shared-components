import PropTypes from 'prop-types';

const props = {
  propTypes: {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
    id: PropTypes.string,
    disabled: PropTypes.bool,
    setQuantity: PropTypes.func.isRequired,
    onChange: PropTypes.func,
  },
  defaultProps: {
    disabled: false,
  },
};

export default props;
