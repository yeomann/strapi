import React from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import { FormattedMessage } from 'react-intl';
import { InputsIndex } from 'strapi-compo';
import FormattedErrors from './FormattedErrors';
import FormattedInputDescription from './FormattedInputDescription';
import FormattedLabel from './FormattedLabel';
import FormattedPlaceholder from './FormattedPlaceholder';

function generateMessageId({ id, name, value }) {
  if (!isEmpty(id)) {
    return id;
  }

  if (!isEmpty(name)) {
    return name;
  }

  // NOTE: Some plugins uses name to set i18n
  return value; 
}

const translatedErrors = {
  email: <FormattedMessage id="components.Input.error.validation.email" />,
  json: <FormattedMessage id="components.Input.error.validation.json" />,
  max: <FormattedMessage id="components.Input.error.validation.max" />,
  maxLength: <FormattedMessage id="components.Input.error.validation.maxLength" />,
  min: <FormattedMessage id="components.Input.error.validation.min" />,
  minLength: <FormattedMessage id="components.Input.error.validation.minLength" />,
  required: <FormattedMessage id="components.Input.error.validation.required" />,
  regex: <FormattedMessage id="components.Input.error.validation.regex" />,
};

const formatWithOptions = (options) => {
  return options.map((option) => {
    const messageId = generateMessageId(option);

    return (
      <FormattedMessage id={messageId} key={messageId} defaultMessage={messageId} values={option.params}>
        {msg  => <option value={option.value}>{msg}</option>}
      </FormattedMessage>
    );
  });
};

function Inputs({ errors, inputDescription, label, noErrorsDescription, placeholder, selectOptions, ...rest}) {
  const inputSelectOptions = typeof selectOptions === 'object' ? formatWithOptions(selectOptions) : selectOptions;

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
                              options={inputSelectOptions}
                              label={label}
                              placeholder={placeholder}
                              translatedErrors={translatedErrors}
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