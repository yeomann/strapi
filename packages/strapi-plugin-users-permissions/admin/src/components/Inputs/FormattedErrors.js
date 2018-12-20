import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { isEmpty } from 'lodash';

function FormattedErrors({ children, errors }) {
  if (!isEmpty(errors)) {
    const error = errors[0];
    const formattedError = typeof error === 'object'  && error.id ? error.id : error;

    return (
      <FormattedMessage id={formattedError} defaultMessage={formattedError}>
        {msg => children(msg)}
      </FormattedMessage>
    );
  }

  return children();
}


FormattedErrors.propTypes = {
  children: PropTypes.any,
  errors: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string,
  ]),
};

FormattedErrors.defaultProps = {
  children: () => <React.Fragment />,
  errors: [],
};

export default FormattedErrors;
