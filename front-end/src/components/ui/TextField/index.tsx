import {
  InputHTMLAttributes,
  TextareaHTMLAttributes,
  SelectHTMLAttributes,
  ReactNode
} from 'react';
import styles from './styles.module.scss';

import { BsImage } from 'react-icons/bs';
import Image from 'next/image';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  text?: string;
  filePreview?: string;
}

export function Input({ text, filePreview, ...rest }: InputProps) {
  if (rest.type === 'file') {
    return(
      <label className={styles.labelInputFile}>
        {filePreview && (
          <Image
            className={styles.labelInputimage}
            src={filePreview}
            alt="Foto do produto"
            width="800"
            height="228"
            layout="fixed"
            objectFit="cover"
            objectPosition="center"
          />
        )}
        
        <span>
          <BsImage color="#000000" size={24} />
          {text}
        </span>
  
        <input
          type="file"
          {...rest}
        />
      </label>
    );
  } else {
    return(
      <input className={styles.textField} {...rest} />
    );
  }
}

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{}

export function TextArea({ ...rest }: TextAreaProps) {
  return(
    <textarea className={styles.textArea} {...rest}></textarea>
  );
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement>{
  children: ReactNode;
}

export function Select({ children, ...rest }: SelectProps) {
  return(
    <select className={styles.textField} {...rest}>
      {children}
    </select>
  );
}