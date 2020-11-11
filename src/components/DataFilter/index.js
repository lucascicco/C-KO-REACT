import React, { useRef, useEffect } from 'react';
import ReactDatePicker, { registerLocale } from 'react-datepicker';
import PropTypes from 'prop-types';
import { useField } from '@rocketseat/unform';
import pt from 'date-fns/locale/pt';

import 'react-datepicker/dist/react-datepicker.css';
import './style.css';

registerLocale('pt', pt);

export default function DatePicker({
  name,
  placeholderText,
  onChange,
  value,
  isDisabled,
}) {
  const ref = useRef(null);
  const { fieldName, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'props.selected',
      clearValue: (pickerRef) => {
        pickerRef.clear();
      },
    });
  }, [ref.current, fieldName]); // eslint-disable-line

  return (
    <>
      <ReactDatePicker
        locale="pt"
        name={fieldName}
        selected={value}
        onChange={(date) => onChange(date)}
        ref={ref}
        maxDate={new Date()}
        dateFormat="dd/MM/yyyy"
        placeholderText={placeholderText}
        disabled={isDisabled}
      />
      {error && <span>{error}</span>}
    </>
  );
}

DatePicker.propTypes = {
  name: PropTypes.string.isRequired,
  placeholderText: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string])
    .isRequired,
  isDisabled: PropTypes.bool,
};

DatePicker.defaultProps = {
  isDisabled: false,
};
