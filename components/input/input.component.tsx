import { InputHTMLAttributes, RefForwardingComponent, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  placeholder?: string;
}

const FowardInput: RefForwardingComponent<HTMLInputElement, InputProps> = ({ name, label, placeholder, ...props }, ref) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        ref={ref}
        {...props}
      />
    </div>
  )
}

export const Input = forwardRef(FowardInput);
