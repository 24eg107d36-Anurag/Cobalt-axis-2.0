import React from 'react';

interface GlitchTextProps {
  children: string;
  speed?: number;
  enableShadows?: boolean;
  enableOnHover?: boolean;
  className?: string;
}

const GlitchText: React.FC<GlitchTextProps> = ({
  children,
  speed = 1,
  enableShadows = true,
  enableOnHover = true,
  className = '',
}) => {
  const classes = [
    'glitch-text',
    enableShadows ? 'glitch-shadows' : '',
    enableOnHover ? 'glitch-on-hover' : '',
    className
  ].filter(Boolean).join(' ');

  const style = {
    '--glitch-speed': `${speed}s`,
  } as React.CSSProperties;

  return (
    <div className={classes} style={style} data-text={children}>
      {children}
    </div>
  );
};

export default GlitchText;
