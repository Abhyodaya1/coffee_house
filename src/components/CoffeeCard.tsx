/* eslint-disable prettier/prettier */
import { Dimensions, ImageBackground, ImageProps, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';
import CustomIcon from './CustomIcon';
import BGicons from './BGicons';
import { Colors } from 'react-native/Libraries/NewAppScreen';
const card_width = Dimensions.get('window').width*0.32;

interface CoffeeCardProps{
    id: string;
    type:string;
    index: number;
    price:any;
    imagelink_square: ImageProps;
     name: string;
     special_ingredient:string;
     average_rating:number;
     roasted:string;
     buttonPressHandler:any;

    
      }
      const CoffeeCard: React.FC<CoffeeCardProps> = ({
     id,
     type,
     index,
     price,
     imagelink_square,
     name,
     special_ingredient,
     average_rating,
      roasted,
     buttonPressHandler,

     }) => {
     return (
     <LinearGradient
     start={{x:0 , y:0}}
      end={{x:1 , y:1}}
      style={styles.Cardlinear}
      colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}>
      <ImageBackground 
     source={imagelink_square}
      style={styles.cardtile}
       resizeMode="cover">
        <View style={styles.rating}>
        <CustomIcon name ={'star'} color={COLORS.primaryOrangeHex} size={FONTSIZE.size_16} />
        <Text style={styles.text}>{average_rating}</Text>
       </View>
      </ImageBackground>
      <Text style={styles.names}>{name}</Text>
      <Text style={styles.si}>{special_ingredient}</Text>
      <View style={styles.footer}><Text style={styles.pc}>
        $<Text style={styles.pp}>{price.price}</Text></Text>
        <TouchableOpacity onPress={()=>{buttonPressHandler({id,index,imagelink_square,name,roasted,type,prices:[{...price,quantity: 1}],special_ingredient})}}>
            <BGicons color={COLORS.primaryWhiteHex} name={'add'} BGcolor={COLORS.primaryOrangeHex} size={FONTSIZE.size_10}/></TouchableOpacity></View>
     </LinearGradient>
     )
     } 
      const styles = StyleSheet.create({
      cardtile:{
        width:card_width,
        height:card_width,
        borderRadius:BORDERRADIUS.radius_20,
        marginBottom:SPACING.space_15,
        overflow:'hidden',
        flexWrap:'wrap'
    },
    Cardlinear:{
      padding:SPACING.space_12,
      borderRadius:BORDERRADIUS.radius_15
      },
      rating:{
        flexDirection:'row',
        justifyContent:'center',
        backgroundColor:COLORS.primaryBlackRGBA,
        alignItems:'center',
        gap:SPACING.space_10,
        paddingHorizontal:SPACING.space_15,
        position:'absolute',
        borderBottomLeftRadius:BORDERRADIUS.radius_20,
        borderBottomRightRadius:BORDERRADIUS.radius_20,
        top:0,
        right:0,
      },
      text:{fontFamily: FONTFAMILY.poppins_medium,
        color:COLORS.primaryWhiteHex,
        lineHeight:22,
        fontSize: FONTSIZE.size_14
      },
      footer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:SPACING.space_10
     },
      pp:{
        fontFamily:FONTFAMILY.poppins_semibold,
        color:COLORS.primaryOrangeHex,
      fontSize:FONTSIZE.size_18      },
      pc:{
        margin:SPACING.space_2,
        fontFamily:FONTFAMILY.poppins_semibold,
        color:COLORS.primaryOrangeHex,
      fontSize:FONTSIZE.size_18   
      },
      si:{
        fontFamily:FONTFAMILY.poppins_light,
        color:COLORS.primaryWhiteHex,
      fontSize:FONTSIZE.size_12 
      },
      names:{
        fontFamily:FONTFAMILY.poppins_light,
        color:COLORS.primaryWhiteHex,
      fontSize:FONTSIZE.size_16 
      },

})

export default CoffeeCard;

