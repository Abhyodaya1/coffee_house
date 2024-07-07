/* eslint-disable prettier/prettier */
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';
interface PriceProps {
  price: string;
  currency: string;
}
interface PaymentFooterProps {
  price: PriceProps;
  buttonPressHandler: any;
  buttontitle: string;
}
const PaymentFooter: React.FC<PaymentFooterProps> = ({
  price,
  buttonPressHandler,
  buttontitle,
}) => {
  return (
    <View style={styles.pricefooter}>
        <View style={styles.PriceContainer}>
        <Text style={styles.pt}>Price</Text>
        <Text style={styles.pricetext}>{price.currency}<Text style={styles.prize}>{price.price}</Text></Text>
        </View>
      <TouchableOpacity style ={styles.pb} onPress={()=>buttonPressHandler()}>
        <Text style={styles.bt}>{buttontitle}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    pricefooter:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        gap:SPACING.space_20,
        padding:SPACING.space_20
    },
    PriceContainer:{
        alignItems:'center',
        width: 100
    },
    pt:{
        fontFamily:FONTFAMILY.poppins_semibold,
        fontSize:FONTSIZE.size_14,
        color: COLORS.primaryLightGreyHex
    },
    pricetext:{
        fontFamily:FONTFAMILY.poppins_semibold,
        fontSize:FONTSIZE.size_24,
        color: COLORS.primaryOrangeHex
    },
    prize:{ color: COLORS.primaryWhiteHex},
    pb:{
        flex:1,
        height:SPACING.space_30*2,
        borderRadius:BORDERRADIUS.radius_25,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:COLORS.primaryOrangeHex,
    },
    bt:{
        fontFamily:FONTFAMILY.poppins_semibold,
        fontSize:FONTSIZE.size_18,
        color: COLORS.primaryWhiteHex
    },
    
});
export default PaymentFooter;
