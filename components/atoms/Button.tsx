import { forwardRef } from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { Text } from './Text';

type ButtonProps = {
  title: string;
} & TouchableOpacityProps;

export const Button = forwardRef<TouchableOpacity, ButtonProps>(
  ({ title, ...touchableProps }, ref) => {
    return (
      <TouchableOpacity
        ref={ref}
        {...touchableProps}
        className={`items-center justify-center rounded-[28px] bg-primary p-4 shadow-md ${touchableProps.className}`}>
        <Text className="text-center text-lg font-semibold text-white">{title}</Text>
      </TouchableOpacity>
    );
  }
);
