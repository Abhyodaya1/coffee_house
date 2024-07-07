/* eslint-disable prettier/prettier */
import { Image, ImageProps, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme'
interface OrderitemProps{
    type:string
            name:string
            imagelink_square:ImageProps
            special_ingredient:string
            prices:any
            ItemPrice:string}
const Orderitemcard: React.FC<OrderitemProps> = ({
    type,
    name,
    imagelink_square,
    special_ingredient,
    prices,
    ItemPrice,
}) => {
  return (
   <LinearGradient start={{x:0,y:0}}
   end={{x:1,y:1}}
   colors={[COLORS.primaryGreyHex,COLORS.primaryBlackHex]}
   style={styles.cardlineargradient}>
  <View style={styles.cardinfocontainer}>
    <View style={styles.infocontainer}>
        <Image source={imagelink_square} style={styles.image}/>
 <View>
    <Text style={styles.cardtitle}>{name}</Text>
    <Text style={styles.cardsubtitle}>{special_ingredient}</Text>
 </View>
    </View>
    <View>
        <Text style={styles.cardcurrency}>
            $<Text style={styles.cardprice}>{ItemPrice}</Text>
        </Text>
    </View>
  </View>
  {prices.map((data:any,index:any)=>(
    <View key={index.toString()} style={styles.cardtablerow}>
        <View style={styles.cardtablerow}>
            <View style={styles.sizeboxleft}>
                <Text style={[styles.sizetext , {
                    fontSize:type=="Bean"?FONTSIZE.size_12:FONTSIZE.size_16
                }]}>{data.size}</Text>
            </View>
            <View style={styles.priceboxright}>
                <Text style={styles.pricecurrency}>{data.currency}<Text style={styles.price}> {data.price}</Text></Text>
            </View>
        </View>
        <View style={styles.cardtablerow}>
           <Text style={styles.cardquantitypricecurrency}> X <Text style={styles.price}>{data.quantity}</Text></Text> 
           <Text style={styles.cardquantitypricetext}>${(data.quantity*data.price).toFixed(2).toString()}</Text>
        </View>
    </View>
  ))}
   </LinearGradient>
  )
}



const styles = StyleSheet.create({
    cardlineargradient:{
        gap: SPACING.space_20,
        padding: SPACING.space_20,
        borderRadius: BORDERRADIUS.radius_25,
    },
    cardinfocontainer:{
        flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    },
    infocontainer:{
        flexDirection: 'row',
        gap: SPACING.space_20,
        alignItems: 'center',
    },
    image:{
        height: 90,
    width: 90,
    borderRadius: BORDERRADIUS.radius_15, 
    },
    cardtitle:{
        fontFamily: FONTFAMILY.poppins_medium,
        fontSize: FONTSIZE.size_18,
        color: COLORS.primaryWhiteHex,
    },
    cardsubtitle:{
        fontFamily: FONTFAMILY.poppins_regular,
        fontSize: FONTSIZE.size_12,
        color: COLORS.secondaryLightGreyHex,
    },
    cardcurrency:{
        fontFamily: FONTFAMILY.poppins_semibold,
        fontSize: FONTSIZE.size_20,
        color: COLORS.primaryOrangeHex,
    },
    cardprice:{
        color: COLORS.primaryWhiteHex,
    },
    cardtablerow:{ flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',},
    sizeboxleft:{ backgroundColor: COLORS.primaryBlackHex,
        height: 45,
        flex: 1,
        borderTopLeftRadius: BORDERRADIUS.radius_10,
        borderBottomLeftRadius: BORDERRADIUS.radius_10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 1,
        borderRightColor: COLORS.primaryGreyHex,},
    priceboxright:{ backgroundColor: COLORS.primaryBlackHex,
        height: 45,
        flex: 1,
        borderTopRightRadius: BORDERRADIUS.radius_10,
        borderBottomRightRadius: BORDERRADIUS.radius_10,
        justifyContent: 'center',
        alignItems: 'center',
        borderLeftWidth: 1,
        borderLeftColor: COLORS.primaryGreyHex,},
    pricecurrency:{
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_18,
    color: COLORS.primaryOrangeHex,
    },
    price:{
        color: COLORS.primaryWhiteHex,
    },
    cardquantitypricecurrency:{
        flex: 1,
        textAlign: 'center',
        fontFamily: FONTFAMILY.poppins_semibold,
        fontSize: FONTSIZE.size_18,
        color: COLORS.primaryOrangeHex,
    },
 cardquantitypricetext:{
    flex: 1,
    textAlign: 'center',
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_18,
    color: COLORS.primaryOrangeHex,
 },
 sizetext:{
    fontFamily: FONTFAMILY.poppins_medium,
    color: COLORS.secondaryLightGreyHex,
 },

})
export default Orderitemcard