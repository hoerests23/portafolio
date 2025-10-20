interface InputProps {
  type?: 'text' | 'email' | 'textarea';
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  rows?: number;
}

export function Input({ type = 'text', placeholder, value, onChange, required, rows }: InputProps) {
  const baseStyle = {
    width: '100%',
    padding: '16px 20px',
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '8px',
    color: '#fff',
    fontSize: '16px',
    fontFamily: 'inherit',
    transition: 'all 0.3s ease',
    outline: 'none'
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
  };

  if (type === 'textarea') {
    return (
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        rows={rows || 5}
        style={baseStyle}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    );
  }

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      required={required}
      style={baseStyle}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  );
}