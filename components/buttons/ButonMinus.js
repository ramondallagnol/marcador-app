import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { SvgUri } from 'react-native-svg';

const {uri, width, height} = Image.resolveAssetSource(require('../../assets/icon_minus.svg'));

function ButtonMinus({ decrement }) {
  return (
    <TouchableOpacity onPress={decrement}>
        <SvgUri
          width={width}
          height={height}
          uri={uri}
        />
    </TouchableOpacity>    
  );
}

export default ButtonMinus;