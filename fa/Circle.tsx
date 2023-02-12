import React, { forwardRef } from 'react';
import Svg from 'react-native-svg';
import BaseIcon from '../BaseIcon';
import { SvgIconProps } from '../SvgIcon';

const FaCircle = forwardRef<Svg, SvgIconProps>(
  function FaCircle(props, ref){
    return <BaseIcon {...{...props, ref}}>
      {{
        solid: {
          d: 'M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z',
          viewBox: '0 0 512 512'
        },
        regular: {
          d: 'M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200z',
          viewBox: '0 0 512 512'
        },
        light: {
          d: 'M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm216 248c0 118.7-96.1 216-216 216-118.7 0-216-96.1-216-216 0-118.7 96.1-216 216-216 118.7 0 216 96.1 216 216z',
          viewBox: '0 0 512 512'
        }
      }}
    </BaseIcon>
  }
);

export default FaCircle;