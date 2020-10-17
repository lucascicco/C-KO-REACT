/* eslint-disable no-nested-ternary */
import React, { useRef, useEffect } from 'react';
import Select from 'react-select';

import { useField } from '@rocketseat/unform';

const customStyles = {
  container: (base) => ({
    ...base,
    width: '100%',
    height: 36,
    minHeight: 36,
    marginBottom: 10,
  }),
  control: (base) => ({
    ...base,
    width: 315,
    height: 36,
    minHeight: 36,
    backgroundColor: '#37474f',
    borderRadius: 4,
    border: 'none',
    cursor: 'pointer',
    color: '#fff',
  }),
  placeholder: (base) => ({
    ...base,
    color: 'rgba(255, 255, 255, 0.7)',
    marginLeft: 10,
  }),
  option: (provided, state) => ({
    color: state.isSelected ? 'white' : state.isFocused ? 'white' : 'black',
    backgroundColor: state.isSelected
      ? '#42a5f5'
      : state.isFocused
      ? '#90caf9'
      : 'white',
    padding: 10,
    cursor: 'pointer',
  }),
  singleValue: () => ({
    color: '#fff',
    marginLeft: 10,
  }),
  valueContainer: (base) => ({
    ...base,
    padding: 10,
    paddingLeft: 2,
    height: 36,
    lineHeight: 36,
  }),
  dropdownIndicator: (base) => ({
    ...base,
    color: '#fff',
  }),
};

export default function ReactSelect({
  name,
  label,
  options,
  multiple,
  ...rest
}) {
  const ref = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  function parseSelectValue(selectRef) {
    const selectValue = selectRef.state.value;
    if (!multiple) {
      return selectValue ? selectValue.id : '';
    }

    return selectValue ? selectValue.map((option) => option.id) : [];
  }

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'state.value',
      parseValue: parseSelectValue,
      clearValue: (selectRef) => {
        selectRef.select.clearValue();
      },
    });
  }, [ref.current, fieldName]); // eslint-disable-line

  function getDefaultValue() {
    if (!defaultValue) return null;

    if (!multiple) {
      return options.find((option) => option.id === defaultValue);
    }

    return options.filter((option) => defaultValue.includes(option.id));
  }

  return (
    <>
      {label && <label htmlFor={fieldName}>{label}</label>}

      <Select
        name={fieldName}
        aria-label={fieldName}
        options={options}
        isMulti={multiple}
        defaultValue={getDefaultValue()}
        ref={ref}
        getOptionValue={(option) => option.id}
        getOptionLabel={(option) => option.title}
        styles={customStyles}
        {...rest}
      />

      {error && <span>{error}</span>}
    </>
  );
}