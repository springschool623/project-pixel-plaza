import React, { useState } from 'react';
import styles from '../../../styles/CustomDropdownList.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

interface Option {
  value: string;
  label: string;
}

interface CustomDropdownProps {
  options: Option[];
  onChange: (value: string) => void;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({ options, onChange }) => {
  const [selected, setSelected] = useState<Option>(options[0]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleSelect = (option: Option) => {
    setSelected(option);
    setIsOpen(false);
    onChange(option.value);
  };

  return (
    <div className={styles.dropdown}>
      <div className={styles.dropdownSelected} onClick={() => setIsOpen(!isOpen)}>
        {selected.label}
        <FontAwesomeIcon icon={faAngleDown}/>
      </div>
      {isOpen && (
        <div className={styles.dropdownOptions}>
          {options.map((option) => (
            <div
              key={option.value}
              className={styles.dropdownOption}
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
