import React, { forwardRef } from 'react';
import Svg from 'react-native-svg';
import IconType from './IconType';
import SvgIcon, { SvgIconProps } from './SvgIcon';

export interface BaseIconProps extends Partial<Omit<SvgIconProps, 'viewBox'>>{
  children: {
    [x in keyof typeof IconType]: {
      d: string;
      viewBox: string;
    };
  }
}

const BaseIcon = forwardRef<Svg, BaseIconProps>(
  function BaseIcon(props, ref){

    const { type, children, ...rest } = props;
    const icon = children[type!];

    return <SvgIcon
      {...rest}
      ref={ref}
      d={icon.d}
      viewBox={icon.viewBox}
    />
  }
);

BaseIcon.defaultProps = {
  type: 'regular'
}

export default BaseIcon;