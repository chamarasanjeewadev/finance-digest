import React from 'react';
import { View, ViewProps } from 'react-native';
import { twMerge } from 'tailwind-merge';

interface ContainerProps extends ViewProps {
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({ children, className, style, ...props }) => {
  return (
    <View className={twMerge('flex-1 ', className)} style={style} {...props}>
      {children}
    </View>
  );
};
