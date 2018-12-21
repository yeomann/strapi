import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

function FormattedInputDescription({ children, inputDescription }) {
  if (typeof inputDescription === 'object' && inputDescription.id) {
    return children(
      <FormattedMessage
        defaultMessage={inputDescription.id}
        id={inputDescription.id}
        values={inputDescription.params}
      />
    );
  }

  if (typeof inputDescription === 'string') {
    return children(inputDescription);
  }

  if (typeof inputDescription === 'function') {
    return children(inputDescription());
  }

  return children();
}


FormattedInputDescription.propTypes = {
  children: PropTypes.any,
  inputDescription: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.shape({
      id: PropTypes.string,
      params: PropTypes.object,
    }),
  ]),
};

FormattedInputDescription.defaultProps = {
  children: () => <React.Fragment />,
  inputDescription: '',
};

export default FormattedInputDescription;
