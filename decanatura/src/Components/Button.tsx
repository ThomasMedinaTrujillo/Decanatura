interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  href?: string;
  target?: string;
  className?: string;
}

export default function Button({
  children,
  variant = 'primary',
  onClick,
  href,
  target,
  className = '',
}: ButtonProps) {
  const baseStyles = 'font-["Plus_Jakarta_Sans:Regular",sans-serif] font-normal leading-[normal] relative shrink-0 text-[20px] text-center text-white whitespace-nowrap';

  const variantStyles = {
    primary: 'bg-black px-[15px] py-[10px]',
    secondary: 'border-[1.5px] border-[rgba(255,255,255,0.8)] border-solid px-[15px] py-[10px]',
  };

  if (href) {
    return (
      <a
        href={href}
        target={target}
        className={`${baseStyles} ${variantStyles[variant]} ${className} cursor-pointer inline-block`}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className} cursor-pointer`}
    >
      {children}
    </button>
  );
}
