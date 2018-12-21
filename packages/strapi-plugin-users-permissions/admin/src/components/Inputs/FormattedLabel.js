import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

function FormattedLabel({ children, label }) {
  if (typeof label === 'object') {
    return (
      children(
        <FormattedMessage
          id={label.id}
          defaultMessage={label.id}
          values={label.parasms}
        />
      )
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
    PropTypes.shape({
      id: PropTypes.string,
      params: PropTypes.object,
    }),
  ]),
};

FormattedLabel.defaultProps = {
  children: () => <React.Fragment />,
  label: {
    id: 'app.utils.defaultMessage',
  },
};

export default FormattedLabel;
