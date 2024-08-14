import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from '../../../styles/Register.module.css';

const CustomDatePicker = ({ selectedDate, onChange, open, onClickOutside }: any) => {
  const [startDate, setStartDate] = useState(selectedDate || null);

  const handleChange = (date: any) => {
    setStartDate(date);
    if (onChange) {
      onChange(date);
    }
  };

  return (
    <DatePicker
      onChange={handleChange}
      selected={startDate}
      placeholderText="Chọn ngày sinh"
      dateFormat="dd/MM/yyyy"
      className={`${styles.text_field_width} ${styles.customDatePicker}`}
      open={open}
      onClickOutside={onClickOutside}
    />
  );
};

export default CustomDatePicker;
