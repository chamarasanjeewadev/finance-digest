import * as React from 'react';
import Svg, { Rect, Path } from 'react-native-svg';

interface RightCircleSvgProps {
  width?: number;
  height?: number;
  backgroundFill?: string;
  arrowFill?: string;
  [key: string]: any;
}

const RightCircleSvg: React.FC<RightCircleSvgProps> = ({
  width = 64,
  height = 64,
  backgroundFill = '#523AE4',
  arrowFill = '#FAFAFA',
  ...props
}) => (
  <Svg width={width} height={height} viewBox="0 0 64 64" fill="none" {...props}>
    <Rect x={4} y={2} width={56} height={56} rx={28} fill={backgroundFill} />
    <Path
      d="M26.918 20.87a1.334 1.334 0 0 0 0 1.803l7.46 7.33-7.459 7.328a1.334 1.334 0 0 0 0 1.801 1.334 1.334 0 0 0 1.769.001L38 30l-9.311-9.131a1.334 1.334 0 0 0-1.771.001Z"
      fill={arrowFill}
    />
  </Svg>
);

export default RightCircleSvg;
