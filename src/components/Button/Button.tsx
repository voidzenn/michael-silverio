import React from 'react';
import clsx from 'clsx';

interface IButton extends React.HTMLProps<HTMLButtonElement> {
  variant?: 'ghost'
  className?: string
  onClick?: () => void;
}

const Button: React.FC<IButton> = ({ children, variant, className, onClick }) => {
  const ghostButtonStyle = () => {
    return '123';
  };

  const buttonVariant = () => {
    let style = '';

    switch (variant) {
      case 'ghost':
        style = ghostButtonStyle();
        break;
      default:
        break;
    }

    return style;
  };

  return (
    <button
      className={clsx(
        'hover:bg-gray-100 px-3 py-2 rounded-md',
        buttonVariant,
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
