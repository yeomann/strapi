import React from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import { InputsIndex } from 'strapi-compo';
import FormattedErrors from './FormattedErrors';
import FormattedInputDescription from './FormattedInputDescription';
import FormattedLabel from './FormattedLabel';
import FormattedPlaceholder from './FormattedPlaceholder';


function Inputs({ errors, inputDescription, label, noErrorsDescription, placeholder, ...rest}) {
  return (
    <FormattedLabel label={label}>
      {label => {
        return (
          <FormattedPlaceholder placeholder={placeholder}>
            {placeholder => {

              return (
                <FormattedErrors errors={errors}>
                  {errorMessage => {
                    
                    return (
                      <FormattedInputDescription inputDescription={inputDescription}>
                        {msg => {

                          return (
                            <InputsIndex
                              error={!isEmpty(errorMessage)}
                              errorMessage={noErrorsDescription ? '' : errorMessage}
                              inputDescription={msg}

                              label={label}
                              placeholder={placeholder}
                              {...rest}
                            />
                          );
                        }}
                      </FormattedInputDescription>
                    );
                  }}
                </FormattedErrors>
              );
            }}
          </FormattedPlaceholder>
        );
      }}

    </FormattedLabel>
  );
}

Inputs.propTypes = {
  errors: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string,
  ]),
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
  errors: '',
  label: {
    id: 'app.utils.defaultMessage',
  },
  placeholder: 'app.utils.defaultMessage',
};

export default Inputs;