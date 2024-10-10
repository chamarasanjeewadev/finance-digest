import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';
import { TextInput as RNTextInput, TextInputProps as RNTextInputProps } from 'react-native';

import { cn } from '../../utils/utils';

const textInputVariants = cva('bg-white rounded-md p-2 border-b', {
  variants: {
    variant: {
      default: 'border-gray-300',
      error: 'border-red-500',
    },
    size: {
      default: 'text-base',
      sm: 'text-sm',
      lg: 'text-xl',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

interface TextInputProps extends RNTextInputProps, VariantProps<typeof textInputVariants> {}

export const TextInput: React.FC<TextInputProps> = ({
  variant,
  size,
  style,
  className,
  ...props
}) => {
  const variantClasses = textInputVariants({ variant, size });
  const combinedClassName = cn(variantClasses, className);

  return <RNTextInput className={combinedClassName} style={style} {...props} />;
};
