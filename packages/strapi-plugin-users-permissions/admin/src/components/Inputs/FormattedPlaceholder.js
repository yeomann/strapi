import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

function FormattedPlaceholder({ children, placeholder }) {
  const ensurePlaceholderIsNotEmpty = placeholder === '' ? 'app.utils.defaultMessage' : placeholder;

  if (typeof placeholder === 'string') {  
    return (
      <FormattedMessage id={ensurePlaceholderIsNotEmpty} defaultMessage={ensurePlaceholderIsNotEmpty}>
        {msg => children(msg)}
      </FormattedMessage>
    );
  }

  if (typeof placeholder === 'function') {
    return children(placeholder());
  }

  return children();
}


FormattedPlaceholder.propTypes = {
  children: PropTypes.any,
  placeholder: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
  ]),
};

FormattedPlaceholder.defaultProps = {
  children: () => <React.Fragment />,
  placeholder: 'app.utils.defaultMessage',
  
};

export default FormattedPlaceholder;
