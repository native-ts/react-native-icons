import React, { forwardRef } from 'react';
import { StyleSheet } from 'react-native';
import { G, Path, Svg, SvgProps } from 'react-native-svg';
import IconSize from './IconSize';
import IconType from './IconType';

type SvgBaseProps = Omit<SvgProps, 'width' | 'height' | 'children'>

export interface SvgIconProps extends Partial<SvgBaseProps>{
  size?: keyof typeof IconSize | number;
  color?: string;
  strokeWidth?: number;
  type?: keyof typeof IconType;
}

type SvgBaseIconProps = Omit<SvgIconProps, 'type'> & { d?: string; };

const SvgIcon = forwardRef<Svg, SvgBaseIconProps>(
  function SvgIcon(props, ref){

    const {
      size = 'sm',
      color = '#495057',
      strokeWidth = StyleSheet.hairlineWidth,
      d,
      disabled,
      ...rest
    } = props;

    const iconSize = typeof size === 'string' ? IconSize[size] : size;

    if (!d) return null;

    return (
      <Svg
        {...rest}
        ref={ref}
        width={iconSize}
        height={iconSize}
        disabled={disabled}
        style={[
          { opacity: disabled ? 0.7 : 1 },
          rest.style
        ]}
      >
        <G fill={color} stroke={color} strokeWidth={strokeWidth}>
          <Path d={d} />
        </G>
      </Svg>
    );
  }
);

export const defaultProps: Partial<SvgIconProps> = {
  type: 'regular'
}

export default SvgIcon;
