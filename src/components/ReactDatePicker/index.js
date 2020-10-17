import React, { useRef, useEffect, useState } from 'react';
import ReactDatePicker from 'react-datepicker';

import { useField } from '@rocketseat/unform';

import 'react-datepicker/dist/react-datepicker.css';
import './style.css';

export default function DatePicker({ name, placeholderText }) {
  const ref = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [selected, setSelected] = useState(defaultValue);

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
        selected={selected}
        onChange={(date) => setSelected(date)}
        locale="pt-BR"
        ref={ref}
        maxDate={new Date()}
        dateFormat="dd/MM/yyyy"
        placeholderText={placeholderText}
      />
      {error && <span>{error}</span>}
    </>
  );
}
