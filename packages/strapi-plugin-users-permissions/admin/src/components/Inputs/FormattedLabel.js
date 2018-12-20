import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

function FormattedLabel({ children, label }) {
  if (typeof label === 'object') {
    return (
      <FormattedMessage id={label.id}>
        {msg => children(msg)}
      </FormattedMessage>
    );
  }

  if (typeof label === 'function') {
    return children(label());
  }

  if (typeof label === 'string') {
    return children(label);
  }

  return children();
}


FormattedLabel.propTypes = {
  children: PropTypes.any,
  label: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.object,
  ]),
};

FormattedLabel.defaultProps = {
  children: () => <React.Fragment />,
  label: {
    id: 'app.utils.defaultMessage',
  },
};

export default FormattedLabel;
