interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  href?: string;
  target?: string;
  className?: string;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  href,
  target,
  className = '',
}: ButtonProps) {
  const baseStyles = 'font-normal leading-[normal] relative shrink-0 text-center text-white whitespace-nowrap';

  const variantStyles = {
    primary: 'bg-black px-[15px] py-[10px]',
    secondary: 'border-[1.5px] border-[rgba(255,255,255,0.8)] border-solid px-[15px] py-[10px]',
  };

  const sizeStyles = {
    sm: 'text-[16px] px-3 py-2',
    md: 'text-[20px] px-[15px] py-[10px]',
    lg: 'text-[24px] px-6 py-4',
  };

  if (href) {
    return (
      <a
        href={href}
        target={target}
        className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className} cursor-pointer inline-block`}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className} cursor-pointer`}
    >
      {children}
    </button>
  );
}
