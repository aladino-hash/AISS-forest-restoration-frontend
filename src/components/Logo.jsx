import React from 'react';

interface LogoProps {
  height?: number;
  variant?: 'light' | 'dark';
}

const Logo: React.FC<LogoProps> = ({ height = 40 }) => {
  return (
    <img
      src="/images/logo.png"
      alt="Fynos AI Logo"
      style={{
        height: `${height}px`,
        width: 'auto',
        display: 'block',
      }}
    />
  );
};

export default Logo;