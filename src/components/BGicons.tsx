import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BORDERRADIUS, SPACING} from '../theme/theme';
import CustomIcon from './CustomIcon';

interface BGiconsProps {
  name: string;
  color: string;
  size: number;
  BGcolor: string;
}
const BGicons: React.FC<BGiconsProps> = ({name, color, size, BGcolor}) => {
  return (
    <View style={[styles.iconbg, {backgroundColor: BGcolor}]}>
      <CustomIcon name={name} color={color} size={size} />
    </View>
  );
};

const styles = StyleSheet.create({
  iconbg: {
    height: SPACING.space_20,
    width: SPACING.space_30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: BORDERRADIUS.radius_8,
  },
});
export default BGicons;
