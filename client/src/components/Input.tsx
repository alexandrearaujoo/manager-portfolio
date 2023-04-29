'use client';

import {
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  forwardRef,
  useState
} from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { FieldErrors } from 'react-hook-form';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: boolean;
  error?: any;
}

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { label, icon, error, ...rest },
  ref
) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleClick = () => setShowPassword(!showPassword);

  const Icon = showPassword ? AiOutlineEyeInvisible : AiOutlineEye;

  if (icon) {
    return (
      <div className="relative w-[80%]">
        <input
          id={label}
          ref={ref}
          {...rest}
          type={showPassword ? 'text' : 'password'}
          className="block px-1 pt-6 pb-1 w-full text-md text-white bg-transparent border-b-[1px] border-b-blue-600 appearance-none focus:outline-none focus:ring-0 peer"
          placeholder=" "
        />
        <label
          htmlFor={label}
          className="absolute text-md text-white duration-150 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
        >
          {label}
        </label>
        <button
          className="absolute right-[5px] bottom-[5px] border-none bg-transparent"
          type="button"
          onClick={handleClick}
        >
          <Icon className="w-5 h-5 text-white" />
        </button>
      </div>
    );
  }

  return (
    <div className="relative w-[80%]">
      <input
        id={label}
        ref={ref}
        {...rest}
        className="block px-1 pt-6 pb-1 w-full text-md text-white bg-transparent border-b-[1px] border-b-blue-600 appearance-none focus:outline-none focus:ring-0 peer"
        placeholder=" "
      />
      <label
        htmlFor={label}
        className="absolute text-md text-white duration-150 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
      >
        {label}
      </label>
    </div>
  );
};

export default forwardRef(Input);
