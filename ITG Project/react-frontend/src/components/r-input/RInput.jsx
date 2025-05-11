import React from 'react';
import { Controller } from 'react-hook-form';
import { rInputPropTypes, defaultRInputPropTypes } from '@common/PropTypes';

const RInput = ({
  name,
  control,
  rules = {},
  label = '',
  type = 'text',
  readOnly = false,
  form,
  className = '',
  disabled = false,
  ...rest
}) => {
  return (
    <div className="mb-5">
      <div className="flex items-center gap-4">
        <Controller
          name={name}
          control={control}
          rules={rules}
          render={({ field, fieldState: { error } }) => (
            <div className="flex flex-col flex-1">
              {type !== 'checkbox' && label && (
                <div className="flex items-center gap-2">
                  <label
                    htmlFor={name}
                    className="w-32 text-sm font-medium text-gray-700"
                  >
                    {label}
                  </label>
                  <input
                    {...field}
                    id={name}
                    type={type}
                    readOnly={readOnly}
                    disabled={disabled}
                    form={form}
                    className={`w-full px-3 py-2 border rounded-lg shadow-sm transition focus:outline-none focus:ring-2 ${
                      error
                        ? 'border-red-500 focus:ring-red-400'
                        : 'border-gray-300 focus:ring-blue-500'
                    } ${className}`}
                    value={field.value || ''}
                    {...rest}
                  />
                </div>
              )}

              {type === 'checkbox' && (
                <div className="flex items-center gap-52">
                  <label
                    htmlFor={name}
                    className="text-sm font-medium text-gray-700"
                  >
                    {label}
                  </label>
                  <input
                    {...field}
                    id={name}
                    type={type}
                    readOnly={readOnly}
                    disabled={disabled}
                    form={form}
                    className={`h-4 w-4  text-blue-600 border-gray-300 rounded focus:ring-blue-500 ${
                      error ? 'border-red-500 focus:ring-gray-400' : ''
                    } ${className}`}
                    checked={field.value || false}
                    {...rest}
                  />
                </div>
              )}

              {error && (
                <p className="text-red-500 text-xs mt-1">{error.message}</p>
              )}
            </div>
          )}
        />
      </div>
    </div>
  );
};

RInput.propTypes = rInputPropTypes;
RInput.defaultProps = defaultRInputPropTypes;

export default RInput;
