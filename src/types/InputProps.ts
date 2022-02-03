import { InputHTMLAttributes } from 'react';

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string,
  id?: string,
  name: string,
  className?: string,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
  onClick?: React.MouseEventHandler<HTMLInputElement>,
  placeholder?: string,
  value?: string,
}