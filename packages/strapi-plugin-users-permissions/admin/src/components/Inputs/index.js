import React from 'react';
import PropTypes from 'prop-types';
import InputsIndex from 'strapi-compo';
import FormattedLabel from './FormattedLabel';
import FormattedPlaceholder from './FormattedPlaceholder';


function Inputs({ label, placeholder, ...rest}) {
  return (
    <FormattedLabel label={label}>
      {label => {
        return (
          <FormattedPlaceholder placeholder={placeholder}>
            {placeholder => {

              return (
                <InputsIndex label={label} placeholder={placeholder} {...rest} />
              );
            }}
          </FormattedPlaceholder>
        );
      }}

    </FormattedLabel>
  );
}

Inputs.propTypes = {
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  placeholder: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
  ]),
};

Inputs.defaultProps = {
  label: {
    id: 'app.utils.defaultMessage',
  },
  placeholder: 'app.utils.defaultMessage',
};

export default Inputs;