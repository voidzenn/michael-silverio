import clsx from "clsx";
import React from "react";

interface IBadge extends React.HTMLProps<HTMLSpanElement> {
  className?: string
}

const Badge: React.FC<IBadge> = ({ children, className }) => {
  return (
    <span
      className={clsx(
        'inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs bg-gray-100 text-black text-opacity-55 font-normal',
        className
      )}
    >
      {children}
    </span>
  );
}

export default Badge;
