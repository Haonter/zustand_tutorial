import React from 'react';
import styles from '@/styles/styles';

interface InputProps {
  tipo: string;
  contenido?: string;
  placeholder?: string;
  id?: string;
  ref?: React.Ref<HTMLInputElement>;
  name?: string;
}

const Input = ({ tipo, contenido, placeholder, id, name, ref }: InputProps) => {
  return (
    <input
      className={styles.input}
      type={tipo}
      defaultValue={contenido}
      placeholder={placeholder}
      id={id}
      name={name}
      ref={ref}
    />
  );
};

export default Input;