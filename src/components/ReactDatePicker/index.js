import React, { useRef, useEffect } from 'react';
import ReactDatePicker from 'react-datepicker';
import PropTypes from 'prop-types';
import { useField } from '@rocketseat/unform';

import 'react-datepicker/dist/react-datepicker.css';
import './style.css';

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
        name={fieldName}
        selected={value}
        onChange={(date) => onChange(date)}
        locale="pt-BR"
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
