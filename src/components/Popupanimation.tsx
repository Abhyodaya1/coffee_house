/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../theme/theme';
import LottieView from 'lottie-react-native';
interface popupnimationProps{
    style:any;
    source:any;
}
const Popupanimation: React.FC<popupnimationProps> = ({style,source}) => {
  return (
    <View style={styles.animation1}>
      <LottieView style={style} source={source}
      autoPlay loop={false}/>
    </View>
  )
}


const styles = StyleSheet.create({
    animation1:{flex:1,
position:'absolute',
top:0,
bottom:0,
left:0,
right:0,
zIndex:1000,
backgroundColor:COLORS.primaryBlackRGBA,
justifyContent:'center'
    },
})
export default Popupanimation
