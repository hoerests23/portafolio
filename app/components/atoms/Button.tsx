interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
}

export function Button({ children, onClick, type = 'button', disabled }: ButtonProps) {
  const buttonStyle = {
    padding: '16px 40px',
    background: disabled ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '8px',
    color: disabled ? '#666' : '#fff',
    fontSize: '16px',
    fontWeight: '600',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'all 0.3s ease',
    fontFamily: 'inherit'
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled) {
      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
      e.currentTarget.style.transform = 'translateY(-2px)';
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled) {
      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
      e.currentTarget.style.transform = 'translateY(0)';
    }
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={buttonStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </button>
  );
}