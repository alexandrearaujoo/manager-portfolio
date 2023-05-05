'use client';

import {
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  forwardRef,
  useState
} from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: boolean;
  error?: string;
}

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { label, icon, error, ...rest },
  ref
) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleClick = () => setShowPassword(!showPassword);

  const Icon = showPassword ? AiOutlineEyeInvisible : AiOutlineEye;

  return (
    <div className="relative w-[95%] transistion">
      <input
        id={label}
        ref={ref}
        {...rest}
        className={`block px-3 pt-6 pb-1 w-full text-md text-black bg-transparent border-2 ${
          error ? 'border-red-500' : 'border-blue-600'
        } rounded-xl appearance-none focus:outline-none focus:ring-0 peer transition`}
        placeholder=" "
      />
      <label
        htmlFor={label}
        className="absolute flex gap-2 text-md text-black duration-150 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
      >
        {label} {error && <span className="text-red-500"> - {error}</span>}
      </label>
      {icon && (
        <button
          className="absolute right-[5px] bottom-[15px] border-none bg-transparent"
          type="button"
          onClick={handleClick}
        >
          <Icon className="w-5 h-5 text-black" />
        </button>
      )}
    </div>
  );
};

export default forwardRef(Input);
