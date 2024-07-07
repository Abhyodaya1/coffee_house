/* eslint-disable prettier/prettier */
import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';
import CustomIcon from './CustomIcon';
 interface PaymentMethodProps {
     paymentMode:string;
     name:string;
     icon:any;
     isIcon:boolean;
 }
const PaymentMethod: React.FC<PaymentMethodProps> = ({
    paymentMode,
    name,
    icon,
    isIcon,}
) => {
  return (
    <View  style={[
        styles.PaymentCardContainer,
        {
          borderColor:
            paymentMode == name
              ? COLORS.primaryOrangeHex
              : COLORS.primaryGreyHex,
        },
      ]}>
      {isIcon ? (<LinearGradient 
       start={{x:0,y:0}}
       end={{x:1,y:1}}
       colors={[COLORS.primaryGreyHex,COLORS.primaryBlackHex]}
       style={styles.cont2} >
        <View style={styles.cont3}>
            <CustomIcon name={'wallet'} 
            color={COLORS.primaryOrangeHex}
            size={FONTSIZE.size_30} />
            <Text style={styles.text1}>{name}
            </Text>
        </View>
        <Text style={styles.text2}></Text>
       </LinearGradient>):(<LinearGradient 
       start={{x:0,y:0}}
       end={{x:1,y:1}}
       colors={[COLORS.primaryGreyHex,COLORS.primaryDarkGreyHex]}
       style={styles.contt2} >
        <Image source={icon} style={styles.image1} />
            <Text style={styles.text1}>{name}</Text>
       </LinearGradient>)}
    </View>
  )
}



const styles = StyleSheet.create({
    PaymentCardContainer:{
        borderRadius:BORDERRADIUS.radius_15,
        backgroundColor:COLORS.secondaryGreyHex,
        borderWidth:3,
    },
    cont2:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        padding:SPACING.space_12,
        paddingHorizontal:SPACING.space_12,
        gap:SPACING.space_24,
        borderRadius:BORDERRADIUS.radius_15*2,
    },
    cont3:{
        flexDirection:'row',
        alignItems:'center',
        gap:SPACING.space_24,
    },
    contt2:{
        flexDirection:'row',
        alignItems:'center',
        padding:SPACING.space_12,
        paddingHorizontal:SPACING.space_12,
        gap:SPACING.space_24,
        borderRadius:BORDERRADIUS.radius_15*2,
    },
    text1:{
        fontFamily:FONTFAMILY.poppins_semibold,
        fontSize:FONTSIZE.size_16,
        color: COLORS.primaryWhiteHex
    },
    text2:{
         fontFamily:FONTFAMILY.poppins_regular,
        fontSize:FONTSIZE.size_16,
        color: COLORS.primaryWhiteHex},
    image1:{
        height:SPACING.space_30,
        width: SPACING.space_30},
})
export default PaymentMethod;