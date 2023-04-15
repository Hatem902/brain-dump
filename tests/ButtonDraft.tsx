import { ButtonHTMLAttributes, FC, forwardRef } from 'react';

interface ButtonLocalProps {
  size?: string;
  className?: string;
}

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonLocalProps {}

function buttonStyle({ size, className }: ButtonLocalProps) {
  let cl = className;
  switch (size) {
    case 'lg':
      cl += ' text-lg px-3 py-1.5';
      break;
    case 'md':
      cl += ' text-md px-2 py-1 ';
      break;
    case 'sm':
      cl += ' text-sm px-1 py-o.5';
      break;
    default:
      cl += ' text-md px-2 py-1 ';
      break;
  }
  return cl;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ size, className, ...props }, ref) => {
    return (
      <button
        className={`${buttonStyle({ size, className })}`}
        {...props}
        ref={ref}
      >
        Button
      </button>
    );
  }
);

export default Button;
