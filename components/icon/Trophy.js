import React from 'react';
import { Image } from 'react-native';
import { SvgUri } from 'react-native-svg';

const {uri, width, height} = Image.resolveAssetSource(require('../../assets/icon_trophy.svg'));

function Trophy() {
  return (
    <SvgUri
        width={width}
        height={height}
        uri={uri}
    />
  );
}

export default Trophy;