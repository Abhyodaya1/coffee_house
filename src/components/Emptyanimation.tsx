/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'
import { COLORS, FONTFAMILY, FONTSIZE } from '../theme/theme'
interface EmptyanimationProps {
    title: string
}
const Emptyanimation: React.FC<EmptyanimationProps> = ({title}) => {
  return (
    <View style={styles.ecc}>
        <LottieView  style={styles.lvc} source={require('../lottie/coffeecup.json')} 
        autoPlay
        loop/>
      <Text style={styles.lvt}>{title}</Text>
    </View>
  )
}



const styles = StyleSheet.create({
    ecc:{flex:1,
        justifyContent:'center',
    },
    lvc:{
        height: 300,
    },
    lvt:{
        fontFamily:FONTFAMILY.poppins_medium,
        fontSize:FONTSIZE.size_20,
        color:COLORS.primaryOrangeHex,
        textAlign:'center'
    }
})

export default Emptyanimation