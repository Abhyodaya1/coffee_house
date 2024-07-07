/* eslint-disable prettier/prettier */

import {Image, ImageProps, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';
import CustomIcon from './CustomIcon';
interface CartitemProps {
  id: string;
  roasted: string;
  name: string;
  special_ingredient: string;
  imagelink_square: ImageProps;
  prices: any;
  type: string;
  incrementCartItemQuantityHandler: any;
  decrementCartItemQuantityHandler: any;
}
const Cartitem: React.FC<CartitemProps> = ( { id,roasted,type,prices,special_ingredient,imagelink_square,name,incrementCartItemQuantityHandler,decrementCartItemQuantityHandler}) => {
    if (!prices || !Array.isArray(prices)) {
         console.error('prices is not an array', prices);
         return null; 
       } 
  return (
    <View>{prices.length != 1 ? (<LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
    colors={[COLORS.primaryGreyHex,COLORS.primaryBlackHex]}
    style={styles.cilg}>
        <View style={styles.cartitem}>
            < Image source ={imagelink_square} style={styles.imagesource} />
            <View style={styles.iteminfo}>
            <View>
                <Text style={styles.textinfo}>{name}</Text>
                <Text style={styles.siinfo}>{special_ingredient}</Text>
                </View>
                <View style={styles.cartiteminfo}>
                    <Text style={styles.rt}>{roasted}</Text>
                </View>
            </View>
        </View>
         {prices.map((data:any,index:any)=>(
            <View key={index.toString()}
             style={styles.cirow}>
                <View style={styles.cirowinfo}>
                    <View style={styles.sizebox}>
                        <Text style={[styles.textsize,{ fontSize: type =='Bean' ? FONTSIZE.size_12: FONTSIZE.size_16}]}>{data.size}</Text>
                    </View>
                     <Text style={styles.textsize2}>{data.currency}<Text style={styles.textsize3}> {data.price}</Text></Text>
                </View>
                <View style={styles.cirowinfo}>
                    <TouchableOpacity style={styles.buttoninfo} onPress={()=>{decrementCartItemQuantityHandler(id,data.size)}}>
                        <CustomIcon name="minus"
                         color={COLORS.primaryWhiteHex}
                         size={FONTSIZE.size_10}/>
                    </TouchableOpacity>
<View style={styles.quantityinfo}>
    <Text style={styles.qt}>{data.quantity}</Text>
</View>
                    <TouchableOpacity style={styles.buttoninfo} onPress={()=>{incrementCartItemQuantityHandler(id,data.size)}}>
                        <CustomIcon name="add"
                         color={COLORS.primaryWhiteHex}
                         size={FONTSIZE.size_10}/>
                    </TouchableOpacity>
                </View>
            </View>
    
        ))}
     </LinearGradient> ):  (<LinearGradient
    start={{x:0,y:0}}
    end={{x:1,y:1}}
    colors={[COLORS.primaryGreyHex,COLORS.primaryBlackHex]}
    style={styles.cislg} >
        <View>
            <Image source={imagelink_square}
             style={styles.ic} />
            </View>
            <View style={styles.ciinfo}>
            <View>
                <Text style={styles.textinfo}>{name}</Text>
                <Text style={styles.siinfo}>{special_ingredient}</Text>
            </View>
            <View style={styles.cartitemsingle}>
                <View style={styles.sizebox}>
                    <Text style={[styles.textsize,{ fontSize: type=='Bean' ? FONTSIZE.size_12: FONTSIZE.size_16}]}>{prices[0].size}</Text>
                </View>
                <Text style={styles.textsize2}>{prices[0].currency}<Text style={styles.textsize3}> {prices[0].price}</Text></Text>
            </View>
            <View style={styles.cc}>
                    <TouchableOpacity style={styles.buttoninfo} onPress={()=>{decrementCartItemQuantityHandler(id,prices[0].size)}}>
                        <CustomIcon name="minus"
                         color={COLORS.primaryWhiteHex}
                         size={FONTSIZE.size_10}/>
                    </TouchableOpacity>
<View style={styles.quantityinfo}>
    <Text style={styles.qt}>{prices[0].quantity}</Text>
</View>
                    <TouchableOpacity style={styles.buttoninfo} onPress={()=>{incrementCartItemQuantityHandler(id,prices[0].size)}}>
                        <CustomIcon name="add"
                         color={COLORS.primaryWhiteHex}
                         size={FONTSIZE.size_10}/>
                    </TouchableOpacity>
                </View>
        </View>
    </LinearGradient>)
}
</View>    
  );
};

const styles = StyleSheet.create({
    cilg:{
        flex:1,
        gap: SPACING.space_12,
        padding: SPACING.space_12,
        borderRadius:BORDERRADIUS.radius_20,
    },
    cartitem:{
        flexDirection:'row',
        gap: SPACING.space_12,
        flex:1,
    },
    imagesource:{
        height:130,
        width:130,
        borderRadius: BORDERRADIUS.radius_20,
    },iteminfo:{ flex:1,
        paddingVertical:SPACING.space_4,
        justifyContent:'space-between',
    },
    textinfo:{
        fontFamily:FONTFAMILY.poppins_medium,
        fontSize:FONTSIZE.size_18,
        color:COLORS.primaryWhiteHex,
    },
    siinfo:{
        fontFamily:FONTFAMILY.poppins_regular,
        fontSize:FONTSIZE.size_12,
        color:COLORS.secondaryLightGreyHex,
    },
    cartiteminfo:{
        height:50,
        width:50*2 + SPACING.space_20,
        borderRadius:BORDERRADIUS.radius_15,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:COLORS.primaryDarkGreyHex,
    },
    rt:{
        fontFamily:FONTFAMILY.poppins_regular,
        fontSize:FONTSIZE.size_10,
        color:COLORS.primaryWhiteHex,
    },
    cirow:{
        flex:1,
        alignItems:'center',
        gap:SPACING.space_20,
        flexDirection:'row',
        justifyContent:'center',
    },
    cirowinfo:{
        flex:1,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between',
    },
    sizebox:{
        backgroundColor:COLORS.primaryBlackHex,
        height:40,
        width:100,
        borderRadius:BORDERRADIUS.radius_10,
        justifyContent:'center',
        alignItems:'center',

    },
    textsize:{
        fontFamily:FONTFAMILY.poppins_medium,
        color:COLORS.primaryLightGreyHex,
    },
    textsize2:{
        fontFamily:FONTFAMILY.poppins_semibold,
        fontSize:FONTSIZE.size_18,
        color:COLORS.primaryOrangeHex,
    },
    textsize3:{
        color:COLORS.primaryWhiteHex
    },
    buttoninfo:{
        padding:SPACING.space_10,
        backgroundColor:COLORS.primaryOrangeHex,
        borderRadius:BORDERRADIUS.radius_10
    },
    qt:{
        fontFamily:FONTFAMILY.poppins_semibold,
        fontSize:FONTSIZE.size_16,
        color:COLORS.primaryWhiteHex,
    },
    quantityinfo:{
        backgroundColor:COLORS.primaryBlackHex,
        borderColor:COLORS.primaryOrangeHex,
        width:80,
        borderWidth: 2,
        borderRadius:BORDERRADIUS.radius_10,
        paddingVertical:SPACING.space_4,
        alignItems:'center',
    },
    cislg:{
        flexDirection:'row',
        alignItems:'center',
        gap: SPACING.space_12,
        padding: SPACING.space_12,
        // eslint-disable-next-line prettier/prettier
        borderRadius:BORDERRADIUS.radius_25,
    },
    ic:{
        height:150,
        width:150,
        borderRadius: BORDERRADIUS.radius_20,
    },
     ciinfo:{
        flex:1,
        alignSelf:'stretch',
        justifyContent:'space-around',
     },
     cartitemsingle:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
     },cc:{
        flexDirection:"row",
         justifyContent:'space-evenly',
         alignItems:'center'
      }
 
});

 export default Cartitem;
