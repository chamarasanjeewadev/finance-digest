import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';
import { Text as RNText, TextProps as RNTextProps } from 'react-native';

import { cn } from '../../utils/utils';

const textVariants = cva('text-text font-roboto', {
  variants: {
    variant: {
      default: '',
      bold: 'font-bold text-black',
      semibold: 'font-semibold',
    },
    size: {
      default: 'text-base',
      sm: 'text-sm',
      lg: 'text-lg',
      xl: 'text-xl',
      xxl: 'text-2xl',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

interface TextProps extends RNTextProps, VariantProps<typeof textVariants> {}

export const Text: React.FC<TextProps> = ({
  children,
  variant,
  size,
  style,
  className,
  ...props
}) => {
  const variantClasses = textVariants({ variant, size });
  const combinedClassName = cn(variantClasses, className);

  return (
    <RNText className={combinedClassName} style={style} {...props}>
      {children}
    </RNText>
  );
};
